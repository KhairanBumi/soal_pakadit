// Soal 8 - Verifikasi Keamanan Login Ganda
let isPasswordCorrect = true;
let isEmailVerified = true;

let canOpenDashboard = isPasswordCorrect && isEmailVerified;
console.log("Kedua kondisi true:", canOpenDashboard);

isEmailVerified = false;
canOpenDashboard = isPasswordCorrect && isEmailVerified;
console.log("Jika email belum terverifikasi:", canOpenDashboard);
