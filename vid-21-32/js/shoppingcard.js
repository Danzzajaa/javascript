let tblmenu = [
    {idmenu:8, idkategori:37, menu:"Apel", gambar:"Apel.jpg", harga:2000},
    {idmenu:9, idkategori:37, menu:"Jeruk", gambar:"jeruk.jpg", harga:4000},
    {idmenu:10, idkategori:37, menu:"Pisang", gambar:"pisang.jpg", harga:4000},
    {idmenu:11, idkategori:37, menu:"Mangga", gambar:"mangga.jpg", harga:6000},
    {idmenu:14, idkategori:35, menu:"Jus Jeruk", gambar:"lighton.gif", harga:4000},
    {idmenu:10, idkategori:37, menu:"Gedhang", gambar:"pisang.jpg", harga:4000},
];

let tampil = tblmenu.map(function (kolom) {
    return `<div class="produk-content">
    <div class="images">
        <img src="img/${kolom.gambar}"  alt="">
    </div>
    <div class="title">
        <h2>${kolom.menu}</h2>
    </div>

    <div class="harga">
        <h3>Rp. ${kolom.harga}</h3>
    </div>

    <div class="btn-beli">
            <button data-idmenu=${kolom.idmenu}>Beli</button>
    </div>
</div>`;
});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;


let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = []

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
        //console.log(btnbeli[index].dataset["idmenu"]);
        cart.push(console.log(btnbeli[index].dataset["idmenu"]));

        tblmenu.filter(function (a) {
            if (a.idmenu==btnbeli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        })
    };
}


