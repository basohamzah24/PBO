//getter senter

// class orang{
//     constructor(nama){
//         this.nama = nama;
//     }
//     get infoNama(){
//         return this.nama;
//     }
//     set editNama(namaBaru){
//         this.nama = namaBaru;
//     }
// }

// const pegawai = new orang('arman');
// console.log(pegawai.infoNama);
// pegawai.editNama = 'baso hamzah';
// console.log(pegawai.infoNama);

// class persegi{
//     constructor(lebar,tinggi){
//         this.lebar = lebar;
//         this.tinggi = tinggi;
//     }
//     get luas(){
//         return this.lebar * this.tinggi;
//     } 
//     set ubahLebar(nilai){
//        if (nilai > 0){
//               this.lebar = nilai;
//        }else{
//            console.log('nilai lebar tidak bileh negatif !');
//        }
   
//     }
//     set ubahTinggi(nilai){
//         if (nilai > 0){
//             this.tinggi = nilai;
//         }else{
//             console.log('nilai lebar tidak boleh negatif !');
//         }
//     }
// }

// const segiEmpat = new persegi(50,5);
// segiEmpat.ubahLebar= 10;
// segiEmpat.ubahTinggi= 5;
// console.log(segiEmpat.luas);

class akunBank{

  constructor(saldoAwal){
        this.saldo = saldoAwal;
  }
  get infoSaldo(){
      return this.saldo;
  }

  set setorUang(jumlah){
      if(jumlah >= 0){
          this.saldo += jumlah;
      }else{
              console.log('jumlah setoran tidak boleh negatif');
          }

  }
  set tarikUang(jumlah){
      if(jumlah >= 0){
          if(jumlah <= this.saldo){
              this.saldo -= jumlah;
          }else{
              console.log('saldo tidak mencukupi');
          }
      }else{
          console.log('jumlah penarikan tidak boleh negatif');
      }
  }
}
const akun = new akunBank(1000);
console.log(akun.infoSaldo);
akun.setorUang = -1500;
console.log(akun.infoSaldo);
akun.tarikUang = 500;
console.log(akun.infoSaldo);


