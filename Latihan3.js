//prototype
function orang (nama,pekerjaan){
    this.nama=nama,
    this.pekerjaan=pekerjaan

    const newLocal = this.sapa = function () {
        return 'hy apa kabar';

    };

}
//     orang.prototype.sapa = function(){
//     return 'hy apa kabar';

// }

let ambo = new orang ('ambo','kuli')
let budi = new orang ('budi','prgrammer')

// console.log(ambo)
// console.log(budi)
//fitur js
// let angka = [1,2,3,4]
// console.log(angka.reverse())

// let nama = 'sksjjdhhsjd'
// console.log(nama.length)

// document.getElementById('demo').innerHTML =ambo.sapa


