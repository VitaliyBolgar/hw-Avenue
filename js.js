var chislo = prompt("Введите 3х значное число")
// promt = 333
var edinizy = chislo%10;
// Х = 333%10 = 3
var a = (chislo/10) - (edinizy*0.1);
// Х = 333/10 - 3*0.1 = 33.3 - 0.3 = 33
var deciatki = a%10;
// X = 33%10 = 3
sotni = (a/10) - (deciatki*0.1);
// 33/10 - 3.3-3*0.1 = 3

var text = sotni+", "+deciatki+", "+edinizy;
alert(text);
