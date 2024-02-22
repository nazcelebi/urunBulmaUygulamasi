let urun1 = {
    isim: "ACER Nitro 5",
    kategori: "Teknoloji",
    fiyat: 33.270
}

let urun2 = {
    isim: "ACER Swift",
    kategori: "Teknoloji",
    fiyat: 18.404
}

let urun3 = {
    isim: "ACER Extensa",
    kategori: "Teknoloji",
    fiyat: 12.499
}

let urun4 = {
    isim: "MSI THIN",
    kategori: "Teknoloji",
    fiyat: 30.379
}

let urun5 = {
    isim: "MSI Katana",
    kategori: "Teknoloji",
    fiyat: 37.799
}

let urun6 = {
    isim: "MSI CYBORG",
    kategori: "Teknoloji",
    fiyat: 41.499
}

let urunler = [urun1,urun2,urun3,urun4,urun5,urun6];
let filtreliUrunler = [];
let girilenUrunİsmi = prompt("Lütfen bir ürün ismi giriniz : ");

filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);

function filtreliUrunleriDoldur(urunler){   
    urunler.forEach(function(urun){
      if(urun.isim.toUpperCase().includes(girilenUrunİsmi.toUpperCase(),0)){
           filtreliUrunler.push(urun);
      }
    });
}

function filtreliUrunleriYazdir(urunler){
    urunler.forEach(function(urun){
        console.log("----------------------------")
        console.log("|" + urun.isim + "|" +urun.kategori + "|" + urun.fiyat);
        console.log("----------------------------")
    });
}
