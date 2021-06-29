Ext.application({
    name: 'Fiddle',

    launch: function() {
        Ext.create('Ext.window.Window', {
            layout: 'fit',
            width: 400,
            items: [{
                xtype: 'gridpanel',
                columns: [{ text: 'Name', dataIndex: 'Name' }, { text: 'Product', dataIndex: 'Product' }],
                listeners: {
                    cellclick: function(component, td, cellIndex, record, tr, rowIndex, e) {

                        if (rowIndex == 0) {
                            alert(record.data.Name)
                        } else {
                            alert(record.data.Product)
                        }
                    }
                },
                store: Ext.create('Ext.data.Store', {
                    fields: ['Name', 'Product'],
                    data: [{ Name: 'TES' }, { Product: 'Product' }]
                })
            }]
        }).show()
    }
});