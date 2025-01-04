//Objek riteral 

// let hero = {
//     nama : 'Fighter',
//     poin : 10 ,
//     attack : function(damage){
//         this.poin = this.poin + damage; // this digunakan untuk menunjukkan 
//          return (`${this.nama} menyerang dan mendaptkan poin ${this.poin}`)
//     }
// }


// let prempuan = {
//     nama : 'mage',
//     poin : 10 ,
//     attack : function(damage){
//         this.poin = this.poin + damage; // this digunakan untuk menunjukkan 
//         return (`${this.nama} menyerang dan mendaptkan poin ${this.poin}`)
//         //  return this.poin;
//     }
// }

  


//     console.log('Nama:', hero.nama);
//     console.log('Poin:', hero.poin);
//     console.log(hero.attack(10))
//     console.log('========================================')
//     console.log('Nama:', hero2.nama);
//     console.log('Poin:', hero2.poin);
    // console.log(hero);
    // console.log(hero.attack(10))
  
    
    
   
    

    // funtion Declaration
    function Hero(nama, poin) {
        let hero = {};  // Perbaikan: let.hero menjadi let hero
        hero.nama = nama;
        hero.poin = poin;
    
        hero.attack = function (damage) {
            this.poin += damage;
            console.log(`${this.nama} menyerang dan mendapatkan poin ${this.poin}`);  // Tambahkan spasi
        }
            hero.diserang = function(damage){
                this.poin -= damage;
                console.log(`${this.nama} diserang dan pint berkurang  ${this.poin}`);

            }
            
        return hero;
    }
    
    let fighter = Hero('Zilong', 10);
    let mage = Hero('Diodora', 10);
    console.log(fighter);
    console.log(mage);

    


    // function Hero
    // Contoh menyerang
    fighter.attack(50);  // Zilong menyerang dan mendapatkan poin 15
    mage.attack(50);     // Diodora menyerang dan mendapatkan poin 13
    mage.hit(30);
    

   // Objek method yang berisi fungsi attack dan hit
// const methodHero = {
//     attack: function (damage) {
//         this.poin += damage;
//         console.log(`${this.nama} menyerang dan mendapatkan poin ${this.poin}`);
//     },
//     hit: function (damage) {
//         this.poin -= damage;
//         console.log(`${this.nama} diserang dan poin berkurang ${this.poin}`);
//     }
// };

// // Constructor function untuk membuat objek Hero
// function Hero(nama, poin) {
//     let hero = Object.create(methodHero); // Membuat objek dengan Object.create
//     hero.nama = nama; // Menambahkan properti nama
//     hero.poin = poin; // Menambahkan properti poin
//     return hero; // Mengembalikan objek hero
// }

// // Membuat dua instance objek Hero
// let fighter = Hero('Zilong', 50); // Objek fighter dengan nama 'Zilong' dan poin 50
// let mage = Hero('Diodora', 50); // Objek mage dengan nama 'Diodora' dan poin 50

// // Menampilkan objek fighter dan mage
// console.log(fighter);
// console.log(mage);

// // Menggunakan method attack dan hit
// fighter.attack(10); // Fighter menyerang dan mendapatkan poin tambahan
// mage.hit(10); // Mage diserang dan poinnya berkurang

// fungtion constraktor
// function Mobil(merek, tahun) {
//     this.merek = merek;
//     this.tahun = tahun;
//     this.info = function() {
//         return `Mobil ini adalah ${this.merek}, keluaran tahun ${this.tahun}.`;
//     };
// }

// let mobil1 = new Mobil("Toyota", 2020);
// console.log(mobil1.info());

//     this.attack = function (info) { //ini merupakan method
//         this.poin += damage;
//         console.log(`${this.nama} menyerang dan mendapatkan poin ${this.poin}`);  
//     }

//     this.hit = function(damage) { //ini merupakan method
//         this.poin -= damage;
//         console.log(`${this.nama} diserang dan poin berkurang ${this.poin}`);  
//     }
// }

// let fighter = new Hero('Zilong', 10); //objek yang bernama fighter 
// let mage = new Hero('Diodora', 10);  //objek yang bernama mage

// // console.log(fighter);
// // console.log(mage);
// mage.attack(20);  // Panggil attack tanpa console.log




// ==============================================


// let System = {
//     out : {
//         println : function(data){
//         console.log(data);
//         }
        
//     }

// }
// System.out.println('HELLO WORD')

