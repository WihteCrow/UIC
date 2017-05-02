/**
 * @fileOverview
 * @author crow
 * @time 2017/5/2
 */

var graphCharts = echarts.init(document.getElementById('graphCharts'));
var pieCharts = echarts.init(document.getElementById('pieCharts'));

var option_01 = {
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        show: false,
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        show: true,
        containLabel: true,
        borderColor: '#dcdcdc'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2017-04-01', '2017-04-02', '2017-04-03', '2017-04-04', '2017-04-05', '2017-04-06', '2017-04-07'],
        axisLine: {
            lineStyle: {
                color: '#dcdcdc'
            }
        },
        axisTick: {
            length: 0
        },
        axisLabel: {
            textStyle: {
                color: '#787878'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#dcdcdc'
            }
        },
        axisTick: {
            length: 0
        },
        axisLabel: {
            textStyle: {
                color: '#787878'
            }
        }
    },
    series: [{
        name: '邮件营销',
        type: 'line',
        smooth: true,
        symbolSize: 1,
        lineStyle: {
            normal: {
                color: '#95B7DB'
            }
        },
        areaStyle: {
            normal: {
                color: '#95B7DB'
            }
        },
        data: [120, 132, 40, 134, 90, 230, 210]
    }, {
        name: '联盟广告',
        type: 'line',
        smooth: true,
        symbolSize: 1,
        lineStyle: {
            normal: {
                color: '#78A3D3'
            }
        },
        areaStyle: {
            normal: {
                color: '#78A3D3'
            }
        },
        data: [220, 40, 191, 234, 500, 100, 20]
    }]
};

var option_02 = {
    title: {
        text: '标题'
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    formatter: '{b}: {c}'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '18'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 6,
                    borderColor: '#ffffff',
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
};

graphCharts.setOption(option_01);
pieCharts.setOption(option_02);