// Generated from ./SmallC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import SmallCListener from './SmallCListener.js';
import SmallCVisitor from './SmallCVisitor.js';

const serializedATN = [4,1,12,61,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,1,1,1,1,1,1,1,1,1,
3,1,27,8,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,
5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,5,6,52,8,6,10,6,12,6,55,9,6,1,6,1,6,1,7,1,
7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,1,1,0,10,11,58,0,17,1,0,0,0,2,26,1,0,0,
0,4,28,1,0,0,0,6,32,1,0,0,0,8,37,1,0,0,0,10,43,1,0,0,0,12,49,1,0,0,0,14,
58,1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,19,1,0,0,0,19,17,1,0,0,0,19,20,
1,0,0,0,20,1,1,0,0,0,21,27,3,4,2,0,22,27,3,6,3,0,23,27,3,8,4,0,24,27,3,10,
5,0,25,27,3,12,6,0,26,21,1,0,0,0,26,22,1,0,0,0,26,23,1,0,0,0,26,24,1,0,0,
0,26,25,1,0,0,0,27,3,1,0,0,0,28,29,5,1,0,0,29,30,5,10,0,0,30,31,5,2,0,0,
31,5,1,0,0,0,32,33,5,10,0,0,33,34,5,3,0,0,34,35,3,14,7,0,35,36,5,2,0,0,36,
7,1,0,0,0,37,38,5,4,0,0,38,39,5,5,0,0,39,40,3,14,7,0,40,41,5,6,0,0,41,42,
3,2,1,0,42,9,1,0,0,0,43,44,5,7,0,0,44,45,5,5,0,0,45,46,3,14,7,0,46,47,5,
6,0,0,47,48,3,2,1,0,48,11,1,0,0,0,49,53,5,8,0,0,50,52,3,2,1,0,51,50,1,0,
0,0,52,55,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,56,1,0,0,0,55,53,1,0,0,
0,56,57,5,9,0,0,57,13,1,0,0,0,58,59,7,0,0,0,59,15,1,0,0,0,3,19,26,53];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SmallCParser extends antlr4.Parser {

    static grammarFileName = "SmallC.g4";
    static literalNames = [ null, "'int'", "';'", "'='", "'if'", "'('", 
                            "')'", "'while'", "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "ID", "INT", "WS" ];
    static ruleNames = [ "program", "statement", "varDecl", "assignment", 
                         "ifStmt", "whileStmt", "block", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SmallCParser.ruleNames;
        this.literalNames = SmallCParser.literalNames;
        this.symbolicNames = SmallCParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SmallCParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.statement();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1426) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SmallCParser.RULE_statement);
	    try {
	        this.state = 26;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 21;
	            this.varDecl();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 22;
	            this.assignment();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 23;
	            this.ifStmt();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 24;
	            this.whileStmt();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 25;
	            this.block();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varDecl() {
	    let localctx = new VarDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SmallCParser.RULE_varDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(SmallCParser.T__0);
	        this.state = 29;
	        this.match(SmallCParser.ID);
	        this.state = 30;
	        this.match(SmallCParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SmallCParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(SmallCParser.ID);
	        this.state = 33;
	        this.match(SmallCParser.T__2);
	        this.state = 34;
	        this.expr();
	        this.state = 35;
	        this.match(SmallCParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStmt() {
	    let localctx = new IfStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SmallCParser.RULE_ifStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(SmallCParser.T__3);
	        this.state = 38;
	        this.match(SmallCParser.T__4);
	        this.state = 39;
	        this.expr();
	        this.state = 40;
	        this.match(SmallCParser.T__5);
	        this.state = 41;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileStmt() {
	    let localctx = new WhileStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SmallCParser.RULE_whileStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(SmallCParser.T__6);
	        this.state = 44;
	        this.match(SmallCParser.T__4);
	        this.state = 45;
	        this.expr();
	        this.state = 46;
	        this.match(SmallCParser.T__5);
	        this.state = 47;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SmallCParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(SmallCParser.T__7);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1426) !== 0)) {
	            this.state = 50;
	            this.statement();
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 56;
	        this.match(SmallCParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SmallCParser.RULE_expr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        _la = this._input.LA(1);
	        if(!(_la===10 || _la===11)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SmallCParser.EOF = antlr4.Token.EOF;
SmallCParser.T__0 = 1;
SmallCParser.T__1 = 2;
SmallCParser.T__2 = 3;
SmallCParser.T__3 = 4;
SmallCParser.T__4 = 5;
SmallCParser.T__5 = 6;
SmallCParser.T__6 = 7;
SmallCParser.T__7 = 8;
SmallCParser.T__8 = 9;
SmallCParser.ID = 10;
SmallCParser.INT = 11;
SmallCParser.WS = 12;

SmallCParser.RULE_program = 0;
SmallCParser.RULE_statement = 1;
SmallCParser.RULE_varDecl = 2;
SmallCParser.RULE_assignment = 3;
SmallCParser.RULE_ifStmt = 4;
SmallCParser.RULE_whileStmt = 5;
SmallCParser.RULE_block = 6;
SmallCParser.RULE_expr = 7;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmallCParser.RULE_program;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SmallCListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmallCListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SmallCVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmallCParser.RULE_statement;
    }

	varDecl() {
	    return this.getTypedRuleContext(VarDeclContext,0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	ifStmt() {
	    return this.getTypedRuleContext(IfStmtContext,0);
	};

	whileStmt() {
	    return this.getTypedRuleContext(WhileStmtContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmallCListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmallCListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SmallCVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmallCParser.RULE_varDecl;
    }

	ID() {
	    return this.getToken(SmallCParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SmallCListener ) {
	        listener.enterVarDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmallCListener ) {
	        listener.exitVarDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SmallCVisitor ) {
	        return visitor.visitVarDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmallCParser.RULE_assignment;
    }

	ID() {
	    return this.getToken(SmallCParser.ID, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmallCListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmallCListener ) {
	        listener.exitAssignment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SmallCVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmallCParser.RULE_ifStmt;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmallCListener ) {
	        listener.enterIfStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmallCListener ) {
	        listener.exitIfStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SmallCVisitor ) {
	        return visitor.visitIfStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WhileStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmallCParser.RULE_whileStmt;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmallCListener ) {
	        listener.enterWhileStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmallCListener ) {
	        listener.exitWhileStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SmallCVisitor ) {
	        return visitor.visitWhileStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmallCParser.RULE_block;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SmallCListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmallCListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SmallCVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmallCParser.RULE_expr;
    }

	ID() {
	    return this.getToken(SmallCParser.ID, 0);
	};

	INT() {
	    return this.getToken(SmallCParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SmallCListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmallCListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SmallCVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SmallCParser.ProgramContext = ProgramContext; 
SmallCParser.StatementContext = StatementContext; 
SmallCParser.VarDeclContext = VarDeclContext; 
SmallCParser.AssignmentContext = AssignmentContext; 
SmallCParser.IfStmtContext = IfStmtContext; 
SmallCParser.WhileStmtContext = WhileStmtContext; 
SmallCParser.BlockContext = BlockContext; 
SmallCParser.ExprContext = ExprContext; 
