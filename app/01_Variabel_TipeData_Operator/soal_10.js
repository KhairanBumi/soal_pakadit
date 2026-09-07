// Soal 10 - Block Scope let vs var
const member = true;

if (member === true) {
  let diskonLet = 0.20;
  var diskonVar = 0.10;

  console.log("Di dalam blok - let:", diskonLet);
  console.log("Di dalam blok - var:", diskonVar);
}

// console.log(diskonLet); // ReferenceError: diskonLet is not defined
console.log("Di luar blok - var masih bisa diakses:", diskonVar);

// Analisis:
// let memiliki block scope, sehingga hanya dapat diakses di dalam blok if.
// var memiliki function scope, sehingga pada contoh ini masih dapat diakses
// setelah blok if selesai.
