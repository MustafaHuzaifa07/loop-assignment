// 1) Calculate the sum of two numbers
function calculateSum(a, b) {
    return a + b;
  }
  
  console.log(calculateSum(5, 3));
  
  // 2) Print the numbers from 1 to 10 using a for loop
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  // 3) Find the factorial of a given number
  function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  
  console.log(factorial(5));
  
  // 4) Print the even numbers between 1 and 20 using a while loop
  let number = 1;
  while (number <= 20) {
    if (number % 2 === 0) {
      console.log(number);
    }
    number++;
  }
  
  // 5) Calculate the sum of all elements in an array
  function calculateSumOfArrayElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  console.log(calculateSumOfArrayElements([1, 2, 3, 4, 5]));
  
  // 6) Print the Fibonacci sequence up to a given number using a for loop
  function fibonacciSequence(num) {
    let sequence = [0, 1];
    for (let i = 2; i <= num; i++) {
      const nextNumber = sequence[i - 1] + sequence[i - 2];
      if (nextNumber <= num) {
        sequence.push(nextNumber);
      } else {
        break;
      }
    }
    return sequence;
  }
  
  console.log(fibonacciSequence(100));
  
  // 7) Check if a number is prime or not
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPrime(7));
  
  // 8) Calculate the factorial of a given number using a do-while loop
  function factorial(num) {
    let result = 1;
    let i = 1;
    do {
      result *= i;
      i++;
    } while (i <= num);
    return result;
  }
  
  console.log(factorial(5));
  
  // 9) Reverse a string
  function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  console.log(reverseString('Hello'));
  
  // 10) Find the largest element in an array
  function findLargestElement(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }
  
  console.log(findLargestElement([1, 7, 4, 9, 2]));
  
  // 11) Calculate the area of a rectangle given its length and width
  function calculateRectangleArea(length, width) {
    return length * width;
  }
  
  console.log(calculateRectangleArea(5, 3));
  
  // 12) Print the multiplication table of a given number using a while loop
  function printMultiplicationTable(num) {
    let i = 1;
    while (i <= 10) {
      console.log(num + ' * ' + i + ' = ' + num * i);
      i++;
    }
  }
  
  printMultiplicationTable(5);
  
  // 13) Calculate the average of all elements in an array
  function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  
  console.log(calculateAverage([1, 2, 3, 4, 5]));
  
  // 14) Check if a given year is a leap year using a switch case
  function isLeapYear(year) {
    switch (true) {
      case year % 400 === 0:
        return true;
      case year % 100 === 0:
        return false;
      case year % 4 === 0:
        return true;
      default:
        return false;
    }
  }
  
  console.log(isLeapYear(2020));
  
  // 15) Find the Greatest Common Divisor (GCD) of two numbers
  function findGCD(num1, num2) {
    while (num2 !== 0) {
      let temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }
    return num1;
  }
  
  console.log(findGCD(24, 36));
  
  // 16) Print the numbers from 10 to 1 in descending order using a for loop
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
  
  // 17) Count the number of vowels in a string
  function countVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countVowels('Hello World'));
  
  // 18) Print a triangle of asterisks using a nested for loop
  for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }
  
  // 19) Check if a given string is a palindrome
  function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  console.log(isPalindrome('madam'));
  
  // 20) Calculate the sum of all odd numbers between 1 and 50 using a while loop
  let number2 = 1;
  let sum2 = 0;
  while (number2 <= 50) {
    if (number2 % 2 !== 0) {
      sum2 += number2;
    }
    number2++;
  }
  console.log(sum2);
  
  // 21) Find the longest string in an array
  function findLongestString(arr) {
    let longest = '';
    for (let str of arr) {
      if (str.length > longest.length) {
        longest = str;
      }
    }
    return longest;
  }
  
  console.log(findLongestString(['apple', 'banana', 'orange']));
  
  // 22) Check if a given number is a perfect square using a switch case
  function isPerfectSquare(num) {
    switch (true) {
      case Math.sqrt(num) % 1 === 0:
        return true;
      default:
        return false;
    }
  }
  
  console.log(isPerfectSquare(25));
  
  // 23) Reverse an array in place
  function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
    return arr;
  }
  
  console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
  
  // 24) Print the first 10 multiples of a given number using a for loop
  function printMultiples(num) {
    for (let i = 1; i <= 10; i++) {
      console.log(num + ' * ' + i + ' = ' + num * i);
    }
  }
  
  printMultiples(5);
  
  // 25) Check if a string is a valid email address
  function isValidEmail(email) {
    // Regular expression pattern for email validation
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
  
  console.log(isValidEmail('test@example.com'));
  
  // 26) Calculate the factorial of a given number using a recursive function
  function factorialRecursive(num) {
    if (num === 0 || num === 1) {
      return 1;
    }
    return num * factorialRecursive(num - 1);
  }
  
  console.log(factorialRecursive(5));
  
  // 27) Check if a given number is even or odd using a switch case
  function checkEvenOrOdd(num) {
    switch (num % 2) {
      case 0:
        return 'Even';
      default:
        return 'Odd';
    }
  }
  
  console.log(checkEvenOrOdd(7));
  
  // 28) Find the sum of all prime numbers between 1 and 100 using a while loop
  function sumOfPrimes() {
    let sum = 0;
    let number = 2;
    while (number <= 100) {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        sum += number;
      }
      number++;
    }
    return sum;
  }
  
  console.log(sumOfPrimes());
  
  // 29) Find the smallest element in an array
  function findSmallestElement(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    return smallest;
  }
  
  console.log(findSmallestElement([1, 7, 4, 9, 2]));
  
  // 30) Convert a decimal number to binary using a do-while loop
  function decimalToBinary(num) {
    let binary = '';
    do {
      binary = (num % 2) + binary;
      num = Math.floor(num / 2);
    } while (num > 0);
    return binary;
  }
  
  console.log(decimalToBinary(10));
  