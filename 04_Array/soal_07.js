// Soal 7 - Split & Join
let judul = "belajar pemrograman perangkat bergerak smk";

const kataKata = judul.split(" ");
const slug = kataKata.join("-");

console.log(slug);
