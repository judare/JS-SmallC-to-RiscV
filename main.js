import antlr4 from "antlr4";
import SmallCLexer from "./parser/SmallCLexer.js";
import SmallCParser from "./parser/SmallCParser.js";
import CodeGenVisitor from "./CodeGenVisitor.js";

const input = `
int x;
x = 42;
if (x) {
  x = 10;
}
`;

const chars = new antlr4.InputStream(input);
const lexer = new SmallCLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new SmallCParser(tokens);

// Parse a `program` (entry rule)
const tree = parser.program();

// Opcional: imprime el árbol como texto
// console.log(tree.toStringTree(parser.ruleNames));

const visitor = new CodeGenVisitor();
const riscvCode = visitor.visitProgram(tree);

console.log("### Código RISC-V generado ###\n" + riscvCode);
