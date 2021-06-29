 var fnTestChart = function () {
            var store = Ext.create('Ext.data.JsonStore', {
                fields: ['name', 'data', 'data2'],
                data: [{
                    'name': 'metric one',
                    'data': 10,
                    'data2': 12
                }, {
                    'name': 'metric two',
                    'data': 7,
                    'data2': 15
                }, {
                    'name': 'metric three',
                    'data': 5,
                    'data2': 10
                }, {
                    'name': 'metric four',
                    'data': 2,
                    'data2': 8
                }, {
                    'name': 'metric five',
                    'data': 27,
                    'data2': 16
                }]
            });

            var chart = Ext.create('Ext.chart.Chart', {
                renderTo: Ext.getBody(),
                width: 500,
                height: 300,
                animate: true,
                store: store,
                axes: [{
                    type: 'Category',
                    position: 'bottom',
                    fields: ['name'],
                    title: 'Sample Metrics'
                }, {
                    type: 'Numeric',
                    position: 'left',
                    fields: ['data', 'data2'],
                    title: 'Sample Values',
                    label: {
                        renderer: Ext.util.Format.numberRenderer('0,0')
                    },
                    grid: true,
                    minimum: 0
                }],
                series: [{
                    type: 'column',
                    axis: 'bottom',
                    highlight: true,
                    tips: {
                        trackMouse: true,
                        width: 140,
                        height: 28,
                        renderer: function (storeItem, item) {
                            this.setTitle(storeItem.get('name') + ': ' + storeItem.get('data') + ' views');
                        }
                    },
                    label: {
                        display: 'insideEnd',
                        field: ['data', 'data2'],
                        renderer: Ext.util.Format.numberRenderer('0'),
                        orientation: 'horizontal',
                        color: '#333',
                        'text-anchor': 'middle'
                    },
                    xField: 'name',
                    yField: ['data', 'data2']
                }]
            });

            App.of_chart.add(chart);
        }