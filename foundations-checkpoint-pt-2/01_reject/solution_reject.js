/* eslint-disable no-unused-vars */
function reject(arr, func){
    let result = arr.map(func).filter(el => el === false)
    console.log(result)
    }
    