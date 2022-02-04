/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import {fold} from "@softwareventures/array";

/** Coerces the specified value to a signed 32-bit integer. */
export function i32(value: number): number {
    return value | 0;
}

export function inot(value: number): number {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (!(value | 0) as any) | 0;
}

export function icmp(value: number): number {
    return ~value;
}

export function ineg(value: number): number {
    return -(value | 0) | 0;
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

    if (exp >= 31) {
        return 0;
    }

    if (base === 2) {
        return 1 << exp;
    }

    let accumulator = 1;
    // eslint-disable-next-line no-constant-condition
    while (true) {
        if (exp & 1) {
            const next = imul(accumulator, base);
            if ((accumulator > 0xb504 || base > 0xb504) && idiv(next, accumulator) !== base) {
                return 0;
            }
            accumulator = next;
        }
        exp = exp >>> 1;
        if (exp === 0) {
            return accumulator;
        }
        if (base > 0xb504) {
            return 0;
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
    return (a | 0) % (b | 0) | 0;
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (((a | 0) < (b | 0)) as any) | 0;
}

export function ilte(a: number, b: number): number {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (((a | 0) <= (b | 0)) as any) | 0;
}

export function igt(a: number, b: number): number {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (((a | 0) > (b | 0)) as any) | 0;
}

export function igte(a: number, b: number): number {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (((a | 0) >= (b | 0)) as any) | 0;
}

export function ieq(a: number, b: number): number {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (((a | 0) === (b | 0)) as any) | 0;
}

export function ineq(a: number, b: number): number {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return ((a | 0 && b | 0) as any) | 0;
}

export function ior(a: number, b: number): number {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return ((a | 0 || b | 0) as any) | 0;
}
