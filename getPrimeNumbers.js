/**
*
* Get prime numbers (all or till some number)
* https://youtu.be/s8zUK5jmXA4
*/
// O(n2)
const isPrimeNumber = (num) => {
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

const getPrimeNumbers = (limit) => {
  const numbers = [];
  
  for (let i = 2; i <= limit; i++) {
    if (isPrimeNumber(i)) {
      numbers.push(i);
    }
  }
  
  return numbers;
}

//const isPrimeNumber = (num) => {
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

const getPrimeNumbers = (limit) => {
  const numbers = [];
  
  for (let i = 2; i <= limit; i++) {
    if (isPrimeNumber(i)) {
      numbers.push(i);
    }
  }
  
  return numbers;
}

// isPrimeNumbers(200);
// [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199 ]

const getPrimeNumbers2 = (limit) => {
  const temp = [];
  const numbers = [];
  
  for (let i=2; i < limit; i++) {
    if (!temp[i]) {
      numbers.push(i);
      
      for (let j = i * 2; j <= limit; j += i) {
        temp[j] = true;
      }
    }
  }
  
  return numbers;
}

getPrimeNumbers2(200)


// O(loglogn)
// "sieve of Eratosthenes"
const getPrimeNumbers2 = (limit) => {
  const temp = [];
  const numbers = [];
  
  for (let i=2; i < limit; i++) {
    if (!temp[i]) {
      numbers.push(i);
      
      for (let j = i * 2; j <= limit; j += i) {
        temp[j] = true;
      }
    }
  }
  
  return numbers;
}

//getPrimeNumbers2(200)
//[ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199 ]
