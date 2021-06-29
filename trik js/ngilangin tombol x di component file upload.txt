var idFrame = App._ID_EXJenisBiayaPertanggungjawabanCA_LampiranMemoLabel_Surrogate_FilePanel.items.keys[0];
        if (idFrame != undefined) {
            var idFile = idFrame.replace('FramePanel', 'FilePanel');
            App['delButton' + idFile].fireEvent('click');
        }