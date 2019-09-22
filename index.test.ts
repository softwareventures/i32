import test from "ava";
import {iadd, inot} from "./index";

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