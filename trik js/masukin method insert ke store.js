var dataStore = App._ID_BPParameterPengujianChild_GridPanel_Store;
dataStore.loadData(result.Value);
dataStore.commitChanges();
var index = App._ID_BPParameterPengujianChild_GridPanel_Store.indexOfId();
var dataParam = [];
dataStore.each(function (data) {
    data.data._method = 'INSERT';
    data.data._rowId = data.internalId;
    data.data._index = index;

    dataParam.push(data.data);
    index++;
});

App._ID_BPParameterPengujianChild_GridPanel_Data.setValue(Ext.encode(dataParam));