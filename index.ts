export function inot(value: number): number {
    return ((!(value | 0)) as any) | 0;
}