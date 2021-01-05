;

const MOCK_DATA = {
    admissionScores: {
        CBA: [522, 524, 521, 517, 521, 523, 542],
        SAM: [579, 587, 574, 578, 576, 586, 589],
        UFL: [540, 533, 532, 538, 539, 542, 545],
        CAM: [539, 537, 539, 538, 534, 532, 532],
        IEES: [536, 533, 532, 537, 536, 534, 538],
        DCC: [539, 531, 530, 526, 524, 523, 526]
    },
    admissionNumber: {
        science: [3115, 3225, 3098],
        liberalArt: [895, 845, 907],
    },
    admissionScoresForetell: [
        { value: 522, name: '经济与管理学院' },
        { value: 579, name: '艺术与传媒学院' },
        { value: 540, name: '外国语学院' },
        { value: 539, name: '机械工程学院' },
        { value: 536, name: '电气与电子工程学院' },
        { value: 539, name: '数字与计算机学院' }
    ]
}

const locationCenter = [114.221935, 30.652806];

function createWindow(title) {
    return new AMap.InfoWindow({
        anchor: 'top-left',
        content: title,
    })
}

function createMarker(location, title, content) {
    return new AMap.Marker({
        position: location, //位置
        title: title
    }).on('click', function () { createWindow(content).open(map, location) })
}

const map = new AMap.Map('map', {
    zoom: 17,//级别
    center: locationCenter,//中心点坐标
    viewMode: '3D'//使用3D视图
});

map.add(createMarker([114.220684, 30.650768], '经济与管理学院', '经济与管理学院'))
map.add(createMarker([114.223755, 30.652608], '艺术与传媒学院', '艺术与传媒学院'))
map.add(createMarker([114.220328, 30.650819], '外国语学院', '外国语学院'))
map.add(createMarker([114.22286, 30.655526], '机械工程学院', '机械工程学院'))
map.add(createMarker([114.224302, 30.651006], '电气与电子工程学院', '电气与电子工程学院'))
map.add(createMarker([114.224515, 30.651766], '数字与计算机学院', '数字与计算机学院'))


// console.log($('#specialtyScore')[0]);
const specialtyScore = echarts.init($('#specialtyScore')[0]);
const specialtyPeople = echarts.init($('#specialtyPeople')[0]);
const specialtyScoreR = echarts.init($('#specialtyScoreR')[0]);
const specialtyScoreForetell = echarts.init($('#specialtyScoreForetell')[0]);

specialtyScore.setOption({
    title: {
        text: '历年各学院分数线',
        subtext: '数据来自学校官网'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        top: '10%',
        textStyle: {
            color: '#fff'
        },
        data: ['经济与管理学院', '艺术与传媒学院', '外国语学院', '机械工程学院', '电子与电气化学院', '数字与计算机学院']
    },
    grid: {
        left: '3%',
        right: '4%',
        top: '30%',
        height: '70%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021']
    },
    yAxis: {
        type: 'value',
        min: 500
    },
    series: [
        {
            name: '经济与管理学院',
            type: 'line',
            stack: '经济与管理学院',
            data: MOCK_DATA.admissionScores.CBA
        },
        {
            name: '艺术与传媒学院',
            type: 'line',
            stack: '艺术与传媒学院',
            data: MOCK_DATA.admissionScores.SAM
        },
        {
            name: '外国语学院',
            type: 'line',
            stack: '外国语学院',
            data: MOCK_DATA.admissionScores.UFL
        },
        {
            name: '机械工程学院',
            type: 'line',
            stack: '机械工程学院',
            data: MOCK_DATA.admissionScores.CAM
        },
        {
            name: '电子与电气化学院',
            type: 'line',
            stack: '电子与电气化学院',
            data: MOCK_DATA.admissionScores.IEES
        },
        {
            name: '数字与计算机学院',
            type: 'line',
            stack: '数字与计算机学院',
            data: MOCK_DATA.admissionScores.DCC
        }
    ]
})

specialtyPeople.setOption({
    title: {
        text: '分类录取人数',
        subtext: '数据来自学校官网'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        textStyle: {
            color: '#fff'
        },
        data: ['文(艺术)科', '理科']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    xAxis: {
        type: 'category',
        data: ['2021', '2020', '2019']
    },
    series: [
        {
            name: '文(艺术)科',
            type: 'bar',
            data: MOCK_DATA.admissionNumber.liberalArt
        },
        {
            name: '理科',
            type: 'bar',
            data: MOCK_DATA.admissionNumber.science
        }
    ]
})

specialtyScoreR.setOption({
    angleAxis: {
    },
    radiusAxis: {
        type: 'category',
        data: ['2021', '2020', '2019'],
        z: 10
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: MOCK_DATA.admissionNumber.liberalArt,
        coordinateSystem: 'polar',
        name: '文(艺术)科',
        stack: '文(艺术)科'
    }, {
        type: 'bar',
        data: MOCK_DATA.admissionNumber.science,
        coordinateSystem: 'polar',
        name: '理科',
        stack: '理科'
    }],
    legend: {
        textStyle: {
            color: '#fff'
        },
        show: true,
        data: ['文(艺术)科', '理科']
    }
})

specialtyScoreForetell.setOption({
    title: {
        text: '学院分数线预测',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        textStyle: {
            color: '#fff'
        },
        data: ['经济与管理学院', '艺术与传媒学院', '外国语学院', '机械工程学院', '电子与电气化学院', '数字与计算机学院']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: MOCK_DATA.admissionScoresForetell,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
})