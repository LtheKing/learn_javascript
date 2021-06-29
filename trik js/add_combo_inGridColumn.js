var grid = App._ID_BPParameterPengujianChild_GridPanel
var view = grid.getView()
var col = view.getGridColumns()
col[12].setEditor({
    xtype: 'combo',
    store: ['first', 'second']
})