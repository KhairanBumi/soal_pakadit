// Soal 5 - Konversi Harga Produk
const hargaStr = "150000.50";
const stokStr = "25";

const harga = parseFloat(hargaStr);
const stok = parseInt(stokStr, 10);
const total = harga * stok;

console.log("Harga:", harga);
console.log("Stok:", stok);
console.log("Harga x stok:", total);
