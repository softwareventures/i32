export function inot(value: number): number {
    return ((!(value | 0)) as any) | 0;
}

export function iadd(a: number, b: number): number {
    return ((a | 0) + (b | 0)) | 0;
}