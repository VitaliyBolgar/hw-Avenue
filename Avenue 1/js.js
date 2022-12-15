// let first = +prompt();
// let second = +prompt();

// function callSumm2(par1, par2) {
// 	let summPar = par1 + par2;
// 	return summPar;
// }
// let RezultS = callSumm2(first, second);
// console.log(`Результат: ${RezultS}`);

// const newArr = [111, 222, 333, 444, 555]
// console.log(newArr)
// const newArr2 = newArr.slice(2, 4)
// console.log(newArr2)

// // Метод Канкаn
// тоже не изменяет наши массивы
// const arr1 = [1, 2, 3, 4, 56, 78, 88];
// const arr2 = [1, 2, 3];
// console.log(arr1.concat(arr2))

// const arr3 = arr1.concat(arr2);


// forEach метод который перебирает наш массив
// нельзя применять к строке (метод массива)
// => стрелочная функция??
// есть 3 значения. 1(item) - каждый эл массива по очереди, 2(index) - индекс (0,1,2,3,4,5,6), 3(array) - вывод массива
// обычно item || index

// const newArr = [111, 222, 333, 444, 555]
// newArr.splice(0, 2, 2222222, 55555)
// // delete newArr[2]
// console.log(newArr);
// console.log(newArr.length);


// let programma = prompt("Введте ваш возвраст")




let age = prompt()

function changeAge(wAge) {
let wAge = (age <= 3) ? 'такой молодой?' :
	(age > 3 && age <= 13) ? "Скоро 14" :
		age == 14 ? 'пора идти за паспортом' :
	(age > 14 && age < 49) ? "учись трудись работой брат" :
	(age >= 50 && age <= 114) ? "Тут плоды будут пожинаться" :
						'Это очень странно';
	return(wAge)
}


// let ageN2 

alert(changeAge())
	
let t = age
while (t < 5) {
	changeAge()
	console.log(t)
	t++
}
	// ? alert('Круто!') : alert("Нет!")