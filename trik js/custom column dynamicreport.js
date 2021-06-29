[{
    xtype: 'gridcolumn',
    dataIndex: 'NamaAlat',
    width: 150,
    text: 'Nama Alat',
    align: 'center'
}, {
    xtype: 'datecolumn',
    dataIndex: 'TanggalKalibrasi',
    width: 150,
    text: 'Tanggal Kalibrasi',
    align: 'center',
    renderer: function (value, metaData) {
        var tmp = '';
        if (value != null && value != '') {
            tmp = Ext.util.Format.date(value, 'd-M-Y');
        }
        return tmp;
    }
}]