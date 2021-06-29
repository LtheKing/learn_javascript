, cellEdit: function() {
    var cellediting = Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 1,
        listeners: {
            edit: function() {
                debugger;
                var grid = App._ID_BPParameterPengujianChild_GridPanel
                var selected = grid.getSelectionModel().getSelection()
                grid.on('edit', function() {
                    selected[0].data.Status = 'Updated'
                    grid.getView().refresh()
                })
            }
        }
    });

    var grid = App._ID_BPParameterPengujianChild_GridPanel;
    grid.addPlugins(cellediting);
    var c = grid.columns.find(function(a) {
        a.setEditor('textfield');
    })
}