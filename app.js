// uyga yil, kun, soat

let sana = new Date(prompt("sanani kiriting"));
let now = Date.now(); // 1970-01-01T00:00:00Z
let yil;
let kun ;
let soat;

yil = Math.floor((now - sana) / 1000 / 60 / 60 / 24 / 365.25) + ' yil';
kun = Math.floor((now - sana) / 1000 / 60 / 60 / 24 % 365.25) + ' kun';
soat = Math.floor((now - sana) / 1000 / 60 / 60 / 24 / 365.25 % 24) + ' soat';

alert(`${yil} ${kun} ${soat}`);



// 6 => 1 + 2 + 3 + 4 + 5 + 6 => 21

// let a = +prompt('son kiriting');
// var d = 0;
// for(i = 0; i <= a; i++){
//     d = i + d;
// }
// document.write(d);




// 12 => 2, 4, 6, 8, 10, 12

// let son = +prompt("son kiriting");

// for (let i = 1; i <= son; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} juft`);
//   }
// }