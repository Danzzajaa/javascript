const hari = 5;
let hasil;

switch (hari) {
    case 1:
        hasil = "minggu";
        break;
    case 2:
        hasil = "senin";
        break;
    case 3:
        hasil = "selasa";
        break;
    case 4:
        hasil = "rabu";
        break;
    case 5:
        hasil = "kamis";
        break;
    case 6:
        hasil = "jumat";
        break;
    case 7:
        hasil = "sabtu";
        break;

    default:
        hasil = "HARI TIDAK ADA";
        break;
}

console.log(hasil);

const bulan = "april";
let bulam;

switch (bulan) {
    case "januari":
        bulam = 1;
        break;
    case "februari":
        bulam = 2;
        break;
    case "maret":
        bulam = 3;
        break;
    case "april":
        bulam = 4;
        break;

    default:
        bulam = "BULAN TIDAK ADA";
        break;
}

console.log(bulam);