// function hajm(quti) {
//   return quti.eni * quti.uzunligi * quti.balandligi;
// }
// console.log(hajm({eni: 2, uzunligi: 5, balandligi: 1 }));

//74-misol

// function sonlar(son1, son2, arr) {
//   return arr.filter(son => son > son1 && son < son2);
// }
// console.log(sonlar(3, 8, [1, 5, 95, 0, 4, 7]));

//83-misol

// function soz(soz1, soz2) {
//   return soz1.toLowerCase() === soz2.toLowerCase();
// }
// console.log(soz("salom", "saLOm"));

//86-misol

// function kopaytr(massiv) {
//   let masiv = [];
//   for (i = 0; i < massiv.length; i++) {
//     masiv.push(massiv[i] * 2);
//   }
//   return masiv;
// }
// console.log(kopaytr([2, 5, 3]));

//87-misol

// function wordLengths(wordsArray) {
//   var lengthsArray = [];
//   for (i = 0; i < wordsArray.length; i++) {
//     lengthsArray.push(wordsArray[i].length);
//   }
//   return lengthsArray;
// }
// console.log(wordLengths(["hello", "world"]));

//94-misol

// function yigind(massiv) {
//   return massiv.reduce((yigindi, son) => son > 5 ? yigindi + son : yigindi, 0);
// }
// console.log(yigind([1, 5, 20, 30, 4, 9, 18]));

//95-misol

// function yigind(massiv) {
//   return massiv.reduce((yigindi, son) => son ? yigindi + son : yigindi, 0);
// }
// console.log(yigind([2,7,4]));
