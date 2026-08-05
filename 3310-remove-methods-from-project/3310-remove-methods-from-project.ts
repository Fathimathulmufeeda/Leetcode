function remainingMethods(n: number, k: number, invocations: number[][]): number[] {
    let graph: number[][] = Array.from({ length: n }, () => []);

    for (let [a, b] of invocations) {
        graph[a].push(b);
    }
    let suspicious = new Set<number>();

    function dfs(node: number) {
        if (suspicious.has(node)) return;
        suspicious.add(node);

        for (let nei of graph[node]) {
            dfs(nei);
        }
    }

    dfs(k);
    for (let [a, b] of invocations) {
        if (!suspicious.has(a) && suspicious.has(b)) {
            // cannot remove → return all
            return Array.from({ length: n }, (_, i) => i);
        }
    }
    let result: number[] = [];
    for (let i = 0; i < n; i++) {
        if (!suspicious.has(i)) result.push(i);
    }

    return result;
}