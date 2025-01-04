// function salam(waktu) {
//     return  function(nama) {
//         return `halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`;
//     }
// }
// let salamPagi = salam('pagi');
// let salamSiang = salam('siang');
// let salamMalam = salam('malam');



///////private method///////
let hitung= (function() {
    let noAntre = 0;
    return function() { //membungkus funngsi
        noAntre++;
        return ` ${noAntre}`;
    }
})();
console.log(hitung());
console.log(hitung());
console.log(hitung());



