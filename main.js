import antlr4 from "antlr4";
import fs from "fs";
import SmallCLexer from "./parser/SmallCLexer.js";
import SmallCParser from "./parser/SmallCParser.js";
import CodeGenVisitor from "./CodeGenVisitor.js";

class MyErrorListener extends antlr4.error.ErrorListener {
  syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
    throw new Error(
      `Error de sintaxis en línea ${line}, columna ${column}: ${msg}`
    );
  }
}

const getAST = (input) => {
  const chars = new antlr4.InputStream(input);
  const lexer = new SmallCLexer(chars);
  lexer.addErrorListener(new MyErrorListener());
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new SmallCParser(tokens);
  parser.addErrorListener(new MyErrorListener());
  return parser.program();
};

const testAST = async (input) => {
  const tree = await getAST(input);
  return tree;
};

const getRiscvCode = async (input) => {
  const tree = getAST(input);

  const visitor = new CodeGenVisitor();
  const riscvCode = visitor.visitProgram(tree);

  return riscvCode;
};

testAST(fs.readFileSync("./examples/error-var.c", "utf-8")).catch(() =>
  console.log("✅ Test error successful")
);

testAST(fs.readFileSync("./examples/done-simple.c", "utf-8")).then(() =>
  console.log("✅ Test ok simple")
);

testAST(fs.readFileSync("./examples/done-loops.c", "utf-8")).then(() =>
  console.log("✅ Test ok loops")
);

testAST(fs.readFileSync("./examples/done-arr.c", "utf-8")).then(() =>
  console.log("✅ Test ok arrays")
);

testAST(fs.readFileSync("./examples/done-math.c", "utf-8")).then(() =>
  console.log("✅ Test ok Math")
);
