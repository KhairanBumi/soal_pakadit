// Soal 3 - Sensor Komentar Kasar
let komentar = "Wah, aplikasi ini sangat lambat dan buruk!";

const posisiBuruk = komentar.indexOf("buruk");
const potonganKalimat = komentar.substring(0, 19);

console.log("Indeks kata 'buruk':", posisiBuruk);
console.log("Substring indeks 0-19:", potonganKalimat);
