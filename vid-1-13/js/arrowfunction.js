let fungsi = function (nama) {
    console.log("belajar function " + nama)
}
fungsi("nurdin");

let contoh = (nama)=>{
    console.log("belajar function " + nama);
}
contoh("neny");

let tambah = function (a, b) {
    return a + b;
}
console.log(tambah(2, 3));

let plus = (a, b) => a + b;
console.log(plus(2, 3));

let hasil = a => a * 2;
console.log(hasil(4));

let lagi = () => console.log("coba lagi");
lagi();

let belajar = () => {
    console.log("satu");
    console.log("dua");
    console.log("tiga");
};
belajar();

let nilai = 5
let uji = nilai < 7 ? () => predikat = "gagal" : () => predikat = "LULUS";
console.log(uji());