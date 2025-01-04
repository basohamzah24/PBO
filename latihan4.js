
// console.log(nama);// ini undefined
// var nama = 'cika';

// var nama = 'cika'; //bernilai cika dan sukses
// console.log(nama);

console.log(sapa()); // ini sukses
var nama = 'cika'; 
var kampus = 'unismuh';
function sapa() {
   return `halo ${nama} dari kampus ${kampus}`;
}


// console.log(sapa()); // ini sukses

//local execution context

// var nama = 'cika'; 
// var kampus = 'unismuh';

// function sapa(kampus) {
//     var jurusan = 'teknik informatika';
//    return `halo ${nama} dari kampus ${kampus} jurusan ${jurusan}`;
// }
// console.log(sapa('unhas')); // ini sukses

// var bil = 1;

// function tambah() {
//     var bil = 2;
//     return bil + 2;
// }
//     function kurang() {
//         var bil = 3;
//         return bil - 2;
//     }

//     function kali() {
//         var bil = 2;
//         return bil * tambah() + kurang();
//     }
//     console.log(kali()); // 9
//     console.log(tambah()); // 1
//     console.log(kurang()); // 4

//=========================================================
// function a(){
//     console.log('ini a');
//     function b(){
//         console.log('ini b');
//         function c(){
//             console.log('ini c');
//         }
//         c();
//     }
//     b();
// }
// a();

//=========================================================

// function satu() {
//     var nama = 'cika';
//     console.log(nama);
// }
// function dua() {
//     console.log(nama);
// }   
// console.log(nama);
// var nama = 'cika';

// satu();
// dua('dwi');


//=========================================================

// 