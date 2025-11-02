/**
 * Реализуйте функцию, которая принимает на вход два объекта Promise
 * с типом `number` и возвращает Promise с их суммой
 */
const addTwoPromises = async function (promise1, promise2) {
    return Promise.allSettled([promise1, promise2]).then(results => {
        return results.reduce((sum, result)=>{
            if(result.status === 'fulfilled'){
                return sum + result.value;
            }
            if(result.status === 'rejected'){
                return sum + result.reason;
            }
        }, 0);
    });
};


addTwoPromises(
    Promise.resolve(2),
    Promise.resolve(2)
).then(result => console.log(result));

addTwoPromises(
    Promise.reject(3),
    Promise.resolve(2)
).then(result => console.log(result));
