import SmallCListener from "./parser/SmallCListener.js";

export default class SemanticValidator extends SmallCListener {
  constructor() {
    super();
    this.scope = {}; // stack de scopes para variables
    this.error = "";
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
    };
    let obj = ctx.ID().length >= 1 ? ctx.ID() : [ctx.ID()];
    obj.forEach(declare);
  }

  enterFunLlamado(ctx) {
    const id = ctx.ID().getText();
    if (!this.scope[id]) {
      return this.setError(`Función no declarada: '${id}'`);
    }
  }

  enterLvalue(ctx) {
    const id = ctx.ID().getText();
    const found = this.scope[id];
    if (!found) {
      return this.setError(`Variable no declarada: '${id}'`);
    }
  }

  enterParam(ctx) {
    const id = ctx.ID().getText();
    if (this.scope[id]) {
      return this.setError(`Param duplicado: '${id}'`);
    }
    this.scope[id] = "param";
  }

  enterFunctionDecl(ctx) {
    const id = ctx.ID().getText();
    if (this.scope[id]) {
      return this.setError(`Función ya declarada: '${id}'`);
    }
    this.scope[id] = "function";
  }
}
