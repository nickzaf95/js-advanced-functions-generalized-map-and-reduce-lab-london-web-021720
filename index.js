// Add your functions here
const map = (array, func) => {
    let arr = []
    array.forEach(element => {
        arr.push(func(element))
    });
    return arr
}

const reduce = (array, func, startingPoint=0) => {
    let result = startingPoint
    if (typeof (func(result, array[0])) === "boolean") {
        result = true
    }
    array.forEach(element => {
        result = func(result, element)
    });
    return result
}