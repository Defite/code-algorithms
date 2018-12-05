Array.prototype.chunk = function (chunk_size) {
  var temp = this.slice(0),
      results = [];
    
  while (temp.length) {
    results.push(temp.splice(0, chunk_size));
  }
  return results;
};

var arr = [1,2,3,4,5,6,7,8,9];

console.log(arr.chunk(3)); // [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
