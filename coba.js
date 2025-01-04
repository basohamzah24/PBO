// // function Hero(nama,poin){
// //     let hero={};
// //     hero.nama = nama;
// //     hero.poin = poin;

// //     hero.serang =function(damage){
// //         hero.poin += damage;
// //         console.log (`${hero.nama} menyerang dan poin menjadi ${hero.poin}`);
// //     }
// //     hero.hit = function(damage){
// //         hero.poin += damage;
// //         console.log(`${hero.nama} di serang dan poin berkurang ${hero.poin}`)
// //     }
// //     return hero;
// // }

// // let mage = Hero('baso',10)
// // mage.serang(10)

// const methodhero={
//     attck : function(damage){
//     this.poin += damage;
//     console.log(`${this.nama} menyerang dan poin menjadi ${this.poin}`);
//     },
//     hit: function (damage) {
//         this.poin -= damage;
//         console.log(`${this.nama} diserang dan poin berkurang ${this.poin}`);
//     }
// }

// function Hero(nama,poin){
//     let hero = Object.create(methodhero);
//     hero.nama = nama;
//     hero.poin = poin;

//     return hero;
// }

// let mage = Hero('baso', 10);
// console.log(mage)
// mage.attck(20)

function Mobil(nama,keluaran){
    this.nama = nama;
    this.keluaran = keluaran; 

    this.info = function(){
        return `${nama} keluaran ${keluaran}`
    };
}

let mobil1 = new Mobil ('avanzah', 2020);
console.log(mobil1.info())

