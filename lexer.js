import SmallCListener from "./parser/SmallCListener.js";

export default class SemanticValidator extends SmallCListener {
  constructor() {
    super();
    this.scope = {};
    this.error = "";
    this.labelCount = 0;
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
    let ids = this.getElements(ctx.ID());
    ids.forEach(declare);
  }

  getElements(el) {
    if (el.length >= 1) {
      return el;
    } else {
      return [el];
    }
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
  }

  enterAsignacion(ctx) {
    const id = ctx.lvalue().ID().getText();
    if (!this.scope[id]) return this.setError(`Variable no declarada: '${id}'`);
  }
}
