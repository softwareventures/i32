import {fold} from "@softwareventures/array";

/** Coerces the specified value to a signed 32-bit integer. */
export function i32(value: number): number {
    return value | 0;
}

export function inot(value: number): number {
    return ((!(value | 0)) as any) | 0;
}

export function icmp(value: number): number {
    return ~value;
}

export function ineg(value: number): number {
    return (-(value | 0)) | 0;
}

export function ipow(a: number, b: number): number {
    // Adapted from https://stackoverflow.com/a/101613/31662
    let base = a | 0;
    let exp = b | 0;

    if (exp < 0) {
        return 0;
    }

    if (base === 1) {
        return 1;
    }

    let result = 1;
    while (true) {
        if (exp & 1) {
            result = imul(result, base);
        }
        if (result <= 0) {
            return 0;
        }
        exp = exp >>> 1;
        if (exp === 0) {
            return result;
        }
        base = imul(base, base);
    }
}

export import imul = require("imul");

export function iproduct(...values: number[]): number {
    return fold(values, imul, 1);
}

export function idiv(a: number, b: number): number {
    return ((a | 0) / (b | 0)) | 0;
}

export function imod(a: number, b: number): number {
    return ((a | 0) % (b | 0)) | 0;
}

export function iadd(a: number, b: number): number {
    return ((a | 0) + (b | 0)) | 0;
}

export function isum(...values: number[]): number {
    return fold(values, iadd, 0);
}

export function isub(a: number, b: number): number {
    return ((a | 0) - (b | 0)) | 0;
}

export function ishl(a: number, b: number): number {
    return a << b;
}

export function ishr(a: number, b: number): number {
    return a >> b;
}

export function ilt(a: number, b: number): number {
    return (((a | 0) < (b | 0)) as any) | 0;
}

export function ilte(a: number, b: number): number {
    return (((a | 0) <= (b | 0)) as any) | 0;
}

export function igt(a: number, b: number): number {
    return (((a | 0) > (b | 0)) as any) | 0;
}

export function igte(a: number, b: number): number {
    return (((a | 0) >= (b | 0)) as any) | 0;
}

export function ieq(a: number, b: number): number {
    return (((a | 0) === (b | 0)) as any) | 0;
}

export function ineq(a: number, b: number): number {
    return (((a | 0) !== (b | 0)) as any) | 0;
}

export function iband(a: number, b: number): number {
    return a & b;
}

export function ixor(a: number, b: number): number {
    return a ^ b;
}

export function ibor(a: number, b: number): number {
    return a | b;
}

export function iand(a: number, b: number): number {
    return (((a | 0) && (b | 0)) as any) | 0;
}

export function ior(a: number, b: number): number {
    return (((a | 0) || (b | 0)) as any) | 0;
}