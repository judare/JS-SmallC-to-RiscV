import SmallCListener from "./parser/SmallCListener.js";
export default class SemanticValidator extends SmallCListener {
  constructor() {
    super();
    this.scopes = [{}]; // stack de scopes (manejo de bloques)
    this.errors = [];
  }

  enterBlock() {
    this.scopes.push({});
  }

  exitBlock() {
    this.scopes.pop();
  }

  enterVarDecl(ctx) {
    const varName = ctx.ID().getText();
    const currentScope = this.scopes[this.scopes.length - 1];

    if (currentScope[varName]) {
      this.errors.push(`Variable '${varName}' ya fue declarada.`);
    } else {
      currentScope[varName] = true;
    }
  }

  enterVarUse(ctx) {
    const varName = ctx.ID().getText();
    if (!this.scopes.some((scope) => scope[varName])) {
      this.errors.push(`Variable '${varName}' no está declarada.`);
    }
  }

  enterFuncDecl(ctx) {
    const funcName = ctx.ID().getText();
    const globalScope = this.scopes[0];

    if (globalScope[funcName]) {
      this.errors.push(`Función '${funcName}' ya fue declarada.`);
    } else {
      globalScope[funcName] = "function";
    }
  }

  enterFuncCall(ctx) {
    const funcName = ctx.ID().getText();
    if (!this.scopes[0][funcName]) {
      this.errors.push(`Función '${funcName}' no está declarada.`);
    }
  }
}
