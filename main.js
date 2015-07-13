function sum(n1, n2) {
  return n1 + n2;
}

function isEqual(a, b) {
  if (a === b)
    return true;
  else
    return false;
}

function discountPercentage(total, dis) {
  if (dis <= 0 || dis >= 100)
    return "Invalid discount percentage. Must be 0-100 exclusive.";
  else {
    var totalDis = total * (dis * .01);
    return totalDis;
  }
}

// console.log(discountPercentage(100, 25));

function stringCapitalize(str) {
  var result = "";
  var list = str.split(" ");
  for (var w = 0; w < list.length; w++) {
    var newWord = ""
    if (list[w].length === 1)
      newWord += list[w].toUpperCase() + " ";
    else {
      for (var l = 0; l < list[w].length; l++) {
        if (l === 0)
          newWord += list[w].charAt(l).toUpperCase();
        else if (l === list[w].length - 1)
          newWord += list[w].charAt(l) + " ";
        else
          newWord += list[w].charAt(l);
      }
    }
    result += newWord;
  }
  return result;
}

// console.log(stringCapitalize("this is a string"));

function evenNumbers(n, r) {
  var result = "";
  if (n < 0 || n > 100)
    return "Give an argument 0-100";
  else {
    for (var i = n; i < r; i++) {
      if (i % 2 === 0)
        result += i + " ";
    }
  }
  return result;
}

// console.log(evenNumbers(0, Math.floor(Math.random() * 100)));

function isDivisible(a, b) {
  //if a is divisible by b, return true
  //otherwise return false
  if (a % b === 0)
    return true;
  else
    return false;
}

function oddNumbers(n) {
  //n = some random integer 0-100
  //if n > 40, output all odd integers 40-n
  //if n < 40, output all odd ints 0-40
  if (n < 0 || n > 100)
    return "Give a value 0-100.";
  else if (n < 40)
    return oddBelow40();
  else
    return oddAbove40(n);
}

function oddBelow40() {
  var result = "";
  for (var i = 1; i < 40; i += 2)
    result += i + " ";
  return result;
}

function oddAbove40(n) {
  var result = "";
  for (var i = 41; i <= n; i += 2)
    result += i + " ";
  return result;
}

// console.log("below 40: " + oddBelow40());
// console.log("above 40: " + oddAbove40());
var randNum = Math.floor(Math.random() * 100);

console.log("Random number: " + randNum);
console.log("Output: " + oddNumbers(randNum));
