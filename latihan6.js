function Mahasiswa (nama, umur, statusAktif){
    let _nama = nama;
    let _umur = umur;
    let _statusAktif = statusAktif;
    
    this.tampilkanInfo = function(){
        console.log(`Nama: ${_nama}`);
        console.log(`Umur: ${_umur}`);
        console.log(`Status Aktif: ${_statusAktif? 'Aktif' : 'Tidak Aktif'}`);
    }
}