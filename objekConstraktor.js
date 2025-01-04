// ini cuma coba"

function Mahasiswa (nama,nilai){
    this.nama = nama,
    this.nilai = nilai
    this.percakapan = function(pilih){
        if (pilih == 1) {
            return (`${this.nama}: Hello, nilaimu berapa?`);
        } else if (pilih == 2) {
            return (`${this.nama}: Bagus sekali! Sepertinya kamu bekerja keras.`); 
        } else if (pilih == 3) {
            return (`${this.nama}: Apa rencanamu untuk ke depan setelah lulus?`);
        } else if (pilih == 4) {
            return (`${this.nama}: Jangan khawatir, tetap semangat belajar!`);
        } else if (pilih == 5) {
            return (`${this.nama}: Selamat! Kamu lulus dengan nilai yang memuaskan!`);
        } else {
            return ("Pilihan tidak ditemukan. Coba masukkan nomor yang valid.");
        }      

    }

}

let orang1 = new Mahasiswa('BASO HAMZAH',90)
let orang2 = new Mahasiswa('fulan',90)
console.log(orang1.percakapan(1)); // "BASO HAMZAH: Hello, nilaimu berapa?"
console.log(orang2.percakapan(4)); // "Fulan: Jangan khawatir, tetap semangat belajar!"
console.log(orang1.percakapan(5));


