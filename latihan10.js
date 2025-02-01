// //materi ownership\\


// class orang {
//   #umur;
//   constructor(nama, umur) {
//     this.nama = nama;
//     this.#umur = umur;
//   }

//   infoUmur() {
//     return this.#umur;
//   }

//   ubahUmur(umurBaru) {
//     if (umurBaru > 0) { // Memeriksa umurBaru, bukan umur
//       this.#umur = umurBaru;
//     } else {
//       console.error("Umur harus positif");
//     }
//   }
// }

// const siswa = new orang("John", 20);
// console.log(siswa.nama);
// console.log(siswa.infoUmur());

// siswa.ubahUmur(25);
// console.log(siswa.infoUmur());
// siswa.ubahUmur(-1); // Umur harus positif

//materi ownership\\

//namanya privat harus diawali dengan #, dan tidak bisa diakses dari luar class
// 

// class lingkaran {
//        static PI = 3.14;// fungsi static bisa diakses langsung tanpa harus membuat objek
//        constructor(jari2) {
//               this.jari2 = jari2;
//        }

//        luas() {
//               return lingkaran.PI * this.jari2 ** 2;
//        }
// }

// console.log('nilai PI : ',lingkaran.PI); // 3.14 inin= dari static
// const lingkaran1 = new lingkaran(5);
// console.log('hasil luas : ',lingkaran1.luas()); // 78.5
// lingkaran.PI = 4;
// console.log('nilai PI : ',lingkaran1.luas()); // 4

// class Aritmatika {
//        static tambah(a, b) {
//               return a + b;
//        }

//        static kali(a, b) {
//               return a * b;
//        }
// }

// console.log(Aritmatika.tambah(5, 10)); 
// console.log(Aritmatika.kali(5, 10));

// const hitung = new Aritmatika();

// console.log("===============")
// console.log(Aritmatika.tambah(5, 10)); // Error
// console.log(Aritmatika.kali(5, 10)); // Error

// 