var myChart1 = echarts.init(document.getElementById('main2'));
option1 = {
    title: {

        subtext: 'The data was updated by 2020/3/13',
        left: "center",
        top: 10,
        subtextStyle: {
            fontSize: 14,
            color: "#333"
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            var value = (params.value + '').split('.');
            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') + "people"
            return params.seriesName + '<br/>' + params.name + ' : ' + value;
        }
    },

    visualMap: {
        min: 0,
        max: 10000,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        color: ['orangered', 'yellow', 'lightskyblue'],

    },
    series: [{
        name: 'Total number of confirmed cases',
        type: 'map',
        mapType: 'world',
        roam: true,
        zoom: 1.45, 
        label: {
            normal: {
                show: true,
                fontSize: '7',
                color: 'rgba(0,0,0,0.5)'
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
        },
        data: [{
                name: 'Afghanistan', //阿富汗
                value: 10
            },
            {
                name: 'Angola', //安哥拉
                value: 0
            },
            {
                name: 'Albania',
                value: 0
            },
            {
                name: 'United Arab Emirates', //阿拉伯联合酋长国
                value: 0
            },
            {
                name: 'Argentina', //阿根廷
                value: 34
            },
            {
                name: 'Armenia', //亚美尼亚
                value: 13
            },
            {
                name: 'French Southern and Antarctic Lands', //法属南部领地
                value: 0
            },
            {
                name: 'Australia', //澳大利亚
                value: 236
            },
            {
                name: 'Austria', //奥地利
                value: 504
            },
            {
                name: 'Azerbaijan', //阿塞拜疆
                value: 19
            },
            {
                name: 'Burundi', //布隆迪
                value: 0
            },
            {
                name: 'Belgium', //比利时
                value: 689
            },
            {
                name: 'Benin', //贝宁
                value: 0
            },
            {
                name: 'Burkina Faso', //布基纳法索
                value: 0
            },
            {
                name: 'Bangladesh', //孟加拉国
                value: 0
            },
            {
                name: 'Bulgaria', //保加利亚
                value: 30
            },
            {
                name: 'The Bahamas', //巴哈马
                value: 0
            },
            {
                name: 'Bosnia and Herzegovina', //波斯尼亚和黑塞哥维那
                value: 0
            },
            {
                name: 'Belarus', //白俄罗斯
                value: 47
            },
            {
                name: 'Belize', //伯利兹
                value: 0
            },
            {
                name: 'Bermuda', //百慕大群岛
                value: 0
            },
            {
                name: 'Bolivia', //玻利维亚
                value: 0
            },
            {
                name: 'Brazil', //巴西
                value: 98
            },
            {
                name: 'Brunei', //文莱
                value: 40
            },
            {
                name: 'Bhutan', //不丹
                value: 0
            },
            {
                name: 'Botswana', //博茨瓦纳
                value: 0
            },
            {
                name: 'Central African Republic', //中非共和国
                value: 0
            },
            {
                name: 'Canada', //加拿大
                value: 198
            },
            {
                name: 'Switzerland', //瑞士
                value: 1139
            },
            {
                name: 'Chile', //智利
                value: 43
            },
            {
                name: 'China', //中国
                value: 81029
            },
            {
                name: 'Ivory Coast', //象牙海岸
                value: 0
            },
            {
                name: 'Cameroon', //喀麦隆
                value: 0
            },
            {
                name: 'Democratic Republic of the Congo', //民主刚果
                value: 0
            },
            {
                name: 'Republic of the Congo', //刚果共和国
                value: 0
            },
            {
                name: 'Colombia', //哥伦比亚
                value: 13
            },
            {
                name: 'Costa Rica', //哥斯达黎加
                value: 0
            },
            {
                name: 'Cuba', //古巴
                value: 0
            },
            {
                name: 'Northern Cyprus', //北塞浦路斯
                value: 0
            },
            {
                name: 'Cyprus', //塞浦路斯
                value: 21
            },
            {
                name: 'Czech Republic', //捷克共和国
                value: 0
            },
            {
                name: 'Germany', //德国
                value: 3675
            },
            {
                name: 'Djibouti', //吉布提
                value: 0
            },
            {
                name: 'Denmark', //丹麦
                value: 801
            },
            {
                name: 'Dominican Republic', //多米尼加共和国
                value: 0
            },
            {
                name: 'Algeria', //阿尔及利亚
                value: 37
            },
            {
                name: 'Ecuador', //厄瓜多尔
                value: 0
            },
            {
                name: 'Egypt', //埃及
                value: 93
            },
            {
                name: 'Eritrea', //厄立特里亚
                value: 0
            },
            {
                name: 'Spain', //西班牙
                value: 5232
            },
            {
                name: 'Estonia', //爱沙尼亚
                value: 0
            },
            {
                name: 'Ethiopia', //埃塞俄比亚
                value: 0
            },
            {
                name: 'Finland', //芬兰
                value: 155
            },
            {
                name: 'Fiji', //斐济
                value: 0
            },
            {
                name: 'Falkland Islands', //福克兰群岛
                value: 0
            },
            {
                name: 'France', //法国
                value: 3667
            },
            {
                name: 'Gabon', //加蓬
                value: 0
            },
            {
                name: 'United Kingdom', //大不列颠联合王国
                value: 0
            },
            {
                name: 'Georgia', //佐治亚
                value: 0
            },
            {
                name: 'Ghana', //加纳
                value: 0
            },
            {
                name: 'Guinea', //几内亚
                value: 0
            },
            {
                name: 'Gambia', //冈比亚
                value: 0
            },
            {
                name: 'Guinea Bissau', //几内亚比绍
                value: 0
            },
            {
                name: 'Equatorial Guinea', //赤道几内亚
                value: 0
            },
            {
                name: 'Greece', //希腊
                value: 190
            },
            {
                name: 'Greenland', //格陵兰岛
                value: 0
            },
            {
                name: 'Guatemala', //危地马拉
                value: 0
            },
            {
                name: 'French Guiana', //法属圭亚那
                value: 0
            },
            {
                name: 'Guyana', //圭亚那
                value: 0
            },
            {
                name: 'Honduras', //洪都拉斯
                value: 0
            },
            {
                name: 'Croatia', //克罗地亚
                value: 37
            },
            {
                name: 'Haiti', //海地
                value: 0
            },
            {
                name: 'Hungary', //匈牙利
                value: 0
            },
            {
                name: 'Indonesia', //印度尼西亚
                value: 96
            },
            {
                name: 'India', //印度
                value: 84
            },
            {
                name: 'Ireland', //爱尔兰
                value: 90
            },
            {
                name: 'Iran', //伊朗
                value: 11364
            },
            {
                name: 'Iraq', //伊拉克
                value: 93
            },
            {
                name: 'Iceland', //冰岛
                value: 128
            },
            {
                name: 'Israel', //以色列
                value: 154
            },
            {
                name: 'Italy', //意大利
                value: 17660
            },
            {
                name: 'Jamaica', //牙买加
                value: 0
            },
            {
                name: 'Jordan', //乔丹
                value: 0
            },
            {
                name: 'Japan', //日本
                value: 746
            },
            {
                name: 'Kazakhstan', //哈萨克斯坦
                value: 0
            },
            {
                name: 'Kenya', //肯尼亚
                value: 0
            },
            {
                name: 'Kyrgyzstan', //吉尔吉斯斯坦
                value: 0
            },
            {
                name: 'Cambodia', //柬埔寨
                value: 0
            },
            {
                name: 'South Korea', //韩国
                value: 8086
            },
            {
                name: 'Kosovo', //科索沃
                value: 0
            },
            {
                name: 'Kuwait', //科威特
                value: 100
            },
            {
                name: 'Laos', //老挝
                value: 0
            },
            {
                name: 'Lebanon', //黎巴嫩
                value: 93
            },
            {
                name: 'Liberia', //利比里亚
                value: 0
            },
            {
                name: 'Libya', //利比亚
                value: 0
            },
            {
                name: 'Sri Lanka', //斯里兰卡
                value: 0
            },
            {
                name: 'Lesotho', //莱索托
                value: 0
            },
            {
                name: 'Lithuania', //立陶宛
                value: 0
            },
            {
                name: 'Luxembourg', //卢森堡
                value: 0
            },
            {
                name: 'Latvia', //拉脱维亚
                value: 18
            },
            {
                name: 'Morocco', //摩洛哥
                value: 0
            },
            {
                name: 'Moldova', //摩尔多瓦
                value: 0
            },
            {
                name: 'Madagascar', //马达加斯加
                value: 0
            },
            {
                name: 'Mexico', //墨西哥
                value: 26
            },
            {
                name: 'Macedonia', //马其顿
                value: 0
            },
            {
                name: 'Mali', //马里
                value: 0
            },
            {
                name: 'Myanmar', //缅甸
                value: 0
            },
            {
                name: 'Montenegro', //黑山
                value: 0
            },
            {
                name: 'Mongolia', //蒙古
                value: 0
            },
            {
                name: 'Mozambique', //莫桑比克
                value: 0
            },
            {
                name: 'Mauritania', //毛里塔尼亚
                value: 0
            },
            {
                name: 'Malawi', //马拉维
                value: 0
            },
            {
                name: 'Malaysia', //马来西亚
                value: 238
            },
            {
                name: 'Namibia', //纳米比亚
                value: 0
            },
            {
                name: 'New Caledonia', //新喀里多尼亚
                value: 0
            },
            {
                name: 'Niger', //尼日尔
                value: 0
            },
            {
                name: 'Nigeria', //尼日利亚
                value: 0
            },
            {
                name: 'Nicaragua', //尼加拉瓜
                value: 0
            },
            {
                name: 'Netherlands', //荷兰
                value: 804
            },
            {
                name: 'Norway', //挪威
                value: 996
            },
            {
                name: 'Nepal', //尼泊尔
                value: 0
            },
            {
                name: 'New Zealand', //新西兰
                value: 0
            },
            {
                name: 'Oman', //阿曼
                value: 20
            },
            {
                name: 'Pakistan', //巴基斯坦
                value: 28
            },
            {
                name: 'Panama', //巴拿马
                value: 27
            },
            {
                name: 'Peru', //秘鲁
                value: 28
            },
            {
                name: 'Philippines', //菲律宾
                value: 98
            },
            {
                name: 'Papua New Guinea', //巴布亚新几内亚
                value: 0
            },
            {
                name: 'Poland', //波兰
                value: 68
            },
            {
                name: 'Puerto Rico', //波多黎各
                value: 0
            },
            {
                name: 'North Korea', //朝鲜
                value: 0
            },
            {
                name: 'Portugal', //葡萄牙
                value: 112
            },
            {
                name: 'Paraguay', //巴拉圭
                value: 0
            },
            {
                name: 'Qatar', //卡塔尔
                value: 338
            },
            {
                name: 'Romania', //罗马尼亚
                value: 70
            },
            {
                name: 'Russia', //俄罗斯
                value: 0
            },
            {
                name: 'Rwanda', //卢旺达
                value: 0
            },
            {
                name: 'Western Sahara', //西撒哈拉
                value: 0
            },
            {
                name: 'Saudi Arabia', //沙特阿拉伯
                value: 86
            },
            {
                name: 'Sudan', //苏丹
                value: 0
            },
            {
                name: 'South Sudan', //南苏丹
                value: 0
            },
            {
                name: 'Senegal', //塞内加尔
                value: 21
            },
            {
                name: 'Solomon Islands', //所罗门群岛
                value: 0
            },
            {
                name: 'Sierra Leone', ///塞拉利昂
                value: 0
            },
            {
                name: 'El Salvador', //多米尼加共和国
                value: 0
            },
            {
                name: 'Somaliland', //索马里
                value: 0
            },
            {
                name: 'Somalia', //索马利亚
                value: 0
            },
            {
                name: 'Republic of Serbia', //塞尔维亚共和国
                value: 41
            },
            {
                name: 'Suriname', //苏里南
                value: 0
            },
            {
                name: 'Slovakia', //斯洛伐克
                value: 32
            },
            {
                name: 'Slovenia',
                value: 0
            },
            {
                name: 'Sweden', //瑞典
                value: 814
            },
            {
                name: 'Swaziland', //斯威士兰
                value: 0
            },
            {
                name: 'Syria', //叙利亚
                value: 0
            },
            {
                name: 'Chad', //乍得
                value: 0
            },
            {
                name: 'Togo', //多哥
                value: 0
            },
            {
                name: 'Thailand', //泰国
                value: 82
            },
            {
                name: 'Tajikistan', //塔吉克斯坦
                value: 0
            },
            {
                name: 'Turkmenistan', //土库曼斯坦
                value: 0
            },
            {
                name: 'East Timor', //东帝汶
                value: 0
            },
            {
                name: 'Trinidad and Tobago', //特立尼达和多巴哥
                value: 0
            },
            {
                name: 'Tunisia', //突尼斯
                value: 13
            },
            {
                name: 'Turkey', //土耳其
                value: 0
            },
            {
                name: 'Tanzania', //坦桑尼亚联合共和国
                value: 0
            },
            {
                name: 'Uganda', //乌干达
                value: 0
            },
            {
                name: 'Ukraine', //乌克兰
                value: 0
            },
            {
                name: 'Uruguay', //乌拉圭
                value: 0
            },
            {
                name: 'United States', //美利坚合众国
                value: 2236
            },
            {
                name: 'Uzbekistan', //乌兹别克斯坦
                value: 0
            },
            {
                name: 'Venezuela', //委内瑞拉
                value: 0
            },
            {
                name: 'Vietnam', //越南
                value: 53
            },
            {
                name: 'Vanuatu', //瓦努阿图
                value: 0
            },
            {
                name: 'West Bank', //西岸
                value: 0
            },
            {
                name: 'Yemen', //也门
                value: 0
            },
            {
                name: 'South Africa', //南非
                value: 24
            },
            {
                name: 'Zambia', //赞比亚
                value: 0
            },
            {
                name: 'Zimbabwe', //津巴布韦
                value: 0
            },
            {
                name: 'Korea',
                value: 0
            },
            {
                name: 'Singapore Rep.', // 新加坡
                value: 200
            },
            {
                name: 'Central African Rep.', //中非
                value: 0
            },
            {
                name: 'Lao PDR', //老挝
                value: 0
            },
            {
                name: 'Dem. Rep. Korea',
                value: 0
            },
            {
                name: 'Dem. Rep. Congo',
                value: 0
            },
            {
                name: 'Congo',
                value: 0
            },
            {
                name: 'S. Sudan',
                value: 0
            },
            {
                name: 'W. Sahara',
                value: 0
            },
            {
                name: `Côte d'Ivoire`,
                value: 0
            },
            {
                name: `Serbia`,
                value: 0
            },
            {
                name: `Bosnia and Herz.`,
                value: 0
            },
            {
                name: `Czech Rep`,
                value: 141
            },
            {
                name: `United Kingdom`,
                value: 798
            },


        ]
    }]
};
myChart1.setOption(option1);