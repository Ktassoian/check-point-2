/* eslint-disable no-unused-vars */

// input: function
// output: function that will run the input function on the first 3 calls. from the 4th call onwards, return undefined
function thrice(func) {
    let counter = 0;
    return function () {
      // run the input function on the first 3 calls.
      if (counter < 3) {
        counter++;
        //  run the function output
        return func();
        //    from the 4th call onwards, return undefined
      } else {
        return undefined;
      }
    };
  }
  