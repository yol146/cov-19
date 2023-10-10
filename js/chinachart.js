var myChart2 = echarts.init(document.getElementById('main3'));


    option2 = {
        legend: {
            top:60
        },
        title: {
            text:'Trends of confirmed / suspected / severe cases in China',
            subtext: 'The data was updated by 2020/3/13',
            left: "center",
            top:10,
            subtextStyle: {
                fontSize:14,
                color:"#333"
        },
           
        },
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['product', '1-13', '1-18', '1-23', '1-28', '2-02', '2-08', '2-12', '2-17',
                    '2-22', '2-27', '3-03', '3-13'
                ],
                ['Cumulative comfirmed ', 198, 835, 5997, 17238, 37251, 59882, 72528, 77041,
                    78959, 80422, 81021, 81031
                ],
                ['Existing comfirmed ', 0, 0, 776, 5762, 16402, 33788, 52599, 58097, 51689,
                    40011, 27524, 12178
                ],
                ['Existing suspects', 0, 0, 1072, 9239, 21558, 28942, 13435, 6242, 4148, 2308,
                    520, 115
                ],
                ['Existing severe cases', 0, 0, 0, 1239, 2296, 6188, 8030, 11741, 10968, 7952,
                    6416, 3610
                ]
            ],
           
        },
      
        xAxis : [
            {  
                name: 'Date',
                boundaryGap: false, // 将此属性设置为false即可让其在两侧显示
                type : 'category',
               
                axisTick: {show:false},
               
                
            }
        ],

        yAxis: {
            name:"people",
            gridIndex: 0
        },
        grid: {
            top: '55%'
        },
        series: [{
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                symbolSize: 10,
                symbol: 'circle', 
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                symbolSize: 10,
                symbol: 'circle', 
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                symbolSize: 10,
                symbol: 'circle', 
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                symbolSize: 10,
                symbol: 'circle', 
            },
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                label: {
                    formatter: '{b}: {@2-02} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '2-02',
                    tooltip: '2-02'
                },
                
                top:80
            }
        ],
        
    };

    myChart2.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart2.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });

    myChart2.setOption(option2);



