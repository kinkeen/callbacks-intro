// BEFORE: anonymous callback as function expression 
/*[1,2,3].forEach(function (num) {
  console.log('num: ', num);
});*/

// AFTER: anonymous callback as arrow function
[1,2,3].forEach((num) => {
  console.log('num: ', num);
});

[1,2,3].forEach(num => console.log('num: ', num));