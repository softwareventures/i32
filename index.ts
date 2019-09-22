export function inot(value: number): number {
    return ((!(value | 0)) as any) | 0;
}

export function icmp(value: number): number {
    return ~value;
}

export function ineg(value: number): number {
    return (-(value | 0)) | 0;
}

export import imul = require("imul");

export function iadd(a: number, b: number): number {
    return ((a | 0) + (b | 0)) | 0;
}

export function isub(a: number, b: number): number {
    return ((a | 0) - (b | 0)) | 0;
}