var TreePanelProtes = {
    Protes: {
        Panel: {}
    },
    Initialize: function (ProtestNumber, Title, GridPanelID, PanelID) {
        this.GenerateTreePanel(ProtestNumber, Title, GridPanelID);
        App['_ID_EPSC03B_' + PanelID].add(this.Protes.Panel);

        //if (App['GPProtes' + ProtestNumber]) {
        //    App['GPProtes' + ProtestNumber].on({
        //        cellClick: function () {
        //            App['GPProtes' + ProtestNumber + 'BtnEdit'].setDisabled(!(App['GPProtes' + ProtestNumber].getSelectedNodes().length > 0));
        //            App['GPProtes' + ProtestNumber + 'BtnDelete'].setDisabled(!(App['GPProtes' + ProtestNumber].getSelectedNodes().length > 0));
        //        }
        //    });
        //}
    },
    GenerateTreePanel: function (ProtestNumber, Title, GridPanelID) {
        var ID = 'GPProtes' + ProtestNumber;
        var self = TreePanelProtes.Protes;

        self.Panel = Ext.create('Ext.tree.Panel', {
            id: ID,
            title: Title,
            border: true,
            minHeight: 400,
            maxWidth: 850,
            autoScroll: false,
            tbar: {
                xtype: 'toolbar',
                items: [
                    {
                        xtype: 'button',
                        itemId: ID + 'BtnAdd',
                        iconCls: 'icon-applicationadd',
                        disabled: false,
                        text: 'Add',
                        handler: function () {
                            if (App['_ID_' + GridPanelID + '_GridPanel_BtnAdd']) {
                                App['_ID_' + GridPanelID + '_GridPanel_BtnAdd'].fireEvent('click', null);
                            }
                        },
                    },
                {
                    xtype: 'button',
                    itemId: ID + 'BtnEdit',
                    iconCls: 'icon-applicationedit',
                    disabled: true,
                    text: 'Edit',
                    handler: function () {
                        if (App['_ID_' + GridPanelID + '_GridPanel_BtnEdit']) {
                            App['_ID_' + GridPanelID + '_GridPanel_BtnEdit'].fireEvent('click', null);
                        }
                    },
                },
                {
                    xtype: 'button',
                    itemId: ID + 'BtnDelete',
                    iconCls: 'icon-applicationdelete',
                    disabled: true,
                    text: 'Delete',
                    handler: function () {
                        if (App['_ID_' + GridPanelID + '_GridPanel_BtnDel']) {
                            App['_ID_' + GridPanelID + '_GridPanel_BtnDel'].fireEvent('click', null);
                        }
                    },
                }
                ]
            },
            //tbar: [

            //],
            store: Ext.create('Ext.data.TreeStore', {
                fields: [
                    { name: "NamaPesertaTender", type: "string" },
                    { name: "TglSanggahan", type: "string" },
                    { name: "MateriSanggahan", type: "string" },
                    { name: "TglTanggapan", type: "string" },
                    { name: "MateriTanggapan", type: "string" },
                    { name: "LeaderID", type: "string" },
                    { name: "VendorName", type: "string" },
                    { name: "Consortium", type: "string" },
                    { name: "IsLeadConsortium", type: "string" },
                    { name: "RefVendorID", type: "string" },
                    { name: "ConsortiumName", type: "string" },
                    { name: "RootConsortium", type: "string" },
                    { name: "TenderNo", type: "string" }
                ],
                root: {
                    "Text": ".",
                    "children": []
                },
            }),
            columns: [
                { xtype: 'treecolumn', text: 'Nama Peserta Tender', dataIndex: 'NamaPesertaTender', width: 150 },
                { text: 'Tanggal Sanggahan', dataIndex: 'TglSanggahan', width: 150 },
                { text: 'Materi Sanggahan', dataIndex: 'MateriSanggahan', width: 150 },
                { text: 'Tanggal Tanggapan', dataIndex: 'TglTanggapan', width: 150 },
                { text: 'Materi Tanggapan', dataIndex: 'MateriTanggapan', width: 150 },
                { text: 'LeaderID', dataIndex: 'LeaderID', hidden: true },
                { text: 'VendorName', dataIndex: 'VendorName', hidden: true },
                { text: 'Consortium', dataIndex: 'Consortium', hidden: true },
                { text: 'IsLeadConsortium', dataIndex: 'IsLeadConsortium', hidden: true },
                { text: 'RefVendorID', dataIndex: 'RefVendorID', hidden: true },
                { text: 'ConsortiumName', dataIndex: 'ConsortiumName', hidden: true },
                { text: 'RootConsortium', dataIndex: 'RootConsortium', hidden: true },
                { text: 'TenderNo', dataIndex: 'TenderNo', hidden: true }
            ],
            listeners: {
                selectionchange: function (component, selected) {
                    var TB = App[ID].getDockedItems('toolbar').filter(function (item) {
                        if (item.dock == 'top') {
                            return true;
                        }
                    });

                    if (TB && TB.length > 0) {
                        if (TB[0].down('#' + ID + 'BtnEdit'))
                            TB[0].down('#' + ID + 'BtnEdit').setDisabled(!(selected.length > 0));

                        if (TB[0].down('#' + ID + 'BtnDelete'))
                            TB[0].down('#' + ID + 'BtnDelete').setDisabled(!(selected.length > 0));
                    }

                    if (selected) {
                        if (selected.length > 0) {
                            var SelectedData = selected[0];
                            if (SelectedData.data && SelectedData.data.parentId) {
                                if (SelectedData.data.parentId == 'root') {
                                    if (SelectedData.data.RefVendorID) {
                                        var RefVendorID = SelectedData.data.RefVendorID;
                                        if (App['_ID_' + GridPanelID + '_GridPanel'] && App['_ID_' + GridPanelID + '_GridPanel_Store']) {
                                            App['_ID_' + GridPanelID + '_GridPanel'].getSelectionModel().deselectAll();
                                            App['_ID_' + GridPanelID + '_GridPanel_Store'].data.items.forEach(function (item) {
                                                if (item.data.RefVendorID == RefVendorID) {
                                                    var ID = item.internalId;
                                                    var Rec = App['_ID_' + GridPanelID + '_GridPanel_Store'].getByInternalId(ID);
                                                    App['_ID_' + GridPanelID + '_GridPanel'].getSelectionModel().select(Rec, true, false);
                                                }
                                            });
                                        }
                                    }
                                } else {
                                    if (App[ID])
                                        App[ID].getSelectionModel().deselectAll();
                                }
                            } else {
                                if (App[ID])
                                    App[ID].getSelectionModel().deselectAll();
                            }
                        }
                    }

                }
            },
            rootVisible: false,
            useArrows: true,
            rowLines: true
        });
    },
    LoadData: function (TreePanelID, ListData, PanelID) {
        if (ListData && ListData.length > 0 && App[TreePanelID]) {
            var RootNode = App[TreePanelID].getRootNode();
            TreePanelPushData.RemoveData(App[TreePanelID]);
            var TreeData = {};
            ListData.forEach(function (item) {
                var ItemData = {};
                if (App['_ID_' + PanelID + '_GridPanel_Store']) {
                    App['_ID_' + PanelID + '_GridPanel_Store'].data.items.forEach(function (item2) {
                        if (item2.data) {
                            var TempData = item2.data;
                            if (TempData.LeaderID) {
                                if (TempData.LeaderID == item.LeaderID || TempData.RefVendorID == item.RefVendorID) {
                                    ItemData = TempData;
                                }
                            }
                        }
                    });
                }

                if (!(item.Consortium == 'Yes' && item.IsLeadConsortium == 'Yes' && item.RootConsortium == 'true')) {
                    if (item.Consortium == 'Yes') {
                        if (!(TreeData[item.LeaderID])) {
                            TreeData[item.LeaderID] = RootNode.insertChild(0, { //Consorsium
                                "leaf": false,
                                "NamaPesertaTender": Helper.ValueGenerator(item.ConsortiumName),
                                "TglSanggahan": Helper.DateGeneratorToString(ItemData.TglSanggahan),
                                "MateriSanggahan": Helper.ValueGenerator(ItemData.MateriSanggahan),
                                "TglTanggapan": Helper.DateGeneratorToString(ItemData.TglTanggapan),
                                "MateriTanggapan": Helper.ValueGenerator(ItemData.MateriTanggapan),
                                "LeaderID": Helper.ValueGenerator(item.LeaderID),
                                "VendorName": Helper.ValueGenerator(item.ConsortiumName),
                                "Consortium": Helper.ValueGenerator(item.Consortium),
                                "IsLeadConsortium": Helper.ValueGenerator(item.IsLeadConsortium),
                                "RefVendorID": Helper.ValueGenerator(item.RefVendorID),
                                "ConsortiumName": Helper.ValueGenerator(item.ConsortiumName),
                                "RootConsortium": Helper.ValueGenerator(item.RootConsortium),
                                "TenderNo": Helper.ValueGenerator(item.TenderNo)
                            });
                        }

                        TreePanelProtes.LoadChildData(TreeData[item.LeaderID], item, ItemData);
                    } else {
                        RootNode.insertChild(0, { //Non Consorsium
                            "leaf": true,
                            "NamaPesertaTender": Helper.ValueGenerator(item.VendorName),
                            "TglSanggahan": Helper.DateGeneratorToString(ItemData.TglSanggahan),
                            "MateriSanggahan": Helper.ValueGenerator(ItemData.MateriSanggahan),
                            "TglTanggapan": Helper.DateGeneratorToString(ItemData.TglTanggapan),
                            "MateriTanggapan": Helper.ValueGenerator(ItemData.MateriTanggapan),
                            "LeaderID": Helper.ValueGenerator(item.LeaderID),
                            "VendorName": Helper.ValueGenerator(item.VendorName),
                            "Consortium": Helper.ValueGenerator(item.Consortium),
                            "IsLeadConsortium": Helper.ValueGenerator(item.IsLeadConsortium),
                            "RefVendorID": Helper.ValueGenerator(item.RefVendorID),
                            "ConsortiumName": Helper.ValueGenerator(item.ConsortiumName),
                            "RootConsortium": Helper.ValueGenerator(item.RootConsortium),
                            "TenderNo": Helper.ValueGenerator(item.TenderNo)
                        });
                    }
                }
            });

            var GridPanel = GridPanelStore.GetGridPanelIDByTableName(PanelID);

            InitializeComponent.HideGridPanelShowTreePanel(App['_ID_' + PanelID + '_GridPanel'], App['_ID_EPSC03B_' + GridPanel], 'hide');
        }
    },
    LoadChildData: function (Node, Data, ItemData) {
        if (Node && Node.appendChild)
            Node.appendChild({
                "leaf": true,
                "NamaPesertaTender": Helper.ValueGenerator(Data.VendorName),
                "TglSanggahan": Helper.DateGeneratorToString(ItemData.TglSanggahan),
                "MateriSanggahan": Helper.ValueGenerator(ItemData.MateriSanggahan),
                "TglTanggapan": Helper.DateGeneratorToString(ItemData.TglTanggapan),
                "MateriTanggapan": Helper.ValueGenerator(ItemData.MateriTanggapan),
                "LeaderID": Helper.ValueGenerator(Data.LeaderID),
                "VendorName": Helper.ValueGenerator(Data.VendorName),
                "Consortium": Helper.ValueGenerator(Data.Consortium),
                "IsLeadConsortium": Helper.ValueGenerator(Data.IsLeadConsortium),
                "RefVendorID": Helper.ValueGenerator(Data.RefVendorID),
                "ConsortiumName": Helper.ValueGenerator(Data.ConsortiumName),
                "RootConsortium": Helper.ValueGenerator(Data.RootConsortium),
                "TenderNo": Helper.ValueGenerator(Data.TenderNo)
            });
    }
};