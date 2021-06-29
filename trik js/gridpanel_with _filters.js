Ext.create('Ext.data.Store', {
    storeId: 'simpsonsStore',
    fields: ['name', 'email', 'phone'],
    data: [
        { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
        { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
        { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
        { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
    ]
});

var grid = Ext.create('Ext.grid.Panel', {
    title: 'Simpsons',
    store: Ext.data.StoreManager.lookup('simpsonsStore'),
    columns: [
        { header: 'Name', dataIndex: 'name', editor: 'textfield' },
        {
            header: 'Email',
            dataIndex: 'email',
            flex: 1,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        { header: 'Phone', dataIndex: 'phone' }
    ],
    features: [Ext.create("Ext.ux.grid.FiltersFeature", {
        filters: [{
            dataIndex: 'name'
        }]

    })],
    height: 200,
    width: 400,
});

Ext.create('Ext.window.Window', {
    layout: 'fit',
    items: [grid]
}).show();