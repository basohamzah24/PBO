// class kue{
//     description(rasa){
//         console.log(`nama ${nama} ini adalah ${rasa}`);
//     }
// }

// const kueCoklat = new kue();
// kueCoklat.nama = 'bolu';
// kueCoklat.description('coklat');

// const kueKeju = new kue();
// kueKeju.nama = 'onde-onde';  
// kueKeju.description('keju');



// //inheritance class//
// class Kue{ //ini class induk
//     description(rasa){
//         console.log(`kue ${this.nama} memiliki rasa ${rasa}`);
//     }
// }

// class kuebasah extends Kue{ //class kuebasah mewarisi class Kue baik properti maupun method
//   description(rasa){
//       console.log(`kue basah ${this.nama} memiliki rasa ${rasa}`);
//     }
// }

// const kueCoklat = new Kue();//membuat objek kueCoklat dari class Kue
// kueCoklat.nama = 'bolu';
// kueCoklat.description('coklat');

// const kuePudin = new kuebasah();//membuat objek kuePudin dari class kuebasah
// kuePudin.nama = 'pudin';
// kuePudin.description('vanila');


//super constructor//

// class Kue{ //class kue induk memiliki properti nama
//     constructor(nama){
//         this.nama = nama;
//     }
//     description(rasa){
//         console.log(`kue ${this.nama} memiliki rasa ${rasa}`);
//     }
// }

// class kuebasah extends Kue{ //class kuebasah mewarisi class Kue baik properti maupun method
//     constructor(nama,harga){
//         super(nama);//memanggil constructor dari class induk
//         this.harga = harga;
//     }
//   description(rasa){
//       console.log(`kue basah ${this.nama} memiliki rasa ${rasa}`);
//       console.log(`kue basah ${this.nama} memiliki harga ${this.harga}`);
//     }
// }

// const kueCoklat = new Kue("nastar");//membuat objek kueCoklat dari class Kue
// kueCoklat.description('coklat');

// const kuePudin = new kuebasah("pudding",1000);//membuat objek kuePudin dari class kuebasah
// kuePudin.description('vanila');


//super method//

// class Kue{ //class kue induk memiliki properti nama
//     constructor(nama){
//         this.nama = nama;
//     }
//     description(rasa){
//         console.log(`kue ${this.nama} memiliki rasa ${rasa}`);
//     }

//     infoBahan(){
//         console.log(`kue ${this.nama} terbuat dari bahan dasar tepung, gula, telur`);
//     }
// }



// class kuebasah extends Kue{ //class kuebasah mewarisi class Kue baik properti maupun method
//     constructor(nama,harga){
//         super(nama);//memanggil constructor dari class induk
//         this.harga = harga;
//     }
//   description(rasa){
//       console.log(`kue basah ${this.nama} memiliki rasa ${rasa}`);
//       console.log(`kue basah ${this.nama} memiliki harga ${this.harga}`);
//       super.infoBahan();//memanggil method infoBahan dari class induk

//     }
// }

// const kueCoklat = new Kue("nastar");//membuat objek kueCoklat dari class Kue
// kueCoklat.description('coklat');

// const kuePudin = new kuebasah("pudding",1000);//membuat objek kuePudin dari class kuebasah
// kuePudin.description('vanila');

//latihan//

class kendaraan {
    constructor(merk, model, tahun) {
        this.merk = merk;
        this.model = model;
        this.tahun = tahun;
    }
    description() {
        // console.log(`Kendaraan ${this.merk} model ${this.model} tahun ${this.tahun}`);
       document.getElementById("output").innerText =+ `Kendaraan ${this.merk} model ${this.model} tahun ${this.tahun}`;
        
    }
}

class kendaraanBensin extends kendaraan {
    constructor(merk, model, tahun, kapasitasTangki) {
        super(merk, model, tahun);
        this.kapasitasTangki = kapasitasTangki;
    }
    isiBensin(isiBensin) {
        // console.log(`Mobil ${this.merk} model ${this.model} tahun ${this.tahun} kapasitas tangki ${this.kapasitasTangki} liter`);
        document.getElementById("output").innerText = `Mobil ${this.merk} model ${this.model} tahun ${this.tahun} kapasitas tangki ${this.kapasitasTangki} liter`;
    }
}

class kendaraanListrik extends kendaraan {
    constructor(merk, model, tahun, kapasitasBaterai) {
        super(merk, model, tahun);
        this.kapasitasBaterai = kapasitasBaterai;
    }
    isiListrik(isiListrik) {
        // console.log(`Mobil ${this.merk} model ${this.model} tahun ${this.tahun} kapasitas listrik ${this.kapasitasBaterai} kWh`);
        document.getElementById("output").innerText = `Mobil ${this.merk} model ${this.model} tahun ${this.tahun} kapasitas listrik ${this.kapasitasBaterai} kWh`;

    }
}

const mobilBensin = new kendaraanBensin("Toyota", "Avanza", 2019, 100);
mobilBensin.description();
mobilBensin.isiBensin();

const mobilListrik = new kendaraanListrik("Tesla", "X", 2020, 10);
mobilListrik.description();
mobilListrik.isiListrik();
