loadData: function() {
    var value = App._ID_BPParameterPengujian_ParameterID.getValue();
    var prm = {
        tableName: "BPDistribusiAnalisis da",
        keyValue: value,
        keyField: "ParameterID",
        join: "INNER JOIN BPParameter p ON p.ParameterID = da.ParameterID",
        isMultiValue: true,
        callback: function(response) {
            if (response && response.length > 0) {
                var result = Ext.decode(response);
                console.log(result);
                if (result && Array.isArray(result) && result.length > 0) {
                    _EXEC.addParameterToGrid(result);
                }
            }
        }
    };

    fnLoadData(prm)
}