// no satu (1)
let biodata = (name,address,hobbies,is_married,school,skills) => {
    let data ={name,address,hobbies,is_married,school,skills}
    return JSON.stringify(data)
}

let name = 'dimas luthfi'
let address = 'jl. peta selatan no.7, kalideres, jakarta barat'
let hobbies = 'main game'
let is_married = false
let school = {
    highSchool: 'sma alhusna tangerang',
    university:'universitas trisakti'
}
let skills = [
    {name:'coding',score:50},
    {name:'makan',score:51},
    {name:'tidur',score:52},
    {name:'main game',score:53}
]

console.log(
    biodata(name,address,hobbies,is_married,school,skills)
);

// no dua (2)
function randomChar() {

    let karakter = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let jmlKarakter = 32;
    var randomKarakter = '';
    for (let a = 0; a < jmlKarakter; a++) {
        var randomAngka = Math.floor(Math.random() * karakter.length);
        var parse = karakter.substring(randomAngka,randomAngka+1)
        randomKarakter += parse
    }

    return randomKarakter
}

function generate(val){
    let hasil = []
    let i = 0
    while (i<val) {
        hasil.push(randomChar())
        i++
    }
    return hasil
}
console.log(
    generate(2)
)

// no tiga (3)
function hitungchar(str,target){
    let pisah = str.split('')
    let hasil = 0
    for (let i = 0; i < pisah.length; i++) {
        if (pisah[i] === target) {
            hasil++
        }
    }
    console.log(hasil);
    return hasil
}

hitungchar('boottttt', 't')