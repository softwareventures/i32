import test from "ava";
import {iadd, iand, icmp, ieq, igt, igte, ilt, ilte, imod, ineg, ineq, inot, isub} from "./index";

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

test("ilt", t => {
    t.is(ilt(0, 0), 0);
    t.is(ilt(1, 0), 0);
    t.is(ilt(-1, 0), 1);
    t.is(ilt(6, 8), 1);
    t.is(ilt(6, 6), 0);
    t.is(ilt(6, 4), 0);
    t.is(ilt(6, -2), 0);
    t.is(ilt(-6, 2), 1);
    t.is(ilt(-6, -2), 1);
    t.is(ilt(-6, -6), 0);
    t.is(ilt(-6, -7), 0);
    t.is(ilt(-0x7fffffff, 15243), 1);
    t.is(ilt(-0x80000000, 15243), 1);
    t.is(ilt(-0x80000001, 15243), 0);
    t.is(ilt(0x80000000, 15243), 1);
    t.is(ilt(0x80000001, 15243), 1);
});

test("ilte", t => {
    t.is(ilte(0, 0), 1);
    t.is(ilte(1, 0), 0);
    t.is(ilte(-1, 0), 1);
    t.is(ilte(6, 8), 1);
    t.is(ilte(6, 6), 1);
    t.is(ilte(6, 4), 0);
    t.is(ilte(6, -2), 0);
    t.is(ilte(-6, 2), 1);
    t.is(ilte(-6, -2), 1);
    t.is(ilte(-6, -6), 1);
    t.is(ilte(-6, -7), 0);
    t.is(ilte(-0x7fffffff, 15243), 1);
    t.is(ilte(-0x80000000, 15243), 1);
    t.is(ilte(-0x80000001, 15243), 0);
    t.is(ilte(0x80000000, 15243), 1);
    t.is(ilte(0x80000001, 15243), 1);
});

test("igt", t => {
    t.is(igt(0, 0), 0);
    t.is(igt(1, 0), 1);
    t.is(igt(-1, 0), 0);
    t.is(igt(6, 8), 0);
    t.is(igt(6, 6), 0);
    t.is(igt(6, 4), 1);
    t.is(igt(6, -2), 1);
    t.is(igt(-6, 2), 0);
    t.is(igt(-6, -2), 0);
    t.is(igt(-6, -6), 0);
    t.is(igt(-6, -7), 1);
    t.is(igt(-0x7fffffff, 15243), 0);
    t.is(igt(-0x80000000, 15243), 0);
    t.is(igt(-0x80000001, 15243), 1);
    t.is(igt(0x80000000, 15243), 0);
    t.is(igt(0x80000001, 15243), 0);
});

test("igte", t => {
    t.is(igte(0, 0), 1);
    t.is(igte(1, 0), 1);
    t.is(igte(-1, 0), 0);
    t.is(igte(6, 8), 0);
    t.is(igte(6, 6), 1);
    t.is(igte(6, 4), 1);
    t.is(igte(6, -2), 1);
    t.is(igte(-6, 2), 0);
    t.is(igte(-6, -2), 0);
    t.is(igte(-6, -6), 1);
    t.is(igte(-6, -7), 1);
    t.is(igte(-0x7fffffff, 15243), 0);
    t.is(igte(-0x80000000, 15243), 0);
    t.is(igte(-0x80000001, 15243), 1);
    t.is(igte(0x80000000, 15243), 0);
    t.is(igte(0x80000001, 15243), 0);
});

test("ieq", t => {
    t.is(ieq(0, 0), 1);
    t.is(ieq(1, 0), 0);
    t.is(ieq(-1, 0), 0);
    t.is(ieq(6, 8), 0);
    t.is(ieq(6, 6), 1);
    t.is(ieq(6, 4), 0);
    t.is(ieq(6, -2), 0);
    t.is(ieq(-6, 2), 0);
    t.is(ieq(-6, -2), 0);
    t.is(ieq(-6, -6), 1);
    t.is(ieq(-6, -7), 0);
    t.is(ieq(-0x7fffffff, 0x80000000), 0);
    t.is(ieq(-0x7fffffff, 0x80000001), 1);
    t.is(ieq(0x80000000, -0x80000000), 1);
    t.is(ieq(0x100000000, 0), 1);
});

test("ineq", t => {
    t.is(ineq(0, 0), 0);
    t.is(ineq(1, 0), 1);
    t.is(ineq(-1, 0), 1);
    t.is(ineq(6, 8), 1);
    t.is(ineq(6, 6), 0);
    t.is(ineq(6, 4), 1);
    t.is(ineq(6, -2), 1);
    t.is(ineq(-6, 2), 1);
    t.is(ineq(-6, -2), 1);
    t.is(ineq(-6, -6), 0);
    t.is(ineq(-6, -7), 1);
    t.is(ineq(-0x7fffffff, 0x80000000), 1);
    t.is(ineq(-0x7fffffff, 0x80000001), 0);
    t.is(ineq(0x80000000, -0x80000000), 0);
    t.is(ineq(0x100000000, 0), 0);
});

test("iand", t => {
    t.is(iand(0, 0), 0);
    t.is(iand(0, 1), 0);
    t.is(iand(1, 1), 1);
    t.is(iand(-1, 1), 1);
    t.is(iand(-334, 423792), 423792);
    t.is(iand(0, 347829), 0);
    t.is(iand(0x80000000, 234782), 234782);
    t.is(iand(0x80000000, -324293), -324293);
    t.is(iand(-0x80000000, 32489), 32489);
    t.is(iand(0x100000000, 0), 0);
    t.is(iand(0x100000000, 234782), 0);
    t.is(iand(0x100000000, -324293), 0);
    t.is(iand(-0x100000000, 32489), 0);
    t.is(iand(0x100000001, 2431), 2431);
    t.is(iand(0x100000001, 0), 0);
    t.is(iand(1, 0x100000012), 0x12);
});