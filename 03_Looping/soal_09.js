// Soal 9 - Analisis Infinite Loop
// Kode bermasalah:
// var flag = 1;
// while (flag < 10) {
//   console.log("Iterasi ke-" + flag);
// }
// Penyebab: flag tidak pernah berubah, sehingga kondisi flag < 10
// selalu true dan while berjalan tanpa henti.

var flag = 1;
while (flag < 10) {
  console.log("Iterasi ke-" + flag);
  flag++; // perbaikan: ubah flag agar kondisi akhirnya false
}
