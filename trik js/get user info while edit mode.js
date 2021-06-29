JS:


    function getUserInfo() {
        userName = "";
        groupName = "";

        Ext.net.DirectMethod.request('GetUserInfo', {
            url: '../DynamicFormDev/DynamicPageParser.aspx',
            disableCaching: true,
            eventMask: {
                showMask: true,
                msg: 'Loading please wait...'
            },
            success: function(response) {

                if (response) {

                    var result = Ext.decode(response);
                    userName = result.UserName;
                    groupName = result.GroupName;
                }
            },
            failure: function(response, opts) {
                var msg = opts.timedout ? '30 second timeout' : 'server-side failure ' + response;
                Ext.Msg.alert('Warning', msg);
                Ext.net.Mask.hide();
            }
        });
    }