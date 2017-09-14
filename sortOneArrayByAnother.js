/**
*
* Task: order data in 'array' by data from 'order' array
* Result: [1, 6, 5, 3]
*
*/

var array = [3, 6, 5, 1];
var order = [3, 1, 2, 0];

function sort(data, order) {
  for (var i=0; i<order.length; i++) {
    order[i] = data[order[i]]
  }
  
  return order;
}

console.log(sort(array, order));
