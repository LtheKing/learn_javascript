var grid = App._ID_BPRegulasiKolom_GridPanel

var store = App._ID_BPRegulasiKolom_GridPanel_Store

var newcolumns = [
    { dataIndex: 'data1', header: 'Data 1', name: 'data1' },
    { dataIndex: 'data2', header: 'Data 2', name: 'data2' },
    { dataIndex: 'data3', header: 'Data 3', name: 'data3' },
    { dataIndex: 'data4', header: 'Data 4', name: 'data4' }
]

var tes = [
    { dataIndex: 'Lokasi', header: 'Lokasi', name: 'Lokasi' },
    { dataIndex: 'JamPengukuran', header: 'Jam Pengukuran', name: 'JamPengukuran' }
]

grid.reconfigure(store, newcolumns)