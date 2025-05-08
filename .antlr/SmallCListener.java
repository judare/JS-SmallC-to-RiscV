// Generated from /Users/fosebad/Desktop/repositories/smallc/SmallC.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link SmallCParser}.
 */
public interface SmallCListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link SmallCParser#smallc_program}.
	 * @param ctx the parse tree
	 */
	void enterSmallc_program(SmallCParser.Smallc_programContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmallCParser#smallc_program}.
	 * @param ctx the parse tree
	 */
	void exitSmallc_program(SmallCParser.Smallc_programContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmallCParser#type_specifier}.
	 * @param ctx the parse tree
	 */
	void enterType_specifier(SmallCParser.Type_specifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmallCParser#type_specifier}.
	 * @param ctx the parse tree
	 */
	void exitType_specifier(SmallCParser.Type_specifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmallCParser#param_decl_list}.
	 * @param ctx the parse tree
	 */
	void enterParam_decl_list(SmallCParser.Param_decl_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmallCParser#param_decl_list}.
	 * @param ctx the parse tree
	 */
	void exitParam_decl_list(SmallCParser.Param_decl_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmallCParser#parameter_decl}.
	 * @param ctx the parse tree
	 */
	void enterParameter_decl(SmallCParser.Parameter_declContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmallCParser#parameter_decl}.
	 * @param ctx the parse tree
	 */
	void exitParameter_decl(SmallCParser.Parameter_declContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmallCParser#compound_stmt}.
	 * @param ctx the parse tree
	 */
	void enterCompound_stmt(SmallCParser.Compound_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmallCParser#compound_stmt}.
	 * @param ctx the parse tree
	 */
	void exitCompound_stmt(SmallCParser.Compound_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmallCParser#var_decl}.
	 * @param ctx the parse tree
	 */
	void enterVar_decl(SmallCParser.Var_declContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmallCParser#var_decl}.
	 * @param ctx the parse tree
	 */
	void exitVar_decl(SmallCParser.Var_declContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmallCParser#var_decl_list}.
	 * @param ctx the parse tree
	 */
	void enterVar_decl_list(SmallCParser.Var_decl_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmallCParser#var_decl_list}.
	 * @param ctx the parse tree
	 */
	void exitVar_decl_list(SmallCParser.Var_decl_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmallCParser#variable_id}.
	 * @param ctx the parse tree
	 */
	void enterVariable_id(SmallCParser.Variable_idContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmallCParser#variable_id}.
	 * @param ctx the parse tree
	 */
	void exitVariable_id(SmallCParser.Variable_idContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmallCParser#stmt}.
	 * @param ctx the parse tree
	 */
	void enterStmt(SmallCParser.StmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmallCParser#stmt}.
	 * @param ctx the parse tree
	 */
	void exitStmt(SmallCParser.StmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmallCParser#cond_stmt}.
	 * @param ctx the parse tree
	 */
	void enterCond_stmt(SmallCParser.Cond_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmallCParser#cond_stmt}.
	 * @param ctx the parse tree
	 */
	void exitCond_stmt(SmallCParser.Cond_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmallCParser#while_stmt}.
	 * @param ctx the parse tree
	 */
	void enterWhile_stmt(SmallCParser.While_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmallCParser#while_stmt}.
	 * @param ctx the parse tree
	 */
	void exitWhile_stmt(SmallCParser.While_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmallCParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterExpr(SmallCParser.ExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmallCParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitExpr(SmallCParser.ExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmallCParser#condition}.
	 * @param ctx the parse tree
	 */
	void enterCondition(SmallCParser.ConditionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmallCParser#condition}.
	 * @param ctx the parse tree
	 */
	void exitCondition(SmallCParser.ConditionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmallCParser#disjunction}.
	 * @param ctx the parse tree
	 */
	void enterDisjunction(SmallCParser.DisjunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmallCParser#disjunction}.
	 * @param ctx the parse tree
	 */
	void exitDisjunction(SmallCParser.DisjunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmallCParser#conjunction}.
	 * @param ctx the parse tree
	 */
	void enterConjunction(SmallCParser.ConjunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmallCParser#conjunction}.
	 * @param ctx the parse tree
	 */
	void exitConjunction(SmallCParser.ConjunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmallCParser#comparison}.
	 * @param ctx the parse tree
	 */
	void enterComparison(SmallCParser.ComparisonContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmallCParser#comparison}.
	 * @param ctx the parse tree
	 */
	void exitComparison(SmallCParser.ComparisonContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmallCParser#relation}.
	 * @param ctx the parse tree
	 */
	void enterRelation(SmallCParser.RelationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmallCParser#relation}.
	 * @param ctx the parse tree
	 */
	void exitRelation(SmallCParser.RelationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmallCParser#sum}.
	 * @param ctx the parse tree
	 */
	void enterSum(SmallCParser.SumContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmallCParser#sum}.
	 * @param ctx the parse tree
	 */
	void exitSum(SmallCParser.SumContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmallCParser#term}.
	 * @param ctx the parse tree
	 */
	void enterTerm(SmallCParser.TermContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmallCParser#term}.
	 * @param ctx the parse tree
	 */
	void exitTerm(SmallCParser.TermContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmallCParser#factor}.
	 * @param ctx the parse tree
	 */
	void enterFactor(SmallCParser.FactorContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmallCParser#factor}.
	 * @param ctx the parse tree
	 */
	void exitFactor(SmallCParser.FactorContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmallCParser#primary}.
	 * @param ctx the parse tree
	 */
	void enterPrimary(SmallCParser.PrimaryContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmallCParser#primary}.
	 * @param ctx the parse tree
	 */
	void exitPrimary(SmallCParser.PrimaryContext ctx);
}