// Soal 5 - Default parameter
function hitungOngkir(jarak, tarif = 5000) {
  return jarak * tarif;
}

console.log("3 km, tarif 7000:", hitungOngkir(3, 7000));
console.log("4 km, tarif default:", hitungOngkir(4));
