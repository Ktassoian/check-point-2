/* eslint-disable no-unused-vars */
function presses(str){
    const nums = {1: ["A", "D", "G", "J", "M", "P", "T", "W", " ", "1"], 
    2: ["B", "E", "H", "K", "N", "Q", "U", "X", "0"], 
    3: ["C", "F", "I", "L", "O", "R", "V", "Y"], 
    4: ["S", "Z", "2", "3", "4", "5", "6", "8"],
    5: ["7", "9"]};
    let count = 0;
     let calculate = function(char) {
         return Object.keys(nums).find(key => nums[key].includes(char));
     };
     for (let i = 0; i < str.length; i++){
         count += parseInt(calculate(str.toUpperCase()[i]))
     }
     return count;
}