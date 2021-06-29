listeners: {
    cellclick: function(component, td, cellIndex, record, tr, rowIndex, e) {
            debugger;
            if (cellIndex == 5) {
                Ext.create('Ext.window.Window', {
                    title: 'Hello',
                    height: 330,
                    width: 600,
                    layout: 'fit',
                    items: [{ // items fit

                            xtype: 'form',
                            itemId: 'KOORDINATFORM',
                            layout: 'vbox',
                            bodyPadding: 10,
                            items: [{
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Jenis Koordinat',
                                        defaultType: 'radiofield',
                                        layout: 'hbox',
                                        defaults: {
                                            flex: 1
                                        },
                                        items: [{
                                            boxLabel: 'GCS',
                                            name: 'koor',
                                            inputValue: '1',
                                            id: 'radio1',
                                            labelWidth: 10,
                                            width: 100,
                                            checked: true,
                                            handler: function() {
                                                var lu = Ext.getCmp('lu_container');
                                                var ls = Ext.getCmp('ls_container');
                                                var bt = Ext.getCmp('bt_container');
                                                var bb = Ext.getCmp('bb_container');
                                                var x = Ext.getCmp('x_container');
                                                var y = Ext.getCmp('y_container');
                                                var hasil = Ext.getCmp('txtHasil');
                                                lu.hide();
                                                ls.hide();
                                                bt.hide();
                                                bb.hide();
                                                x.show();
                                                y.show();
                                                hasil.setValue('');
                                                return
                                            }

                                        }, {
                                            boxLabel: 'UTM',
                                            name: 'koor',
                                            inputValue: '2',
                                            id: 'radio2',
                                            handler: function() {
                                                var lu = Ext.getCmp('lu_container');
                                                var ls = Ext.getCmp('ls_container');
                                                var bt = Ext.getCmp('bt_container');
                                                var bb = Ext.getCmp('bb_container');
                                                var x = Ext.getCmp('x_container');
                                                var y = Ext.getCmp('y_container');
                                                var hasil = Ext.getCmp('txtHasil');
                                                lu.show();
                                                ls.show();
                                                bt.show();
                                                bb.show();
                                                x.hide();
                                                y.hide();
                                                hasil.setValue('');
                                                return
                                            }
                                        }]
                                    },

                                    { // items LU
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'LU',
                                        labelWidth: 38,
                                        id: 'lu_container',
                                        layout: 'hbox',
                                        items: [{
                                                    xtype: 'textfield',
                                                    name: 'derajat_lu',
                                                    id: 'der_lu',
                                                    fieldLabel: 'Derajat',
                                                    labelWidth: 45,
                                                    width: 90,
                                                    padding: '0 15 0 0'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    name: 'menit_lu',
                                                    id: 'men_lu',
                                                    fieldLabel: 'Menit',
                                                    labelWidth: 45,
                                                    width: 90,
                                                    padding: '0 15 0 0'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    name: 'detik_lu',
                                                    id: 'det_lu',
                                                    fieldLabel: 'Detik',
                                                    labelWidth: 45,
                                                    width: 90,
                                                    padding: '0 15 0 0',
                                                    listeners: {
                                                        change: function(a, newValue, oldValue, object) {
                                                            var a = Ext.getCmp('der_lu');
                                                            var b = Ext.getCmp('men_lu');
                                                            //var c = Ext.getCmp('det_lu');
                                                            var d = Ext.getCmp('txtKlu');
                                                            d.setValue(
                                                                'LU :' +
                                                                a.getValue() + String.fromCharCode(176) +
                                                                b.getValue() + String.fromCharCode(176) +
                                                                newValue + String.fromCharCode(176) + ',');
                                                        }
                                                    }
                                                }

                                            ] // items container lu   
                                    }, // items LU 

                                    { // items LS
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'LS',
                                        labelWidth: 38,
                                        id: 'ls_container',
                                        layout: 'hbox',
                                        items: [{
                                                    xtype: 'textfield',
                                                    name: 'derajat_ls',
                                                    id: 'der_ls',
                                                    fieldLabel: 'Derajat',
                                                    labelWidth: 45,
                                                    width: 90,
                                                    padding: '0 15 0 0'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    name: 'menit_ls',
                                                    id: 'men_ls',
                                                    fieldLabel: 'Menit',
                                                    labelWidth: 45,
                                                    width: 90,
                                                    padding: '0 15 0 0'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    name: 'detik_ls',
                                                    id: 'det_ls',
                                                    fieldLabel: 'Detik',
                                                    labelWidth: 45,
                                                    width: 90,
                                                    padding: '0 15 0 0',
                                                    listeners: {
                                                        change: function(a, newValue, oldValue, object) {
                                                            var a = Ext.getCmp('der_ls');
                                                            var b = Ext.getCmp('men_ls');
                                                            var c = Ext.getCmp('det_ls');
                                                            var d = Ext.getCmp('txtKls');
                                                            d.setValue(
                                                                'LS :' +
                                                                a.getValue() + String.fromCharCode(176) +
                                                                b.getValue() + String.fromCharCode(176) +
                                                                newValue + String.fromCharCode(176) + ',');
                                                        }
                                                    }
                                                }

                                            ] // items container ls    
                                    }, // items LS
                                    { // items BT
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'BT',
                                        labelWidth: 38,
                                        id: 'bt_container',
                                        layout: 'hbox',
                                        items: [{
                                                    xtype: 'textfield',
                                                    name: 'derajat_bt',
                                                    id: 'der_bt',
                                                    fieldLabel: 'Derajat',
                                                    labelWidth: 45,
                                                    width: 90,
                                                    padding: '0 15 0 0'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    name: 'menit_bt',
                                                    id: 'men_bt',
                                                    fieldLabel: 'Menit',
                                                    labelWidth: 45,
                                                    width: 90,
                                                    padding: '0 15 0 0'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    name: 'detik_bt',
                                                    id: 'det_bt',
                                                    fieldLabel: 'Detik',
                                                    labelWidth: 45,
                                                    width: 90,
                                                    padding: '0 15 0 0',
                                                    listeners: {
                                                        change: function(a, newValue, oldValue, object) {
                                                            var a = Ext.getCmp('der_bt');
                                                            var b = Ext.getCmp('men_bt');
                                                            var c = Ext.getCmp('det_bt');
                                                            var d = Ext.getCmp('txtKbt');
                                                            d.setValue(
                                                                'BT :' +
                                                                a.getValue() + String.fromCharCode(176) +
                                                                b.getValue() + String.fromCharCode(176) +
                                                                newValue + String.fromCharCode(176) + ',');
                                                        }
                                                    }
                                                }

                                            ] // items container bt    
                                    },
                                    { // items BB
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'BB',
                                        labelWidth: 38,
                                        id: 'bb_container',
                                        layout: 'hbox',
                                        items: [{
                                                    xtype: 'textfield',
                                                    name: 'derajat_bb',
                                                    id: 'der_bb',
                                                    fieldLabel: 'Derajat',
                                                    labelWidth: 45,
                                                    width: 90,
                                                    padding: '0 15 0 0'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    name: 'menit_bb',
                                                    id: 'men_bb',
                                                    fieldLabel: 'Menit',
                                                    labelWidth: 45,
                                                    width: 90,
                                                    padding: '0 15 0 0'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    name: 'detik_bb',
                                                    id: 'det_bb',
                                                    fieldLabel: 'Detik',
                                                    labelWidth: 45,
                                                    width: 90,
                                                    padding: '0 15 0 0',
                                                    listeners: {
                                                        change: function(a, newValue, oldValue, object) {
                                                            var a = Ext.getCmp('der_bb');
                                                            var b = Ext.getCmp('men_bb');
                                                            var c = Ext.getCmp('det_bb');
                                                            var d = Ext.getCmp('txtKbb');
                                                            var hasil = Ext.getCmp('txtHasil');
                                                            var lu = Ext.getCmp('txtKlu');
                                                            var ls = Ext.getCmp('txtKls');
                                                            var bt = Ext.getCmp('txtKbt');
                                                            var bb = Ext.getCmp('txtKbb');
                                                            d.setValue(
                                                                'BB :' +
                                                                a.getValue() + String.fromCharCode(176) +
                                                                b.getValue() + String.fromCharCode(176) +
                                                                newValue + String.fromCharCode(176));

                                                            hasil.setValue(lu.getValue() + ls.getValue() +
                                                                bt.getValue() + bb.getValue());
                                                        }
                                                    }
                                                }

                                            ] // items container bb    
                                    },
                                    { // items X
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'X',
                                        labelWidth: 38,
                                        id: 'x_container',
                                        layout: 'hbox',
                                        hidden: true,
                                        items: [{
                                                xtype: 'textfield',
                                                name: 'txt_x',
                                                id: 'txtX',
                                                labelWidth: 45,
                                                width: 90,
                                                padding: '0 15 0 0',
                                                listeners: {
                                                    change: function(a, newValue, oldValue, object) {
                                                        var hasil = Ext.getCmp('txtHasil');
                                                        var kx = Ext.getCmp('txtKx');
                                                        var ky = Ext.getCmp('txtKy');
                                                        var y = Ext.getCmp('txtY');

                                                        kx.setValue('X :' + newValue + String.fromCharCode(176) + ',')
                                                    }
                                                }
                                            }] // items container x    
                                    },
                                    { // items Y
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Y',
                                        labelWidth: 38,
                                        id: 'y_container',
                                        layout: 'hbox',
                                        hidden: true,
                                        items: [{
                                                xtype: 'textfield',
                                                name: 'txt_y',
                                                id: 'txtY',
                                                labelWidth: 45,
                                                width: 90,
                                                padding: '0 15 0 0',
                                                listeners: {
                                                    change: function(a, newValue, oldValue, object) {
                                                        var hasil = Ext.getCmp('txtHasil');
                                                        var kx = Ext.getCmp('txtKx');
                                                        var ky = Ext.getCmp('txtKy');
                                                        var x = Ext.getCmp('txtX');

                                                        ky.setValue('Y :' + newValue + String.fromCharCode(176))

                                                        hasil.setValue(kx.getValue() + ky.getValue())
                                                    }
                                                }
                                            }] // items container x    
                                    },
                                    { // items K
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'KOORDINAT',
                                        labelWidth: 100,
                                        hidden: true,
                                        id: 'k_container',
                                        layout: 'vbox',
                                        items: [{
                                                    xtype: 'textfield',
                                                    fieldLabel: 'k_lu',
                                                    name: 'txt_klu',
                                                    id: 'txtKlu',
                                                    labelWidth: 45,
                                                    width: 190,
                                                    padding: '0 15 0 0'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'k_ls',
                                                    name: 'txt_kls',
                                                    id: 'txtKls',
                                                    labelWidth: 45,
                                                    width: 190,
                                                    padding: '0 15 0 0'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'k_bt',
                                                    name: 'txt_kbt',
                                                    id: 'txtKbt',
                                                    labelWidth: 45,
                                                    width: 190,
                                                    padding: '0 15 0 0'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'k_bb',
                                                    name: 'txt_kbb',
                                                    id: 'txtKbb',
                                                    labelWidth: 45,
                                                    width: 190,
                                                    padding: '0 15 0 0'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'k_x',
                                                    name: 'txt_x',
                                                    id: 'txtKx',
                                                    labelWidth: 45,
                                                    width: 190,
                                                    padding: '0 15 0 0'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'k_y',
                                                    name: 'txt_y',
                                                    id: 'txtKy',
                                                    labelWidth: 45,
                                                    width: 190,
                                                    padding: '0 15 0 0'
                                                }
                                            ] // items container k    
                                    },
                                    { // items hasil
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'HASIL',
                                        labelWidth: 100,
                                        id: 'hasil_container',
                                        layout: 'vbox',
                                        items: [{
                                                xtype: 'textfield',
                                                name: 'txt_hasil',
                                                id: 'txtHasil',
                                                labelWidth: 45,
                                                width: 190,
                                                padding: '0 15 0 0'
                                            }] // items container hasil    
                                    }
                                ] // items koordinatform
                        }] // items fit

                }).show();
            }
        } // batas cellclick
},