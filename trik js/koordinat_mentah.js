Ext.application({
    name: 'Fiddle',

    launch: function() {


        Ext.create('Ext.window.Window', {
            title: 'Hello',
            height: 200,
            width: 400,
            layout: 'vbox',
            items: [{

                        xtype: 'fieldcontainer',
                        id: 'container1',
                        layout: 'hbox',
                        items: [{
                                    xtype: 'textfield',
                                    name: 'txt_1',
                                    id: 'txt1',
                                    fieldLabel: 'text 1',
                                    labelWidth: 50,
                                    width: 100,
                                    padding: '0 15 0 0',
                                    listeners: {
                                        change: function(a, newValue, oldValue, object) {
                                            var a = Ext.getCmp('txt1_2');
                                            var b = Ext.getCmp('txt2');
                                            var c = Ext.getCmp('txt3');
                                            c.setValue(newValue + String.fromCharCode(176));
                                        }
                                    }
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'txt_2',
                                    id: 'txt2',
                                    fieldLabel: 'text 2',
                                    labelWidth: 50,
                                    width: 100,
                                    padding: '0 15 0 0',
                                    listeners: {

                                        change: function(a, newValue, oldValue, object) {
                                            var a = Ext.getCmp('txt1_2');
                                            var b = Ext.getCmp('txt2');
                                            var c = Ext.getCmp('txt3');
                                            c.setValue(a.getValue() + String.fromCharCode(176) + newValue + String.fromCharCode(176));
                                        }
                                    }
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'txt_3',
                                    id: 'txt3',
                                    fieldLabel: 'text 3',
                                    labelWidth: 50,
                                    width: 100,
                                }
                            ] // items container   

                    },

                    {

                        xtype: 'fieldcontainer',
                        id: 'container2',
                        layout: 'hbox',
                        items: [{
                                    xtype: 'textfield',
                                    name: 'txt_1',
                                    id: 'txt1_2',
                                    fieldLabel: 'text 1',
                                    labelWidth: 50,
                                    width: 100,
                                    padding: '0 15 0 0',
                                    listeners: {
                                        change: function(a, newValue, oldValue, object) {
                                            var a = Ext.getCmp('txt1_2');
                                            var b = Ext.getCmp('txt2');
                                            var c = Ext.getCmp('txt3');
                                            c.setValue(newValue + String.fromCharCode(176));
                                        }
                                    }
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'txt_2',
                                    id: 'txt2_2',
                                    fieldLabel: 'text 2',
                                    labelWidth: 50,
                                    width: 100,
                                    padding: '0 15 0 0',
                                    listeners: {

                                        change: function(a, newValue, oldValue, object) {
                                            var a = Ext.getCmp('txt1_2');
                                            var b = Ext.getCmp('txt2');
                                            var c = Ext.getCmp('txt3');
                                            c.setValue(a.getValue() + String.fromCharCode(176) + newValue + String.fromCharCode(176));
                                        }
                                    }
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'txt_3',
                                    id: 'txt3_3',
                                    fieldLabel: 'text 3',
                                    labelWidth: 50,
                                    width: 100,
                                }
                            ] // items container   

                    }


                ] // items form

        }).show();

    }
});