/*
    BFS, Breadth-First Search - поиск в ширину
    Какой кратчайший путь ведет к Х
 */


const graph = {
    "you": ["alice", "bob", "claire"],
    "bob": ["anuj", "peggy"],
    "alice": ["peggy"],
    "claire": ["thom", "jonny"],
    "anuj": [],
    "peggy": [],
    "thom": [],
    "jonny": []

}
const isSeller = (name) => {
    return name === "thom";
};

const bfs = function (name) {

    const search_queue = graph[name];
    const searched = [name];

    while (search_queue.length > 0) {
        const person = search_queue.shift()
        if (!searched.includes(person)) {
            if (isSeller(person)) {
                return true;
            } else {
                search_queue.push(...graph[person]);
                searched.push(person);
            }
        }
    }
    return false;
};

console.log(bfs("you"))