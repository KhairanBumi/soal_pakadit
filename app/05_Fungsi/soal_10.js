// Soal 10 - Rest Parameters
const formatNamaLengkap = (...rest) => {
  const [depan, belakang] = rest;
  return `${depan} ${belakang}`;
};

console.log(formatNamaLengkap("Siti", "Aisyah"));
