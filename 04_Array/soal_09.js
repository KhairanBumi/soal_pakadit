// Soal 9 - Destructuring + Rest Parameters
let semuaNilai = [95, 88, 90, 85, 78, 82];

const ambilNilai = ([nilaiUtama, ...sisaNilai]) => {
  return { nilaiUtama, sisaNilai };
};

const { nilaiUtama, sisaNilai } = ambilNilai(semuaNilai);

console.log("Nilai utama:", nilaiUtama);
console.log("Sisa nilai:", sisaNilai);
