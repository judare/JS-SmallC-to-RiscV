import antlr4 from "antlr4";
import SmallCLexer from "./parser/SmallCLexer.js";
import SmallCParser from "./parser/SmallCParser.js";
import CodeGenVisitor from "./CodeGenVisitor.js";
import SemanticValidator from "./lexer.js";

class MyErrorListener extends antlr4.error.ErrorListener {
  syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
    throw new Error(
      `Error de sintaxis en línea ${line}, columna ${column}: ${msg}`
    );
  }
}

const getAST = (input) => {
  // GET AST
  const chars = new antlr4.InputStream(input);
  const lexer = new SmallCLexer(chars);
  lexer.addErrorListener(new MyErrorListener());
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new SmallCParser(tokens);
  parser.addErrorListener(new MyErrorListener());
  const tree = parser.program();

  // validate lexer
  const walker = new antlr4.tree.ParseTreeWalker();
  const validator = new SemanticValidator();
  walker.walk(validator, tree);

  return tree;
};

const getRiscvCode = async (input) => {
  const tree = getAST(input);

  const visitor = new CodeGenVisitor();
  const riscvCode = visitor.visitProgram(tree);

  return riscvCode;
};
