        COMPONENT: {
           GRID: {
               Component: {},
               generateGrid: function () {
                   var self = controller.COMPONENT.GRID;
                   var store = Ext.create('Ext.data.TreeStore', {
                       fields: [
                           { name: 'ID', type: 'string' },
                           { name: 'Catatan', type: 'string' },
                           { name: 'DelapanJamHariKerja', type: 'string' },
                           { name: 'DelapanJamHariLibur', type: 'string' },
                           { name: 'IsokinetikHariKerja', type: 'string' },
                           { name: 'IsokinetikHariLibur', type: 'string' },
                           { name: 'Jabatan', type: 'string' },
                           { name: 'JabatanStrukturalID', type: 'string' },
                           { name: 'JarakTempuh', type: 'string' },
                           { name: 'KodeWilayah', type: 'string' },
                           { name: 'Kota', type: 'string' },
                           { name: 'KotaID', type: 'string' },
                           { name: 'Perdiem24Jam', type: 'string' },
                           { name: 'Perdiem24JamLibur', type: 'string' },
                           { name: 'PerdiemHariKerja', type: 'string' },
                           { name: 'PerdiemHariLibur', type: 'string' },
                           { name: 'Provinsi', type: 'string' },
                           { name: 'ProvinsiID', type: 'string' },
                           { name: 'Sesaat', type: 'string' },
                           { name: 'DelapanJam', type: 'string' },
                           { name: 'Menginap', type: 'string' },
                           { name: 'Isokinetik', type: 'string' },
                           { name: 'DuaEmpatJam', type: 'string' },
                       ],
                       root: {
                           "Text": ".",
                           "children": []
                       }
                   });
                   self.Component = Ext.create('Ext.tree.Panel', {
                       store: store,
                       height: 350,
                       rootVisible: false,
                       id: 'GPPerdiem',
                       padding: 0,
                       tbar: {},
                       listeners: {},
                       columns: [
                           {
                               xtype: 'treecolumn',
                               text: '<b>Sesaat (PP)</b>',
                               width: 200,
                               sortable: false,
                               dataIndex: 'Sesaat',
                               menuDisabled: true,
                               hidden: false
                           },
                           {
                               text: '<b>8 Jam (K3)</b>',
                               width: 150,
                               align: 'center',
                               sortable: false,
                               dataIndex: 'DelapanJam',
                               menuDisabled: true,
                               leaf: true
                           },
                           {
                               text: '<b>Menginap</b>',
                               width: 150,
                               align: 'center',
                               sortable: false,
                               dataIndex: 'Menginap',
                               menuDisabled: true,
                               leaf: true
                           },
                           {
                               text: '<b>Isokinetik</b>',
                               width: 150,
                               align: 'center',
                               sortable: false,
                               dataIndex: 'Isokinetik',
                               menuDisabled: true,
                               leaf: true
                           },
                           {
                               text: '<b>24 Jam</b>',
                               width: 150,
                               align: 'center',
                               sortable: false,
                               dataIndex: 'DuaEmpatJam',
                               menuDisabled: true,
                               leaf: true
                           }
                       ]
                   });
               },
               generateChildNode: function () {

               },
               init: function () {
                   var self = controller.COMPONENT;
                   self.GRID.generateGrid();
                   App._ID_BPJabatanStruktural_TreePerdiem.add(self.GRID.Component);
               }
           },
        }