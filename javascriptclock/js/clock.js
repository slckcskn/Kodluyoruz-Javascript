let userName = prompt("Lütfen isminizi giriniz:")
let info = document.querySelector('#myName')
info.innerHTML = `${userName}`

function zaman() {
    let anlik = new Date();
    // saat 
    let saat = anlik.getHours();
    // dakika 
    let dakika = anlik.getMinutes();
    // saniye 
    let saniye = anlik.getSeconds();
    // güne ekstra zaman
    var gun = new Date();
    // günleri ekledik
    var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    // id tanımladık
    let iceaktarma = document.querySelector("#myClock")
    // burda oluşturduğumuz değerleri ekrana yazdırıyoruz
    iceaktarma.innerHTML = saat + ":" + dakika + ":" + saniye + " " + gunler[gun.getDay()];
}
let simdi = setInterval(zaman, 100); 