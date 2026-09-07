// Soal 6 - Percabangan dalam fungsi
function cekKelulusan(nilaiUjian) {
  if (nilaiUjian >= 75) {
    return "Lulus Kompeten";
  }

  return "Remedial";
}

console.log(cekKelulusan(80));
