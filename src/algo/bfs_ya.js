const graph = {
    "A": ["B", "D"],
    "B": ["C", "N", "Z"],
    "D": ["E", "F"],
    "F": ["S"]
}

function fetchFlights(from) {
    return Promise.resolve(graph[from] || []);
}


async function findPath(from, to, fetchFlights) {
    const search_queue = await fetchFlights(from);
    const searched = [from];

    while (search_queue.length) {
        const node = search_queue.shift();
        if (node === to) {
            searched.push(node)
            return searched;
        }

        searched.push(node);
        const flights = await fetchFlights(node);
        for (const n of flights) {
            if (!searched.includes(n)) {
                search_queue.push(n);
            }
        }
    }

    return new Error("No way")
}

(async () => {
    console.log(await findPath("A", "S", fetchFlights))
})();