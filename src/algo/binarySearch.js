// Временная сложность бинарного поиска в худшем и среднем случае — O(log n),
// где \(n\) — количество элементов в списке. В лучшем случае,
//     когда искомый элемент находится на первом шаге, сложность составляет O(1).
//     Для работы бинарному поиску необходим предварительно отсортированный массив,
//     иначе он не будет работать корректно.

function binarySearch(arr, value) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.round((left +right) / 2);
        if (arr[mid] === value) {
            return true;
        }
        if (arr[mid] > value) {
            right = mid - 1;
        } else if (arr[mid] < value) {
            left = mid + 1;
        }
    }

    return false;
}

console.log(binarySearch([1, 4, 8, 10, 14, 15, 16, 17, 20, 31], 8))