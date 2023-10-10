var myChart3 = echarts.init(document.getElementById('main4'));


var data = [];
var data2 = [];

data2 = [2016 - 01 - 10, 100]

var option3 = {


    title: {
        text: "Global epidemic trend",
        subtext: 'The data was updated by 2020/3/13',
        left: "center",
        top: 15,
        subtextStyle: {
            fontSize:14,
            color:"#333"
    },
    },


    legend: {

        data: ['Cumulative comfirmed  in the world', 'Current comfirmed  in the world'],
        top: 60
    },

   
    grid: {
        top: '20%', 
        left: '3%',
        right: '8%',
        bottom: '3%',
        containLabel: true
    },


    tooltip: {
        trigger: 'axis'
    },


    toolbox: {

    },

    xAxis: {
        name: 'date',
        type: 'category',
        axisLine: {
            lineStyle: {

                color: '#333'
            }
        },

        axisLabel: {
            rotate: 0, 
            interval: 0 
        },

        boundaryGap: false,
        data: ['01-28', '02-02', '02-06', '02-10', '02-14', '02-18', '03-01', "03-05", "03-09",
            '03-13'
        ]
    },

    yAxis: {
        name: 'people',
        type: 'value',
        min: 0, 
        max: 30000, 
        splitNumber: 9, 
        axisLine: {
            lineStyle: {
                color: '#333'
            }
        },
    },

    series: [{
            name: 'Cumulative comfirmed  in the world',
            data: [57, 139, 201, 313, 505, 800, 1231, 2575, 5305, 26914, 58146, 92075],
            type: 'line',
            smooth: 0.5,
            symbolSize: 10,
            symbol: 'circle', 
        },

        {
            name: 'Current comfirmed  in the world',
            data: [54, 128, 179, 282, 447, 709, 1078, 2343, 5755, 23145,49670,78211],
            type: 'line',
            
            symbolSize: 10,
            symbol: 'circle', 
            itemStyle: {
                normal: {
            
                    label: {
                        show: true
                    },
                    borderColor: 'red', 
                    lineStyle: {
                        width: 3, 
                        type: 'dotted' 
                    }
                }
            }
        },
    ],

    color: ['#00EE00', '#FF9F7F', '#FFD700']
};

myChart3.setOption(option3);
