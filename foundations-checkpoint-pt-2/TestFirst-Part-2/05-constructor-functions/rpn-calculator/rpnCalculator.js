/* eslint-disable no-unused-vars, no-throw-literal*/
function RPNCalculator(){
    this.stack = [];
   
   }
   
   RPNCalculator.prototype.push = function(num){
       this.stack.push(num);
   };
   
   
   RPNCalculator.prototype.isCalcEmpty = function(func){
       if (this.stack.length < 2){
           throw 'rpnCalculatorInstance is empty'
       } else {
           num1 = this.stack.pop();
           num2 = this.stack.pop();
           this.push(func(num1, num2))
       }
   }
   
   
   RPNCalculator.prototype.plus = function(){
       // pop num off stack 2x and sum num1 + num2
   
       this.isCalcEmpty((num1, num2) => num1 + num2);
   }
   // question why first doesnt work
   RPNCalculator.prototype.value = function(){
       // return parseInt(this.stack);
       return this.stack[this.stack.length -1]
   }
   
   RPNCalculator.prototype.minus = function(){
       this.isCalcEmpty((num1, num2) => num2 - num1);
   }
   
   RPNCalculator.prototype.times = function(){
       this.isCalcEmpty((num1, num2) => num1 * num2);
   }
   
   
   RPNCalculator.prototype.divide = function(){
       this.isCalcEmpty((num1, num2) => num2 / num1);
   
   }
   
   RPNCalculator.prototype.clear = function(){
       this.stack = [];
   }
   
   
   
   
   
   