var grid = App._ID_BPParameterPengujianChild_GridPanel
var selected = grid.columns.findIndex(function(rec) {
    return rec.dataIndex === 'Status'
})
grid.columns[selected].setEditor(

    {
        xtype: 'combo',
        store: ['verified', 'recheck']
    }
)