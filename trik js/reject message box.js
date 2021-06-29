if (App.FPDynamic.isValid()) {
    var messageBox = Ext.MessageBox.show({
        title: 'Quotation Ditolak',
        msg: 'Mohon Memasukkan Alasan Penolakan :',
        icon: Ext.MessageBox.WARNING,
        width: 300,
        buttons: {
            yes: 'OK',
            no: 'Cancel'
        },
        multiline: true,
        fn: function (btnText, sInput) {
            if (btnText === 'OK' || btnText === 'yes') {

                App._ID_BPQuotation_Revisi.setValue(sInput);
                App._ID_BPQuotation_Status.setValue('REJECTED');
                App.BtnDynamicFormSave.fireEvent('click');
            }
        }
    });

    messageBox.msgButtons.yes.setDisabled(true);
    messageBox.textArea.allowBlank = false;
    messageBox.textArea.on('change', function (e, text, o) {
        if (text.length > 0) {
            messageBox.msgButtons.yes.setDisabled(false);
        } else {
            messageBox.msgButtons.yes.setDisabled(true);
        }
    });
} else {
    alert('ada data yang belum terisi');
}
            //location.reload();
