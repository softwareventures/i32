import test from "ava";
import {i32, iadd, iand, icmp, idiv, ieq, igt, igte, ilt, ilte, imod, ineg, ineq, inot, ior, ipow, isub} from "./index";

test("i32", t => {
    t.is(i32(0), 0);
    t.is(i32(1), 1);
    t.is(i32(-1), -1);
    t.is(i32(0x7fffffff), 0x7fffffff);
    t.is(i32(0x80000000), -0x80000000);
    t.is(i32(-0x7fffffff), -0x7fffffff);
    t.is(i32(-0x80000000), -0x80000000);
});

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

test("ipow", t => {
    t.is(ipow(0, 0), 1);
    t.is(ipow(0, -1), 0);
    t.is(ipow(0, -2481), 0);
    t.is(ipow(0, 1), 0);
    t.is(ipow(0, 32147), 0);
    t.is(ipow(2, -1), 0);
    t.is(ipow(2, 0), 1);
    t.is(ipow(2, 4), 16);
    t.is(ipow(2, 7), 128);
    t.is(ipow(5, -32478), 0);
    t.is(ipow(5, 0), 1);
    t.is(ipow(5, 2), 25);
    t.is(ipow(7, 0), 1);
    t.is(ipow(7, 3), 343);
    t.is(ipow(37, 9), 324385413);
    t.is(ipow(6, 179), 0);
    t.is(ipow(7, 190), 0);
});

test("idiv", t => {
    t.is(idiv(0, 5), 0);
    t.is(idiv(4, 5), 0);
    t.is(idiv(5, 5), 1);
    t.is(idiv(6, 5), 1);
    t.is(idiv(24, 5), 4);
    t.is(idiv(-31, 5), -6);
    t.is(idiv(5.1, 5), 1);
    t.is(idiv(-3, 5), 0);
    t.is(idiv(-6, 5), -1);
    t.is(idiv(0, -5), 0);
    t.is(idiv(4, -5), 0);
    t.is(idiv(5, -5), -1);
    t.is(idiv(6, -5), -1);
    t.is(idiv(24, -5), -4);
    t.is(idiv(-31, -5), 6);
    t.is(idiv(5.1, -5), -1);
    t.is(idiv(-3, -5), 0);
    t.is(idiv(-6, -5), 1);
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

test("ior", t => {
    t.is(ior(0, 0), 0);
    t.is(ior(0, 1), 1);
    t.is(ior(1, 1), 1);
    t.is(ior(-1, 1), -1);
    t.is(ior(-334, 423792), -334);
    t.is(ior(0, 347829), 347829);
    t.is(ior(0x80000000, 234782), -0x80000000);
    t.is(ior(0x80000000, -324293), -0x80000000);
    t.is(ior(-0x80000000, 32489), -0x80000000);
    t.is(ior(0x100000000, 0), 0);
    t.is(ior(0x100000000, 234782), 234782);
    t.is(ior(0x100000000, -324293), -324293);
    t.is(ior(-0x100000000, 32489), 32489);
    t.is(ior(0x100000001, 2431), 1);
    t.is(ior(0x100000001, 0), 1);
    t.is(ior(1, 0x100000012), 1);
});