
                    var params = App.FPDynamic.getValues();
                    Ext.net.DirectMethod.request('ProjectInvoker', {
                        url: '../DynamicFormDev/DynamicPageParser.aspx',
                        disableCaching: true,
                        eventMask: { showMask: true, msg: 'Processing...' },
                        params: {
                            projectInvokerEntity: {
                                ProjectName: 'UNILAB',
                                ClassName: 'BL',
                                MethodName: 'Method Inside BL',
                                Param: Ext.encode(params)
                            }
                        },
                        success: function (response) {
                            var result = Ext.decode(response);
                            if (result && Array.isArray(result.Value) && result.Value.length > 0) {
                                //aksi
                            }

                        },
                        failure: function (response, opts) {
                            console.log(response);
                            Ext.net.Notification.show({ title: "Warning", html: "Save failed.", iconCls: "#Warning" });
                        }
                    });
     