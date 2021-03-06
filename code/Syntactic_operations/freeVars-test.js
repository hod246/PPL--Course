"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("C:/\u05EA\u05D9\u05E7\u05D9\u05D9\u05D4 \u05E8\u05D0\u05E9\u05D9\u05EA/\u05E1\u05DE\u05E1\u05D8\u05E8 \u05D2'/SPL/serverProject/spl-net/PPL_Course/node_modules/assert/assert.js");
var L3_ast_1 = require("../AST_Definitions/L3-ast");
var freeVars_1 = require("./freeVars");
assert.deepEqual(freeVars_1.height(L3_ast_1.parseL3("x")), 1);
assert.deepEqual(freeVars_1.height(L3_ast_1.parseL3("(lambda (x) (* x x))")), 2);
assert.equal(freeVars_1.occursFree("x", L3_ast_1.parseL3("1")), false);
assert.equal(freeVars_1.occursFree("x", L3_ast_1.parseL3("#t")), false);
assert.equal(freeVars_1.occursFree("x", L3_ast_1.parseL3('"s"')), false);
assert.equal(freeVars_1.occursFree("x", L3_ast_1.parseL3("'s")), false);
assert.equal(freeVars_1.occursFree("x", L3_ast_1.parseL3("x")), true);
assert.equal(freeVars_1.occursFree("x", L3_ast_1.parseL3("y")), false);
assert.equal(freeVars_1.occursFree("x", L3_ast_1.parseL3("(lambda () x)")), true);
assert.equal(freeVars_1.occursFree("x", L3_ast_1.parseL3("(lambda (x) x)")), false);
assert.equal(freeVars_1.occursFree("x", L3_ast_1.parseL3("(lambda (y) x)")), true);
assert.equal(freeVars_1.occursFree("x", L3_ast_1.parseL3("(lambda (y) (lambda (z) x))")), true);
assert.equal(freeVars_1.occursFree("x", L3_ast_1.parseL3("(lambda (x) (lambda (z) x))")), false);
assert.equal(freeVars_1.occursFree("x", L3_ast_1.parseL3("(lambda (y x) x)")), false);
assert.equal(freeVars_1.occursFree("x", L3_ast_1.parseL3("(if x 1 2)")), true);
assert.equal(freeVars_1.occursFree("x", L3_ast_1.parseL3("(if #t x 2)")), true);
assert.equal(freeVars_1.occursFree("x", L3_ast_1.parseL3("(if #t 1 x)")), true);
assert.equal(freeVars_1.occursFree("x", L3_ast_1.parseL3("(if #t 1 2)")), false);
assert.equal(freeVars_1.occursFree("x", L3_ast_1.parseL3("(+ 1 x)")), true);
assert.equal(freeVars_1.occursFree("x", L3_ast_1.parseL3("(+ 1 2)")), false);
/*
assert.equal(occursFree("x", parseL3("(let () x)")), true);
assert.equal(occursFree("x", parseL3("(let ((x 1)) x)")), false);
assert.equal(occursFree("x", parseL3("(let ((y 1)) x)")), true);
assert.equal(occursFree("x", parseL3("(let ((y 1)) (lambda (z) x))")), true);
assert.equal(occursFree("x", parseL3("(let ((x 1)) (lambda (z) x))")), false);
assert.equal(occursFree("x", parseL3("(let ((y 1) (x 2)) x)")), false);
assert.equal(occursFree("x", parseL3("(let ((y x) (x 2)) x)")), true);
assert.equal(occursFree("x", parseL3("(let ((y x) (x 2)) z)")), true);
*/
assert.deepEqual(freeVars_1.referencedVars(L3_ast_1.parseL3("(lambda (y) (lambda (z) x))")), [L3_ast_1.makeVarRef("x")]);
assert.deepEqual(freeVars_1.referencedVars(L3_ast_1.parseL3("(+ x y)")), [L3_ast_1.makeVarRef("x"), L3_ast_1.makeVarRef("y")]);
assert.deepEqual(freeVars_1.referencedVars(L3_ast_1.parseL3("(if x 1 2)")), [L3_ast_1.makeVarRef("x")]);
assert.deepEqual(freeVars_1.referencedVars(L3_ast_1.parseL3("(plus x 1)")), [L3_ast_1.makeVarRef("plus"), L3_ast_1.makeVarRef("x")]);
console.log(freeVars_1.referencedVars(L3_ast_1.parseL3("(lambda (y) (lambda (z) x))")));
//# sourceMappingURL=freeVars-test.js.map