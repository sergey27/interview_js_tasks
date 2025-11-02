/**
 * Функция проверяет, является ли строка палиндромом
 *
 * @param {string} str - Строка, которую необходимо проверить
 * @returns {boolean} Булево значение, является ли строка палиндромом
 */
function isPalindrome(str) {
    const preparedStr = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
    const reversedStr = preparedStr.split('').reverse().join('');

    return preparedStr===reversedStr;
}

/**
 * Функция проверяет, является ли строка палиндромом
 *
 * @param {string} str - Строка, которую необходимо проверить
 * @returns {boolean} Булево значение, является ли строка палиндромом
 */
function isPalindrome1(str) {
    let start = 0;
    let end = str.length -1;

    function isChar(el){
        return el.toLowerCase() !== el.toUpperCase()
    }

    function isNumber(el){
        return "0123456789".includes(el);
    }

    while(start < end){

        const startEl = str[start];
        if(!isChar(startEl) && !isNumber(startEl)){
            start++;
            continue;
        }

        const endEl = str[end];
        if(!isChar(endEl) && !isNumber(endEl)){
            end--;
            continue;
        }

        if(startEl.toLowerCase() !== endEl.toLowerCase()){
            return false;
        }

        start++;
        end--;
    }

    return true;
}

console.log(isPalindrome(
    "Do geese see God?"
)); //true

console.log(isPalindrome(
    "Hello, world!"
)); //false

console.log(isPalindrome(
    "Madam, I’m Adam"
));//true

console.log(isPalindrome(
    "Аса"
));//true

 console.log(isPalindrome(
    "ЁмЁ"
));//true