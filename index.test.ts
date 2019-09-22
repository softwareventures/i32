import test from "ava";
import {iadd, inot, isub} from "./index";

test("inot", t => {
    t.is(inot(0), 1);
    t.is(inot(1), 0);
    t.is(inot(-1), 0);
    t.is(inot(342), 0);
    t.is(inot(-342), 0);
});

test("iadd", t => {
    t.is(iadd(0, 0), 0);
    t.is(iadd(0, 21), 21);
    t.is(iadd(0, -21), -21);
    t.is(iadd(1, 2), 3);
    t.is(iadd(1e10, 1), 1410065409);
    t.is(iadd(123, 456), 579);
});

test("isub", t => {
    t.is(isub(0, 0), 0);
    t.is(isub(0, 21), -21);
    t.is(isub(0, -21), 21);
    t.is(isub(1, 2), -1);
    t.is(isub(1e10, 1), 1410065407);
    t.is(isub(579, 456), 123);
});