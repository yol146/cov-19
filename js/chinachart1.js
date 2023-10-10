var myChart4 = echarts.init(document.getElementById('main5'));

var colors = ['#5793f3', '#d14a61', '#675bba'];

option4 = {
    color: colors,
    title: {
        text: ' Confirmed cases and Suspected cases Growth',
        subtext: 'The data was updated by 2020/3/14',
        left: 'center',
        top: 5,
        subtextStyle: {
            fontSize: 14,
            color: "#333"
        },
    },
    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data: ['new comfirmed ', 'New suspected'],
        top: 50,
    },
    grid: {
        top: 100,
        bottom: 50
    },
    xAxis: [{
            name: "date",
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[1]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return ' New suspected' + params.value +
                            (params.seriesData.length ? '：' + params.seriesData[0].data :
                                '');
                    }
                }
            },
            data: ['1-22', '1-26', '1-30', '2-03', '2-07', '2-11', '2-15', '2-19',
                '2-13', '2-27', '3-03', '3-06', '3-11', '3-14'
            ]
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return 'new comfirmed ' + params.value +
                            (params.seriesData.length ? '：' + params.seriesData[0].data :
                                '');
                    }
                }
            },
            data: ['1-22', '1-26', '1-30', '2-03', '2-07', '2-11', '2-15', '2-19',
                '2-13', '2-27', '3-03', '3-06', '3-11', '3-14'
            ]
        }
    ],
    yAxis: [{
        name: "people",
        type: 'value'
    }],
    series: [{
            name: 'new comfirmed ',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: [131, 769, 1982, 3235, 3401, 2009, 820, 416, 329, 128, 103, 31, 27, 27],
            symbolSize: 10,
            symbol: 'circle',
        },
        {
            name: 'New suspected',
            type: 'line',
            smooth: true,
            data: [257, 3806, 4812, 5072, 4214, 1918, 1277, 602, 452, 129, 99, 31, 39, 39],
            symbolSize: 10,
            symbol: 'circle',
        }
    ]
};

myChart4.setOption(option4);