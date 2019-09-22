import test from "ava";
import {iadd, icmp, imod, ineg, inot, isub} from "./index";

test("inot", t => {
    t.is(inot(0), 1);
    t.is(inot(1), 0);
    t.is(inot(-1), 0);
    t.is(inot(342), 0);
    t.is(inot(-342), 0);
});

test("icmp", t => {
    t.is(icmp(0), -1);
    t.is(icmp(1), -2);
    t.is(icmp(-1), 0);
    t.is(icmp(-0x3abc5126), 0x3abc5125);
    t.is(icmp(0xc543aeda), 0x3abc5125);
});

test("ineg", t => {
    t.is(ineg(0), 0);
    t.is(ineg(1), -1);
    t.is(ineg(-1), 1);
    t.is(ineg(342), -342);
    t.is(ineg(-342), 342);
    t.is(ineg(1e10), -1410065408);
    t.is(ineg(0x7fffffff), -0x7fffffff);
    t.is(ineg(-0x80000000), -0x80000000);
});

test("imod", t => {
    t.is(imod(0, 5), 0);
    t.is(imod(4, 5), 4);
    t.is(imod(5, 5), 0);
    t.is(imod(6, 5), 1);
    t.is(imod(5.1, 5), 0);
    t.is(imod(-3, 5), -3);
    t.is(imod(-6, 5), -1);
    t.is(imod(0, -5), 0);
    t.is(imod(4, -5), 4);
    t.is(imod(5, -5), 0);
    t.is(imod(6, -5), 1);
    t.is(imod(5.1, -5), 0);
    t.is(imod(-3, -5), -3);
    t.is(imod(-6, -5), -1);
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