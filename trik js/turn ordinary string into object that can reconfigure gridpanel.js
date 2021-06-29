var contoh = 'string1, string2'
var splitcontoh = contoh.split(', ')
var tampung = [];
splitcontoh.forEach(function(rec) {
    tampung.push({ dataIndex: rec, header: rec, name: rec })
})