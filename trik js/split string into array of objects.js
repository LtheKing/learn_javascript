var paramMentah = ["Nitrit", "Bau", "Rasa", "Suhu", "Warna "]
var c = paramMentah.map(function(str) {
    var box = str.split(' ');
    return { Parameter: box[0] }
})

//add new properties into an object 
var a = { Parameter: "Nitrit" }
a.Komoditi = 'AIR'
result = { Parameter: "Nitrit", Komoditi: "AIR" }