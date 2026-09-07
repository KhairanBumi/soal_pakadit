// Soal 7 - Validasi Usia
const inputUsia = "17";
const syaratUsia = 17;

const hasilStrict = inputUsia === syaratUsia;
const hasilPerbandingan = inputUsia >= syaratUsia;

console.log("inputUsia === syaratUsia:", hasilStrict);
console.log("inputUsia >= syaratUsia:", hasilPerbandingan);

// Penjelasan:
// === membandingkan nilai DAN tipe data, sehingga "17" (string) !== 17 (number).
// Operator >= melakukan konversi tipe secara implisit untuk perbandingan numerik,
// sehingga "17" dibandingkan sebagai angka 17 dan hasilnya true.
