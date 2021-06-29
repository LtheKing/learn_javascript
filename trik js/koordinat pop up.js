Ext.create('Ext.window.Window', {
    title: 'Hello',
    height: 400,
    width: 600,
    layout: 'fit',

    items: [{
        xtype: 'form',
        itemId: 'PESANANFORM',
        layout: 'form',
        bodyPadding: 10,
        items: [{
                xtype: 'fieldcontainer',
                fieldLabel: 'Jenis Koordinat',
                defaultType: 'radiofield',
                defaults: {
                    flex: 1
                },
                layout: 'hbox',
                items: [{
                    boxLabel: 'GCS',
                    name: 'koor',
                    inputValue: '1',
                    id: 'radio1'
                }, {
                    boxLabel: 'UTM',
                    name: 'koor',
                    inputValue: '2',
                    id: 'radio2'
                }]
            },

            {
                xtype: 'textfield',
                name: 'lu',
                fieldLabel: 'Lintang Utara',
                allowBlank: false // requires a non-empty value
            }, {
                xtype: 'textfield',
                name: 'ls',
                fieldLabel: 'Lintang Selatan',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'bt',
                fieldLabel: 'Bujur Timur',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'bb',
                fieldLabel: 'Bujur Barat',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'x',
                fieldLabel: 'X',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'y',
                fieldLabel: 'Y',
                allowBlank: false
            }

        ]
    }]
}).show();