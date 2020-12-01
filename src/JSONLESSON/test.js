var orang = {
    nama: 'Andi',
    umur: 30
}

orang = JSON.stringify(orang)
console.log(orang)

orang = JSON.parse(orang)
console.log(orang)
console.log(orang.nama)
// console.log(orang.nama) undefined kalo udah di stringify