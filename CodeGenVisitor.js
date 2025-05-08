import SmallCBaseVisitor from "./parser/SmallCVisitor.js";

export default class CodeGenVisitor extends SmallCBaseVisitor {
  constructor() {
    super();
    this.output = [];
    this.tempVar = 0;
  }

  newTemp() {
    return `t${this.tempVar++}`;
  }

  visitProgram(ctx) {
    ctx.statement().forEach((stmt) => this.visit(stmt));
    return this.output.join("\n");
  }

  visitVarDecl(ctx) {
    const id = ctx.ID().getText();
    this.output.push(`# int ${id} (alocado en stack o simulado)`);
    return null;
  }

  visitAssignment(ctx) {
    const lvalCtx = ctx.lvalue();

    // const id = lvalCtx.ID().getText();
    // const value = this.visit(lvalCtx.expr());
    // this.output.push(`li t0, ${value}`);
    // this.output.push(`# store en ${id} (omitido: no hay memoria simulada aún)`);
    return null;
  }

  visitExpr(ctx) {
    if (ctx.INT()) {
      return ctx.INT().getText();
    } else if (ctx.ID()) {
      const id = ctx.ID().getText();
      this.output.push(`# cargar ${id} en t0 (simulado)`);
      return `t0`;
    }
  }

  visitIfStmt(ctx) {
    const cond = this.visit(ctx.expr());
    const label = `L${this.tempVar++}`;
    this.output.push(`li t0, ${cond}`);
    this.output.push(`beqz t0, ${label}`);
    this.visit(ctx.statement());
    this.output.push(`${label}:`);
    return null;
  }

  visitWhileStmt(ctx) {
    const startLabel = `L${this.tempVar++}`;
    const endLabel = `L${this.tempVar++}`;
    this.output.push(`${startLabel}:`);
    const cond = this.visit(ctx.expr());
    this.output.push(`li t0, ${cond}`);
    this.output.push(`beqz t0, ${endLabel}`);
    this.visit(ctx.statement());
    this.output.push(`j ${startLabel}`);
    this.output.push(`${endLabel}:`);
    return null;
  }

  visitBlock(ctx) {
    ctx.statement().forEach((stmt) => this.visit(stmt));
    return null;
  }
}
