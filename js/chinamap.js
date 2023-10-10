
var dataList = [{
        name: "South China Sea Islands",
        value: 0
    },
    {
        name: 'Beijing',
        value: 437
    },
    {
        name: 'Tianjin',
        value: 136
    },
    {
        name: 'Shanghai',
        value: 352
    },
    {
        name: 'Chongqing',
        value: 576
    },
    {
        name: 'Hebei',
        value: 318
    },
    {
        name: 'Henan',
        value: 1273
    },
    {
        name: 'Yunnan',
        value: 174
    },
    {
        name: 'Liaoning',
        value: 125
    },
    {
        name: 'Heilongjiang',
        value: 482
    },
    {
        name: 'Hunan',
        value: 1018
    },
    {
        name: 'Anhui',
        value: 990
    },
    {
        name: 'Shandong',
        value: 760
    },
    {
        name: 'Xinjiang',
        value: 76
    },
    {
        name: 'Jiangsu',
        value: 631
    },
    {
        name: 'Zhejiang',
        value: 1227
    },
    {
        name: 'Jiangxi',
        value: 935
    },
    {
        name: 'Hubei',
        value: 11772
    },
    {
        name: 'Guangxi',
        value: 252
    },
    {
        name: 'Gansu',
        value: 129
    },
    {
        name: 'Shanxi',
        value: 133
    },
    {
        name: 'Inner Mongolia',
        value: 75
    },
    {
        name: 'shaanxi',
        value: 245
    },
    {
        name: 'Jilin',
        value: 93
    },
    {
        name: 'Fujian',
        value: 296
    },
    {
        name: 'Guizhou',
        value: 146
    },
    {
        name: 'Guangdong',
        value: 1356
    },
    {
        name: 'Qinghai',
        value: 18
    },
    {
        name: 'Tibet',
        value: 1
    },
    {
        name: 'Sichuan',
        value: 539
    },
    {
        name: 'Ningxia',
        value: 75
    },
    {
        name: 'Hainan',
        value: 168
    },
    {
        name: 'Taiwan',
        value: 53
    },
    {
        name: 'Hong Kong',
        value: 137
    },
    {
        name: 'Macao',
        value: 10
    }
]
var myChart = echarts.init(document.getElementById('main1'));

function randomValue() {
    return Math.round(Math.random() * 1000);
}
option = {
    title: {
      
        subtext: 'The data was updated by 2020/3/13',
        left: "center",
        top:10,
        subtextStyle: {
            fontSize:14,
            color:"#333"
    },
},
    tooltip: {
        formatter: function (params, ticket, callback) {
            return params.seriesName + '<br />' + params.name + '：' + params.value +
                "people"
        } 
    },
    visualMap: {
        min: 0,
        max: 10000,
        left: 'left',
        top: 'bottom',
        text: ['high', 'low'], 
        inRange: {
            color: ['rgb(185, 197, 238)', `rgb(26, 149, 197)`, `rgb(24, 65, 202)`] 
        },
        show: true 
    },
    geo: {
        map: 'china',
        roam: true, 
        zoom: 1.23, 
        label: {
            normal: {
                show: true,
                fontSize: '10',
                color: 'rgba(0,0,0,0.7)'
            }
        },
        itemStyle: {
            normal: {
                borderColor: 'rgba(255, 255, 255, 0.7)'
            },
            emphasis: {
                areaColor: '#F3B329', 
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },
    series: [{
        name: 'Cumulative number of confirmed cases',
        type: 'map',
        geoIndex: 0,
        data: dataList
    }],
    nameMap: {
        '南海诸岛': 'South China Sea Islands',
        '北京': 'Beijing',
        '天津': 'Tianjin',
        '上海': "Shanghai",
        '重庆': "Chongqing",
        '河北': 'Hebei',
        '河南': 'Henan',
        '云南': "Yunnan",
        '辽宁': 'Liaoning',
        '黑龙江': 'Heilongjiang',
        '湖南': 'Hunan',
        '安徽': "Anhui",
        '山东': 'Shandong',
        '新疆': 'Xinjiang',
        '江苏': 'Jiangsu',
        '浙江': 'Zhejiang',
        '江西': 'Jiangxi',
        '湖北': 'Hubei',
        '广西': 'Guangxi',
        '甘肃': 'Gansu',
        '山西': 'Shanxi',
        '内蒙古': 'Inner Mongolia',
        '陕西': 'shaanxi',
        '吉林': 'Jilin',
        '福建': 'Fujian',
        "贵州": 'Guizhou',
        '广东': 'Guangdong',
        '青海': 'Qinghai',
        '西藏': "Tibet",
        '四川': 'Sichuan',
        '宁夏': 'Ningxia',
        '海南': 'Hainan',
        '台湾': 'Taiwan',
        '香港': 'Hong Kong',
        '澳门': 'Macao'

    }
};
myChart.setOption(option);
myChart.on('click', function (params) {
    alert(params.name);
});
