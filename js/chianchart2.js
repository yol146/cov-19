var myChart7 = echarts.init(document.getElementById('main7'));

var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];

app.configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: echarts.util.reduce(posList, function (map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 100
    }
};

app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
        var labelOption = {
            normal: {
                rotate: app.config.rotate,
                align: app.config.align,
                verticalAlign: app.config.verticalAlign,
                position: app.config.position,
                distance: app.config.distance
            }
        };
        myChart7.setOption({
            series: [{
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }]
        });
    }
};


var labelOption = {
    show: true,
    position: app.config.position,
    distance: app.config.distance,
    align: app.config.align,
    verticalAlign: app.config.verticalAlign,
    rotate: app.config.rotate,
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
        name: {
            textBorderColor: '#fff'
        }
    }
};

option7 = {
    color: ['#003366', '#f10'],
    title: {
        text: "Cumulative / cured death trend in China",

        left: "center",
        subtext: 'The data was updated by 2020/3/14',

        subtextStyle: {
            fontSize: 14,
            color: "#333"
        },

    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Cumulative cure', 'Cumulative death'],
        top: 50
    },
    grid: {
        top: 90,
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
       

    },
    xAxis: [{
        type: 'category',
        name: "date",
        axisTick: {
            show: false
        },
        data: ['1-22', '1-26', '1-30', '2-03', '2-07', '2-11', '2-15', '2-19',
            '2-13', '2-27', '3-03', '3-06', '3-11', '3-14'
        ]
    }],
    yAxis: [{
        type: 'value',
        name: "people"
    }],
    series: [{
            name: 'Cumulative cure',
            type: 'bar',
            barGap: 0,
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#615a5a'
                },
            },
            data: [12, 25, 60, 328, 1542, 4742, 10853, 20673, 32531, 47260, 57143, 64216, 68799, 69725],
            symbolSize: 10,
            symbol: 'circle',

        },

        {
            name: 'Cumulative death',
            type: 'bar',
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#615a5a'
                },
            },
            data: [2, 17, 106, 304, 637, 1772, 2348, 2747, 2946, 3100, 3180, 3231, 3242, 3563],
            symbolSize: 10,
            symbol: 'circle',
        }
    ],

};

myChart7.setOption(option7);