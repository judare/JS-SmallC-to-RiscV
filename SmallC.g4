grammar SmallC;

program: bloqueRaiz+ | functionDecl+;

bloque
    : asignacion
    | declaracion
    | ifSentencia
    | whileSentencia
    | forSentencia
    | incremento
    | block
    | returnStmt
    | funLlamado ';'
    ;

bloqueRaiz
    : declaracion
    | bloque
    ;

functionDecl
    : tipoRetorno ID '(' paramList? ')' bloqueRaiz
    ;

paramList
    : param (',' param)*
    ;

argumentList
    : expresion (',' expresion)*
    ;

returnStmt
    : 'return' expresion? ';'
    ;

param : tiposPermitidos ID;

tipoRetorno: tiposPermitidos| 'void' ;
tiposPermitidos: 'int' | 'char' ;

lvalue
    : ID
    | ID '[' expresion ']'     // acceso a arreglo, como a[i]
    ;

declaracion
    : tiposPermitidos ID ('[' INT ']')? ';'
    | tiposPermitidos ID  '=' expresion ';'
    | tiposPermitidos ID  ( ',' ID )* ';'
    ;

asignacion
    : lvalue '=' expresion ';'
    ;
ifSentencia: 'if' '(' expresion ')' bloque ('else' bloque)? ;
whileSentencia: 'while' '(' expresion ')' bloque ;
forSentencia: 'for' '(' asignacion expresion ';' lvalue ('++' | '--') ')' bloque ;
block: '{' bloque* '}' ;

incremento
    : lvalue ('++' | '--') ';'
    ;

funArgsLlamado
    : expresion (',' expresion)*
    ;

funLlamado
    : ID '(' argumentList? ')' 
    ;

expresion
    : expresion op=('*'|'/' | '-') expresion     # Math
    | expresion '+' expresion         #suma
    | expresion op=('=='|'!='|'<'|'>'|'<='|'>=') expresion  # BoolComparacion
    | expresion op=('&&'|'||') expresion   # BoolLogico
    | '(' expresion ')'               # ExpresionContenedora
    | funLlamado    # Funcion
    | lvalue                       # ArrayPositionOrVariable
    | INT                         # Int
    | '"' ID* '"'                 # Cadena
    ;

// Comentarios
COMENTARIOS_LINEA: '//' ~[\r\n]* -> skip ;
COMENTARIOS_BLOQUES: '/*' .*? '*/' -> skip ;

// Tipos basicos
ID: [a-zA-Z_][a-zA-Z0-9_]* ;
INT: [0-9]+ ;
WS: [ \t\r\n]+ -> skip ;
