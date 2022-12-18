export function stringComparator(s1: string, s2: string): number {
    const n1 = s1.toLowerCase();
    const n2 = s2.toLowerCase();
    if (n1 > n2) {
        return 1;
    }
    if (n1 < n2) {
        return -1;
    }
    return 0;
};