/**
 * Необходимо написать функцию, которая разделит каждую строку
 * в массиве `words` по строке `separator`.
 * Необходимо вернуть массив получившихся после разделения строк,
 * исключая пустые строки
 */
const splitWordsBySeparator = (words, separator) => {
    const newWords = [];
    for(const word of words){
        const arrayOfWords = word.split(separator)
        for(const part of arrayOfWords){
            if(part){
                newWords.push(part);
            }
        }
    }
    return newWords;
};

console.log(splitWordsBySeparator(
    ["one.two.three", "four.five", "six"],
    "."
))

console.log(splitWordsBySeparator(
    ["1/", "/2", "/", "0"],
    "/"
))