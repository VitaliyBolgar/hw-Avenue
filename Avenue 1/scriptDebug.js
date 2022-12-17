// function checkPoly(str) {
// 	let reverStr = ''
// 	for (let i = str.length - 1; i >= 0; i--){
// 		reverStr += str[i]
// 	}
// 	return reverStr.toLowerCase() === str.toLowerCase();
// }

// const checkPoly = (str) => str.toLowerCase() === str.toLowerCase().split('').reverse().join('')

// console.log(checkPoly('Виталий'));
// console.log(checkPoly('level'));
// console.log(checkPoly('мадам'));
// // console.log(checkPoly('Аннааваыаы'));

// let arr = [11, 22, 33, 222, 44, 55, 2121313, 22, 11, 66, 77,]
// console.log(arr.indexOf(2221));
// console.log(arr.lastIndexOf(22));

// console.log(arr.includes(3223));

/*Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.*/

let first = ["a", "b", "c"];
let second = [1, 2, 3];
let third = [0, 01, 02];
let res = first + second + third;

// массивы
console.log(first);
console.log(second);
console.log(third);

// Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
let all = [].concat(first, second,third);
console.log(all);

// Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
first.push(1,2,3,)
console.log(first);

// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
let rSecond = second.reverse();
console.log(rSecond);

// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.*/
second.unshift(4,5,6,);
console.log(second);



// Работа с shift, pop
// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
let ll = ['js', 'css', 'jq']

let firstEl = ll.shift()
	console.log(firstEl);


// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

let ld = ll.pop();
console.log(ld);


// Работа с slice
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
let mass2 = [1, 2, 3, 4, 5];
let massSLice = mass2.slice(0, 3);
console.log(massSLice);


// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
let massSLice2 = mass2.slice(3,5);
console.log(massSLice2);


// Работа с splice

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
let mSplice1 = mass2.splice(1,2)
console.log(mass2);


// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
let mass3 = [1, 2, 3, 4, 5];
let del1 = mass3.splice(1, 3);
console.log(del1);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let mass4 = [1, 2, 3, 4, 5];

mass4.splice(3, 0, 'a', 'b', 'c');
console.log(mass4);


// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let mass5 = [1, 2, 3, 4, 5];
mass5.splice(2, 0, 'a', 'b');
mass5.splice(5, 0, 'c');
mass5.splice(7, 0, 'e');

console.log(mass5);

// 