function GenerateTreePanel(Config) {

    Config.Fields.push(
        { name: '_Method', type: 'string', label: 'Method', hidden: true, readOnly: true, submitted: true }
    );

    var CustomComponent = {
        Component: null,
        Store: null,
        WindowForm: Config.WindowForm ? Config.WindowForm : null,
        init: function () {
            this.generateComponent();
            this.generateWindowForm();
            App[Config.RenderTo].add(this.Component);
        },
        generateColumns: function () {
            var columns = [];
            var fieldXtype = '';

            Config.Fields.forEach(function (field) {
                var column = {
                    dataIndex: field.name,
                    xtype: fieldXtype,
                    text: field.text,
                    width: field.width ? field.width : 200,
                    hidden: field.hidden
                };

                if (field.isTreeColumn)
                    column.xtype = 'treecolumn';

                columns.push(column);
            });

            return columns;
        },
        generateComponent: function () {
            var self = this;
            var btnView = false;
            var btnAdd = false;
            var btnEdit = false;
            var btnDel = false;

            if (Config.Buttons) {
                btnAdd = Config.Buttons.indexOf('Add') > -1;
                btnEdit = Config.Buttons.indexOf('Edit') > -1;
                btnView = Config.Buttons.indexOf('View') > -1;
                btnDel = Config.Buttons.indexOf('Delete') > -1;
            }

            this.Component = Ext.create('Ext.tree.Panel', {
                id: Config.ID,
                title: Config.Title,
                border: false,
                minHeight: 300,
                dockedItems: [
                    {
                        xtype: 'toolbar',
                        dock: 'top',
                        padding: 5,
                        classicButtonStyle: true,
                        items: [
                            {
                                xtype: 'button',
                                hidden: !btnAdd,
                                disabled: !btnAdd,
                                text: 'Add',
                                iconCls: 'icon-applicationadd',
                                itemId: [Config.ID, 'BtnAdd'].join('_'),
                                handler: function () {

                                    //var selected = App[Config.ID].getSelectionModel().getSelection();

                                    //if (selected.length > 0) {
                                    //    var form = App[Config.WindowFormID];
                                    //    form.loadRecord(selected[0]);

                                    self.WindowForm.show();
                                    self.WindowForm.center();
                                    //};
                                }
                            },
                            //{
                            //    xtype: 'button',
                            //    text: 'TES',
                            //    handler: function () {
                            //        console.log(self.getDataForSubmitted());
                            //    }
                            //},
                            {
                                xtype: 'button',
                                disabled: true,
                                hidden: !btnView,
                                text: 'View',
                                iconCls: 'icon-find-file',
                                itemId: [Config.ID, 'BtnView'].join('_'),
                                handler: function () {
                                    var selected = App[Config.ID].getSelectionModel().getSelection();

                                    if (selected.length > 0) {
                                        var form = App[Config.WindowFormID];
                                        var fields = form.getForm().getFields();

                                        fields.each(function (field) {
                                            if (field.setReadOnly) {
                                                field.setReadOnly(true);
                                                field.setFieldStyle('background-color:#eeeeee');
                                            }
                                        });

                                        form.loadRecord(selected[0]);

                                        App[[Config.ID, 'BottomToolbar'].join('_')].setDisabled(true);
                                        App[[Config.ID, 'BottomToolbar'].join('_')].setVisible(false);

                                        self.WindowForm.show();
                                        self.WindowForm.center();
                                    };
                                }
                            },
                            {
                                xtype: 'button',
                                text: 'Edit',
                                iconCls: 'icon-applicationedit',
                                itemId: [Config.ID, 'BtnEdit'].join('_'),
                                hidden: !btnEdit,
                                disabled: true,
                                handler: function () {
                                    var selected = App[Config.ID].getSelectionModel().getSelection();

                                    if (selected.length > 0) {
                                        var form = App[Config.WindowFormID];
                                        var fields = form.getForm().getFields()

                                        form.loadRecord(selected[0]);

                                        App[[Config.ID, 'BottomToolbar'].join('_')].setDisabled(false);
                                        App[[Config.ID, 'BottomToolbar'].join('_')].setVisible(true);

                                        Config.Fields.forEach(function (field) {
                                            var comp = fields.getByKey([Config.WindowFormID, field.name].join('_'));
                                            if (comp) {
                                                comp.setReadOnly(field.readOnly);
                                                comp.setFieldStyle(field.readOnly ? 'background-color:#eeeeee' : 'background-color:#ffffff');
                                            }
                                        });

                                        self.WindowForm.show();
                                        self.WindowForm.center();
                                    };
                                }
                            },
                            {
                                xtype: 'button',
                                text: 'Delete',
                                iconCls: 'icon-applicationdelete',
                                itemId: [Config.ID, 'BtnDelete'].join('_'),
                                hidden: !btnDel,
                                disabled: true,
                                handler: function () {
                                    var selected = App[Config.ID].getSelectionModel().getSelection();

                                }
                            }
                        ]
                    }
                ],
                store: Ext.create('Ext.data.TreeStore', {
                    fields: Config.Fields,
                    root: {
                        "Text": ".",
                        "children": []
                    },
                }),
                rootVisible: false,
                useArrows: true,
                rowLines: true,
                listeners: {
                    selectionchange: function (component, selected) {
                        App[[Config.ID, 'BtnEdit'].join('_')].setDisabled(!(selected.length === 1));
                        App[[Config.ID, 'BtnView'].join('_')].setDisabled(!(selected.length === 1));
                        App[[Config.ID, 'BtnDelete'].join('_')].setDisabled(!(selected.length === 1));
                    }
                },
                columns: this.generateColumns()
            });
        },
        generateWindowForm: function () {
            var self = this;
            var dockedItems = {
                id: [Config.ID, 'BottomToolbar'].join('_'),
                xtype: 'toolbar',
                dock: 'bottom',
                padding: 5,
                classicButtonStyle: true,
                items: [
                    { xtype: 'tbfill', flex: 1 },
                    {
                        xtype: 'button',
                        text: 'Save',
                        iconCls: 'icon-disk',
                        handler: function () {
                            var selected = App[Config.ID].getSelectionModel().getSelection();

                            if (selected.length > 0) {
                                var form = App[Config.WindowFormID];
                                var formValues = form.getValues();

                                var data = selected[0].data;

                                if (form.isValid()) {
                                    for (var x in formValues) {
                                        data[x] = formValues[x]
                                    };

                                    if (data.leaf === false && selected[0].childNodes.length > 0) {
                                        selected[0].childNodes.forEach(function (child) {
                                            child.data.AdministrativeReq = formValues.AdministrativeReq;
                                            child.data.EvaluatedPrice = formValues.EvaluatedPrice;
                                            child.data.HEARank = formValues.HEARank;
                                            child.data.LocalContent = formValues.LocalContent;
                                            child.data.ProposalCurrency = formValues.ProposalCurrency;
                                            child.data.ProposalPrice = formValues.ProposalPrice;
                                            child.data.TechnicalFinalResult = formValues.TechnicalFinalResult;
                                            child.data.Remark = formValues.Remark;
                                        })
                                    }

                                    self.WindowForm.close();
                                    App[Config.ID].getView().refresh();
                                }
                            };
                        }
                    }
                ]
            };
            if (this.WindowForm) {
                this.WindowForm.addDocked(dockedItems);
            }
            else {
                //CREATE GENERIC WINDOW FORM HERE
                var formFields = [];
                var fieldXtype = '';
                var windowHeight = 0;

                Config.Fields.forEach(function (field) {
                    switch (field.type.toUpperCase()) {
                        case 'NUMBER':
                            fieldXtype = 'numberfield';
                            break;
                        case 'DATE':
                            fieldXtype = 'datefield';
                            break;
                        default:
                            fieldXtype = 'textfield'
                    }
                    formFields.push({
                        id: [Config.WindowFormID, field.name].join('_'),
                        name: field.name,
                        xtype: fieldXtype,
                        fieldLabel: field.text,
                        hidden: field.hidden,
                        readOnly: field.readOnly,
                        fieldStyle: field.readOnly ? 'background-color:#eeeeee' : ''
                    });

                    if (!field.hidden && windowHeight < 450)
                        windowHeight += 80;
                });

                self.WindowForm = Ext.create('Ext.window.Window', {
                    id: [Config.ID, 'Window'].join('_'),
                    closeAction: 'hide',
                    layout: 'fit',
                    width: 540,
                    //height: windowHeight,
                    modal: true,
                    dockedItems: dockedItems,
                    items: {
                        //region: 'center',
                        id: Config.WindowFormID,
                        xtype: 'form',
                        layout: 'form',
                        bodyPadding: 15,
                        autoScroll: true,
                        items: formFields
                    }
                })
            }
        },
    };

    var Fields = [
        { name: 'ID', type: 'number', text: 'ID', width: 300, hidden: true, submitted: true },
        { name: 'VendorName', type: 'string', text: 'Vendor Name', isTreeColumn: true, width: 300, hidden: false, submitted: true, readOnly: true },
        { name: 'RefVendorID', type: 'string', text: 'RefVendorID', hidden: true, submitted: true },
        { name: "Remark", type: "string", text: 'Remark', hidden: true, submitted: true },
        { name: 'Status', type: 'string', text: 'Status', hidden: true, submitted: true, readOnly: true },
        { name: 'ConsortiumName', type: 'string', text: 'Consortium Name', hidden: true, submitted: true },
        { name: 'Consortium', type: 'string', text: 'Consortium', hidden: true, submitted: true },
    ];

    GenerateTreePanel({
        Buttons: ['View'],
        RenderTo: '_ID_EPDSTenderResult_ContainerBidRequest',
        ID: 'GPBidRequest',
        WindowFormID: 'WFBidRequest',
        Title: 'Bid Request',
        Fields: this.Fields
    });

    CustomComponent.init();
}