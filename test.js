import fs from "fs";
import { getAST, validateLexer } from "./antlr.js";

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

  const { validator } = validateLexer(tree);

  if (validator.error) {
    if (expected === "done") {
      console.log("❌ Test error " + file, validator.error);
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
testLexer("./examples/done-fib.c", "done");
testLexer("./examples/error-lexer-var.c", "error");
testLexer("./examples/error-lexer-nodeclared-fn.c", "error");
testLexer("./examples/error-lexer-nodeclared.c", "error");
