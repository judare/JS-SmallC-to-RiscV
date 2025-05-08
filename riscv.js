import MyLangVisitor from "./parser/SmallCVisitor.js";
export default class RiscVGenerator extends MyLangVisitor {
  constructor() {
    super();
    this.output = [];
    this.labelCount = 0;
  }

  getNewLabel(prefix = "L") {
    return `.${prefix}${this.labelCount++}`;
  }

  visitFunctionDecl(ctx) {
    const name = ctx.ID().getText();
    this.output.push(`${name}:`);
    this.output.push(`    addi sp,sp,-32`);
    this.output.push(`    sw ra,28(sp)`);
    this.output.push(`    sw s0,24(sp)`);
    this.output.push(`    addi s0,sp,32`);

    // Asumimos solo un parámetro por simplicidad
    if (ctx.paramList()) {
      const params =
        ctx.paramList().length >= 1 ? ctx.paramList() : [ctx.paramList()];
      params.forEach((param) => {
        let p = param.param()?.[0] || param.param();
        const paramName = p.ID().getText();
        this.output.push(`    sw a0,-20(s0)  # guardar param ${paramName}`);
      });
    }

    this.visit(ctx.bloqueRaiz());

    this.output.push(`    lw ra,28(sp)`);
    this.output.push(`    lw s0,24(sp)`);
    this.output.push(`    addi sp,sp,32`);
    this.output.push(`    jr ra`);
    return null;
  }

  visitReturnStmt(ctx) {
    const exprResult = this.visit(ctx.expresion());
    this.output.push(`    mv a0,${exprResult}  # return`);
    return null;
  }

  visitInt(ctx) {
    const temp = `t${this.labelCount++}`;
    this.output.push(`    li ${temp},${ctx.getText()} # cargar entero`);
    return temp;
  }

  visitId(ctx) {
    const tmp = `t${this.labelCount++}`;
    return tmp;
  }

  visitIfSentencia(ctx) {
    const cond = this.visit(ctx.expresion());
    const elseLabel = this.getNewLabel("else");
    const endLabel = this.getNewLabel("end");

    // this.output.push(`    li a5,1`);
    this.output.push(`    bgt ${cond},a5,${elseLabel}`);

    this.visit(ctx.bloque(0));

    this.output.push(`    j ${endLabel}`);
    this.output.push(`${elseLabel}:`);
    if (ctx.bloque(1)) {
      this.visit(ctx.bloque(1));
    }
    this.output.push(`${endLabel}:`);
    return null;
  }

  visitFunLlamado(ctx) {
    const funcName = ctx.ID().getText();

    const arg = this.visit(ctx.argumentList().expresion(0));
    this.output.push(`    mv a0,${arg}  # cargar argumento`);
    this.output.push(`    call ${funcName} # llamar a función`);
    return "a0"; // resultado queda en a0
  }

  visitSuma(ctx) {
    const left = this.visit(ctx.expresion(0));
    const right = this.visit(ctx.expresion(1));
    const temp = `t${this.labelCount++}`;
    this.output.push(`    add ${temp},${left},${right} # expresion suma`);
    return temp;
  }
}
