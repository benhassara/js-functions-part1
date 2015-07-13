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

console.log(discountPercentage(100, 25));

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

console.log(stringCapitalize("this is a string"));
