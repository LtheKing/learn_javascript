Ext.application({
    name : 'Fiddle',

    launch : function() {
        Ext.onReady(function(){
 
    Ext.create('Ext.data.Store', {
        storeId : 'simpsonsStore',
        fields  : ['name', 'email', 'change'],
        data    : {'items' : [
            { 'name' : 'Lisa',  'email' : 'lisa@simpsons.com',  'change' : 100  },
            { 'name' : 'Bart',  'email' : 'bart@simpsons.com',  'change' : -20  },
            { 'name' : 'Homer', 'email' : 'home@simpsons.com',  'change' : 23   },
            { 'name' : 'Marge', 'email' : 'marge@simpsons.com', 'change' : -11  }
        ]},
        proxy   : {
            type   : 'memory',
            reader : {
                type : 'json',
                root : 'items'
            }
        }
    });

    var grid = Ext.create('Ext.grid.Panel', {
        title      : 'Simpsons',
        store      : Ext.data.StoreManager.lookup('simpsonsStore'),
        simpleSelect : false,
        columns    : [
            { header : 'Name', dataIndex : 'name', locked: true },
            { header : 'Email', dataIndex : 'email', flex : 1 },
            { header : 'Change', dataIndex : 'change', tdCls : 'x-change-cell' }
        ],
        height     : 200,
        width      : 400,
        
        listeners: { // not locked
            cellclick: function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
                if (cellIndex == 0) {
                    Ext.Msg.alert('grid click');
                }    
            }
        },        
        
        renderTo   : Ext.getBody()
    });

    var gridLocked = grid.lockedGrid.getView();

    gridLocked.on('cellclick', function(grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        Ext.Msg.alert('locked grid click');
    });

});
    }
});