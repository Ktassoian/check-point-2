const capitalize = str => str.toUpperCase();
function useMapToUpperCase(str){
    let result = [];
      str
        .split(' ')
        .map((el) => {
            result.push(capitalize(el));
        })
    return result;  
};

function useFilter(arr){
    return arr.filter(el => el.includes('@'))
};

function sumWithReduce(arr, start){
    
    let sum = arr.reduce((preVal, curVal) => preVal + curVal);
    if (start){
        return sum + start;
    }
    return sum
};

function filterEvensDoubleAndSum(arr){
    return arr.filter(num => num % 2 === 0)
    .map(num => num * 2)
    .reduce((preVal, curVal) => preVal + curVal)

}