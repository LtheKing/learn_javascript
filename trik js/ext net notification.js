//notifikasi di bawah kanan form
Ext.net.Notification.show({ title: "Info", html: 'get perdiem data completed', iconCls: "#Information" });

// notifikasi di tengah form
Ext.Msg.show({
    title: 'Error',
    icon: Ext.MessageBox.ERROR,
    buttons: Ext.Msg.OK,
    msg: message
});