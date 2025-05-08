import antlr4 from "antlr4";
import fs from "fs";
import SmallCLexer from "./parser/SmallCLexer.js";
import SmallCParser from "./parser/SmallCParser.js";
import SemanticValidator from "./lexer.js";
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
  parser.buildParseTrees = true;
  parser.addErrorListener(new MyErrorListener());
  return parser.program();
};

const testSyntax = async (file, expected = "done") => {
  const input = fs.readFileSync(file, "utf-8");
  try {
    await getAST(input);
    if (expected === "done") {
      console.log("✅ Test ok " + file);
    }
    if (expected === "error") {
      console.log("❌ Test error " + file);
    }
  } catch (err) {
    if (expected === "done") {
      console.log("❌ Test error " + file);
    } else if (expected === "error") {
      console.log("✅ Test ok " + file, err?.message);
    }
  }
};

const testLexer = async (file, expected = "done") => {
  const input = fs.readFileSync(file, "utf-8");
  const tree = await getAST(input);

  const walker = new antlr4.tree.ParseTreeWalker();
  const validator = new SemanticValidator();
  walker.walk(validator, tree);

  if (validator.error) {
    if (expected === "done") {
      console.log("❌ Test error " + file);
    } else if (expected === "error") {
      console.log("✅ Test ok " + file, validator.error);
    }
  } else {
    if (expected === "done") {
      console.log("✅ Test ok " + file);
    } else if (expected === "error") {
      console.log("❌ Test error " + file);
    }
  }
};

testSyntax("./examples/done-simple.c");
testSyntax("./examples/done-loops.c");
testSyntax("./examples/done-arr.c");
testSyntax("./examples/done-math.c");
testSyntax("./examples/done-functions.c");
testSyntax("./examples/error-var.c", "error");
testSyntax("./examples/error-localvars.c", "error");
testLexer("./examples/error-lexer-var.c", "error");
testLexer("./examples/error-lexer-nodeclared-fn.c", "error");
testLexer("./examples/error-lexer-nodeclared.c", "error");
