function coba() {
    a = document.querySelector(".isi");
    a.innerHTML = "belajar eventlistener";
    console.log("coba eventlistener");
}

// judul.addEventListener("click", coba);

judul.onmouseover = coba; // onmouseover - jika mouse melewati tulisan akan bertambah

judul.onmouseover = function () {
    console.log("coba function anonymus");
}