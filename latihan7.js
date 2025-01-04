//arrowfuntion
// let ucapsapa=(nana)=>{return`hello ${nana}`};
// console.log(ucapsapa("baso"));

// let ucapsapa= nana =>{return`hello ${nana}`};
// console.log(ucapsapa("baso"));

// let ucapsapa= nana =>`hello ${nana}`;
// console.log(ucapsapa("baso"));

// let ucapsapa =() =>`hello apa kabar`;
// console.log(ucapsapa());

// let ucapsapa= (nana,kampus) =>{return`hello ${nana} kuliah di ${kampus}`};
// console.log(ucapsapa("baso","unismuh"));

//dibawah bentuk biasa//
// let mahasiswa =["baso","budi","joko"];
// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// });
// console.log(jumlahHuruf);

// //arrow function//
// let mahasiswa =["baso","budi","joko"];
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

//dalam bentuj objek//
// let mahasiswa =["baso","budi","joko"];
// // let jumlahHuruf = mahasiswa.map(nama =>({nama:nama, jumlahHuruf: nama.length}));
// let jumlahHuruf=mahasiswa.map(nama =>({nama, jumlahHuruf:nama.length}));
// console.log(jumlahHuruf);
// console.table(jumlahHuruf);
// let frequency = {};
// mahasiswa.join('').split('').forEach(char => {
//     frequency[char] = (frequency[char] || 0) + 1;
// });
// console.log(frequency);
// console.table(frequency);

//class//
// class Orang{
// constructor(nama){
//     this.nama = nama;
//     }
// }
// const pegawai = new Orang('baso');
// const petani = new Orang('budi');
// console.log(pegawai);
// console.log(petani.nama);

// class Orang{
//     constructor(nama){
//         this.nama = nama;
//         }
//         salamSapa(Kampus){
//            return`hello nama saya ${this.nama} kuliah di ${Kampus}`;
//         }
//     }
//     const pegawai = new Orang('baso');
//     const petani = new Orang('budi');
//     console.log(pegawai.salamSapa('unismuh'));
//     console.log(petani.salamSapa('unismuh'));


//latihan buatlah kelas dengan nama kue memiliki properti nama, memiliki method namanya info kue?//
class Kue{
    constructor(nama,harga){
        this.nama = nama;
        this.harga = harga;
        }
        infoKue(ixpired){
           return`ini kue : ${this.nama} harganya: ${this.harga} ixpired pada tahun : ${ixpired}`;
        }
    }
    const kue1 =  new Kue('gabing','5000');
    const kue2 = new Kue('roma kelapa','10000');
    console.log(kue1.infoKue('2020'));
    console.log(kue2.infoKue('2021'));