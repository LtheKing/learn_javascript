var komoditi = App._ID_BPInputDataHasilAnalisa_Komoditi.getValue()
                   var prm = {
                       tableName: 'BPRegulasi',
                       field: 'RegulasiKolom',
                       filter: 'Komoditi = \'' + komoditi + '\' ',
                       join: '',
                       tableAsQuery: false
                   };

                   Ext.net.DirectMethod.request('FetchData', {
                       url: '../DynamicFormDev/DynamicPageParser.aspx',
                       disableCaching: true,
                       params: prm,
                       success: function (response) {
                           var result = Ext.decode(response);
                           if (result && Array.isArray(result.Value) && result.Value.length > 0) {
                               //aksi
                           }
                           //param.callback();
                       },
                       failure: function (response, opts) {
                           var msg = opts.timedout ? '30 second timeout' : 'server-side failure ' + response;
                           Ext.Msg.alert('LoadValue Request Error', msg);
                           Ext.net.Mask.hide();
                       }
                   });

//USING JOIN

var prm = {
    tableName: 'BPPurchaseRequest a',
    field: 'b.Alamat',
    filter: 'a.NomorPR = \'' + newValue + '\' ',
    join: 'INNER JOIN ConBPPurchaseRequest con ON con.ChildTable = \'BPAlamatSampling\' AND con.Parent_ID = a.ID ' +
        'INNER JOIN BPAlamatSampling b ON b.ID = con.Child_ID',
    tableAsQuery: false
};