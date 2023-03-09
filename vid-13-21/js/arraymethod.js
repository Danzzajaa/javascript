// array -> string, number, objek, function, campuran

let nilai = [
    {nama:"Nurdin", ipa:90, bahasa:70, matematika:70},
    {nama:"Bambang", ipa:80, bahasa:90, matematika:60},
    {nama:"Dian", ipa:75, bahasa:70, matematika:90},
    {nama:"Siti", ipa:90, bahasa:80, matematika:90},
]

let nama = ["Nurdin", "Bambang", "Dian", "Siti"];
// console.log(nilai[0].nama);
// console.log(nama);

//                                    ~~~ PENTING ARAY DASAR~~~

// <-- nama.push("ani","roma"); // push - menambahkan nilai pada bagian akhir -->

// <-- console.log(nama.shift()); // shift - menggambil nilai terawal / terdepan -->

// <-- console.log(nama.pop()); // pop - mengambil nilai teraakhir -->

// <-- nama.unshift("bobi", "roki"); // unshift - menambahkan nilai pada bagian awal / terdpan -->

// <-- console.log(nama.splice(5,2)); // splice - digunakan untuk menggambil brapa nilai (bagian, jumlah) -->

// <-- console.log(nama.slice(2,6)) // sama seperti splice tetapi slice tidak mengambil tempat asalnya -->


let mapel = ['ipa', 'bahasa', 'matematika'];

//                                    ~~~ MATERI CONCAT ~~~
//                        concat - digunakan untuk menggabungkan 2 array

// console.log(nama.concat(mapel)); // concat cara (1)

// console.log(nama.concat(['ips', 'pkn', 'sejarah'])) // concat cara (2)


//                                    ~~~ MATERI FOREACH ~~~
//                                forEach - dibagi menjadi 3 cara

// for (let index = 0; index < nama.length; index++) {
//     console.log(nama[index]);
    
// } (1)

// nama.forEach(function (a) {
//     console.log(a);
// }) // sama sperti ketika kita membuat codingan for (2)

// nama.forEach((a) => console.log(a)); // eroFunctoon dari foreach (3)


//                                    ~~~ MATERI FILTER ~~~

// nilai.filter(function (a) {
//     if (a.ipa > 80) {
//         console.log(a.nama);
//     }
// }) (1)


// nilai.filter((a) => a.ipa > 80 ? console.log(a) : null) // {{  (?) - if/ jawaban benar, (:) - else/ jawaban salah }} (2)

// nilai.filter((a) => a.ipa > 80 && a.matematika > 80 ? console.log(a) : null) // menampilkan 2 kondisi menggunakan (&&) (3)


//                                    ~~~ MATERI MAP ~~~

// let siswa = nilai.map(function (a) {
//     return a.nama;
// })
// console.log(siswa); (1)

// let siswa = nilai.map(a => a.ipa);
// console.log(siswa); (2)

// let siswa = nilai.map(a => [a.nama, a.ipa, a.bahasa]);
// console.log(siswa);


//                                    ~~~ MATERI SORT ~~~
//                        sort - digunakan untuk menggurutkan angka a - z

// mapel.sort();
// console.log(mapel);


//                                    ~~~ MATERI REDUCE ~~~

// let hasil = nilai.reduce(function (a, b) {
//     return (a = a + b.ipa);
// }, 0); // (a) untuk menyimpan, (b) kolom, (,0) dari 0
// console.log(hasil); (1)

let hasil = nilai.reduce((a, b) => (a = a + b.bahasa),0);
console.log(hasil); // eroFunction (2)