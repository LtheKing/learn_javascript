var cn = App.GPPesanan.getStore().tree.root.childNodes
var record = [];
cn.forEach(function(list) {
    record.push(list.data)
})
var noOC = App._ID_BPBeritaAcaraPengambilanSample_NomorOC.getValue()
var maxIndex = record.length

for (var i = 0; i < maxIndex; i++) {
    var listIndex = i
    console.log(noOC + '/' + record[i].Kodifikasi + '/' + listIndex)
}