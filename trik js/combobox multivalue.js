Ext.create('Ext.window.Window', {
    title: 'TES',
    layout: 'fit',
    items: [{
        xtype: 'form',
        items: [{
            xtype: 'combo',
            multiSelect: true,
            displayField: 'Value',
            valueField: 'Value',
            store: Ext.create('Ext.data.Store', {
                fields: ['Value'],
                data: [{ Value: 'a' }, { Value: 'b' }, { Value: 'c' }]
            }),
        }]
    }]
}).show()