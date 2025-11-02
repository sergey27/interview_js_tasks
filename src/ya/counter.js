/**
 * Реализуйте функцию, которая создаёт объект счётчика
 * с базовыми методами: increment, decrement, reset.
 *
 * @param {number} init - начальное значение счётчика
 * @returns {object} объект с методами increment, decrement, reset
 */
function createCounter(init) {
    const startValue = init;
    return {
        increment: () => ++init,
        decrement: () => --init,
        reset: () => init = startValue
    }
};

const counter = createCounter(5);
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())
