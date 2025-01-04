let mahasiswa = {
    nama :'BASO HAMZAH',
    nilai : 90,
    sapa : function (Sapa){
    if(Sapa == 1){
        return (`${this.nama}: Hello`)
    }else if(Sapa == 2){
        return(`${this.nama}: good BY`)
    }else{
        return("not found")
    }
    
    } 
}
    console.log (mahasiswa.sapa(4))