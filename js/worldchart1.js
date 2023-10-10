



var myChart6 = echarts.init(document.getElementById('main6'));
var colors = ['#5793f3', '#d14a61', '#675bba'];

option6 = {
    color: colors,
    title: {
        text: 'Comparison of newly confirmed cases between China and overseas',
        subtext: 'The data was updated by 2020/3/14',
        left: 'center',
       
        subtextStyle: {
            fontSize:14,
            color:"#333"
    },

    },
    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data: ['Number of new confirmed cases in China', 'Number of newly diagnosed overseas patients'],
        top: 50,
    },
    grid: {
        top: 100,
        bottom: 50
    },
    xAxis: [{
          
            type: 'category',
            name:"date",
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
                        return 'Number of newly diagnosed overseas patients：' + params
                            .value +
                            (params.seriesData.length ? '：' + params.seriesData[0].data :
                                '') + "people";
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
                        return 'Number of new confirmed cases in China：' + params.value +
                            (params.seriesData.length ? '：' + params.seriesData[0].data :
                                '') + "people";
                    }
                }
            },
            data: ['1-22', '1-26', '1-30', '2-03', '2-07', '2-11', '2-15', '2-19',
                '2-13', '2-27', '3-03', '3-06', '3-11', '3-14'
            ]
        }
    ],
    yAxis: [{
        type: 'value',
        name:"people"
    }],
    series: [{
            name: 'Number of new confirmed cases in China',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: [1459, 2829, 3401, 2009, 1751, 649, 440, 128, 145, 103, 31, 21, 20, 27],
            symbolSize: 10,
            symbol: 'circle', 
        },
        {
            name: 'Number of newly diagnosed overseas patients',
            type: 'line',
            smooth: true,
            data: [19, 14, 54, 76, 21, 10, 202, 441, 1584, 2727, 3945, 4101, 9757, 9800],
            symbolSize: 10,
            symbol: 'circle', 
        }
    ]
};

myChart6.setOption(option6);
