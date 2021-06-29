fnLoadData({
    tableName: 'BPPelanggan'
    , keyValue: newValue
    , keyField: 'ID'
    , isMultiValue: false
    , callback: function (response) {
        var result = Ext.decode(response);
        if (result && Array.isArray(result) && result.length > 0) {
            App.FPDynamic.getForm().setValues({
                Nama: result[0].PerusahaanNama,
                NPWP: result[0].PerusahaanNoNPWP, //changed by Simon: Ini ambil Nomow NPWP nya, bukan nama NPWP
                AlamatNPWP: result[0].PerusahaanAlamat,
                NomorPerusahaan: result[0].PerusahaanNoPerusahaan,
                ApprovedBy: result[0].UserName
            });
        }
    }
});