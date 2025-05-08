import SmallCListener from "./parser/SmallCListener.js";

export default class SemanticValidator extends SmallCListener {
  constructor() {
    super();
    this.scope = {};
    this.error = "";
    this.riscvCode = "";
    this.labelCount = 0;
  }

  genLabel(prefix) {
    return `${prefix}_${this.labelCount++}`;
  }

  setError(msg) {
    if (this.error) {
      return;
    }
    this.error = msg;
  }

  enterDeclaracion(ctx) {
    const declare = (id) => {
      if (this.scope[id]) {
        return this.setError(`Variable ya declarada: '${id}'`);
      }
      this.scope[id] = "variable";
      this.riscvCode += `\n# Declaración de variable ${id}\n`;
      this.riscvCode += `li t0, 0\n`;
      this.riscvCode += `# Aquí podrías almacenar en memoria o stack si se implementa\n`;
    };
    let ids = ctx.ID().length >= 1 ? ctx.ID() : [ctx.ID()];
    ids.forEach(declare);
  }

  enterFunLlamado(ctx) {
    const id = ctx.ID().getText();
    if (!this.scope[id]) {
      return this.setError(`Función no declarada: '${id}'`);
    }
    this.riscvCode += `\n# Llamada a función ${id}\njal ${id}\n`;
  }
  exitFunctionDecl(ctx) {
    this.riscvCode += `# Epílogo\nlw ra, 12(sp)\naddi sp, sp, 16\nret\n`;
  }

  enterLvalue(ctx) {
    const id = ctx.ID().getText();
    const found = this.scope[id];
    if (!found) {
      return this.setError(`Variable no declarada: '${id}'`);
    }
  }

  enterParam(ctx) {
    const declare = (id) => {
      if (this.scope[id]) {
        return this.setError(`Param duplicado: '${id}'`);
      }
      this.scope[id] = "param";
    };
    let ids = ctx.ID().length >= 1 ? ctx.ID() : [ctx.ID()];
    ids.forEach(declare);
  }

  enterFunctionDecl(ctx) {
    const id = ctx.ID().getText();
    if (this.scope[id]) {
      return this.setError(`Función ya declarada: '${id}'`);
    }
    this.scope[id] = "function";
    this.riscvCode += `\n${id}:\n`;
    this.riscvCode += `# Prologo\naddi sp, sp, -16\nsw ra, 12(sp)\n`;
  }

  enterIfSentenciat(ctx) {
    const elseLabel = this.genLabel("else");
    const endLabel = this.genLabel("endif");

    this.riscvCode += `\n# IF condicional\n# Aquí se evaluaría la condición y usaríamos beq/bne\n`;
    this.riscvCode += `# if falso, salta a ${elseLabel}\n`;
    this.riscvCode += `j ${elseLabel}\n`;
    this.riscvCode += `# Bloque then...\n`;
    this.riscvCode += `${elseLabel}:\n# Bloque else...\n`;
    this.riscvCode += `${endLabel}:\n`;
  }

  enterReturnStmt(ctx) {
    this.riscvCode += `\n# Return\n# Suponiendo que el valor está en a0\n`;
    this.riscvCode += `ret\n`;
  }

  enterAsignacion(ctx) {
    const id = ctx.lvalue().ID().getText();
    if (!this.scope[id]) return this.setError(`Variable no declarada: '${id}'`);

    this.riscvCode += `\n# Asignación a ${id}\n`;
    this.riscvCode += `# Suponiendo que el resultado ya está en a0 (simplificado)\n`;
  }
}
