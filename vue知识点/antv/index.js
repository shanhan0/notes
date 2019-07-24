//柱形图
var chart = new GM.Chart({
    id:'c1'
})
var data=[{
    'tem':10,
    'city':'toko'
},{
    'tem':4,
    'city':'mokey'
},{
    'tem':8,
    'city':'fight'
},{
    'tem':20,
    'city':'gun'
}]
chart.source(data)

chart.interval().position('city*tem').color('city')
chart.render()


//点状图
GM.Global.pixelRatio = 2;
var Util = GM.Util;
var data = [
  {"time": '2016-08-08 00:00:00',"tem": 10},
  {"time": '2016-08-08 00:10:00',"tem": 22},
  {"time": '2016-08-08 00:30:00',"tem": 20},
  {"time": '2016-08-09 00:35:00',"tem": 26},
  {"time": '2016-08-09 01:00:00',"tem": 20},
  {"time": '2016-08-09 01:20:00',"tem": 26},
  {"time": '2016-08-10 01:40:00',"tem": 28},
  {"time": '2016-08-10 02:00:00',"tem": 20},
  {"time": '2016-08-10 02:20:00',"tem": 28}
];
var chart = new GM.Chart({
  id: 'c2'
});
var defs = {
  time: {
    type: 'timeCat',
    mask: 'mm／dd',
    tickCount: 3
  },
  tem: {
    tickCount: 5,
    min: 0
  }
};
//配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
chart.axis('tem', {
  label: {
    fontSize: 14
  }
});

chart.source(data, defs);
chart.point().position('time*tem');
chart.render();



//折线图
GM.Global.pixelRatio = 2;
var Util = GM.Util;
var data = [
  {"time": '2016-08-08 00:00:00',"tem": 10},
  {"time": '2016-08-08 00:10:00',"tem": 22},
  {"time": '2016-08-08 00:30:00',"tem": 20},
  {"time": '2016-08-09 00:35:00',"tem": 26},
  {"time": '2016-08-09 01:00:00',"tem": 20},
  {"time": '2016-08-09 01:20:00',"tem": 26},
  {"time": '2016-08-10 01:40:00',"tem": 28},
  {"time": '2016-08-10 02:00:00',"tem": 20},
  {"time": '2016-08-10 02:20:00',"tem": 28}
];
var chart = new GM.Chart({
  id: 'c3'
});
var defs = {
  time: {
    type: 'timeCat',
    mask: 'mm／dd',
    tickCount: 3,
    range:[0,1]
  },
  tem: {
    tickCount: 5,
    min: 0  
  }
};
//配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
chart.axis('tem', {
  label: {
    fontSize: 14
  }
});
chart.axis('time', {
  label: {
    fontSize: 14
  }
});
chart.source(data, defs);
chart.line().position('time*tem');
chart.render();


//区域图
var Util = GM.Util;
// 双精度
GM.Global.pixelRatio = 2;   
var data = [
  {"time": '2016-08-08 00:00:00',"tem": 10,"city": "beijing"},
  {"time": '2016-08-08 00:10:00',"tem": 22,"city": "beijing"},
  {"time": '2016-08-08 00:30:00',"tem": 16,"city": "beijing"},
  {"time": '2016-08-09 00:35:00',"tem": 26,"city": "beijing"},
  {"time": '2016-08-09 01:00:00',"tem": 12,"city": "beijing"},
  {"time": '2016-08-09 01:20:00',"tem": 26,"city": "beijing"},
  {"time": '2016-08-10 01:40:00',"tem": 18,"city": "beijing"},
  {"time": '2016-08-10 02:00:00',"tem": 26,"city": "beijing"},
  {"time": '2016-08-10 02:20:00',"tem": 12,"city": "beijing"},
  {"time": '2016-08-08 00:00:00',"tem": 28,"city": "newYork"},
  {"time": '2016-08-08 00:10:00',"tem": 16,"city": "newYork"},
  {"time": '2016-08-08 00:30:00',"tem": 26,"city": "newYork"},
  {"time": '2016-08-09 00:35:00',"tem": 12,"city": "newYork"},
  {"time": '2016-08-09 01:00:00',"tem": 26,"city": "newYork"},
  {"time": '2016-08-09 01:20:00',"tem": 20,"city": "newYork"},
  {"time": '2016-08-10 01:40:00',"tem": 29,"city": "newYork"},
  {"time": '2016-08-10 02:00:00',"tem": 16,"city": "newYork"},
  {"time": '2016-08-10 02:20:00',"tem": 22,"city": "newYork"}
];
var chart = new GM.Chart({
  id: 'c1'
});
chart.source(data, {
  time: {
    type: 'timeCat',
    mask: 'yyyy-mm-dd',
    tickCount: 3,
    range:[0,1]
  },
  tem: {
    tickCount: 5,
    min: 0
  }
});
//配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
chart.axis('tem', {
  label: {
    fontSize: 14 
  }
});
//配置time刻度文字样式
var label = {
  fill: '#979797',
  font: '14px san-serif',
  offset: 6
};
chart.axis('time', {
  label: function(text, index, total) {
    var cfg = Util.mix({}, label);
    // 第一个点左对齐，最后一个点右对齐，其余居中，只有一个点时左对齐
    if (index === 0) {
      cfg.textAlign = 'start';
    }
    if (index > 0 && index === total - 1) {
      cfg.textAlign = 'end';
    }
    return cfg;
  }
});
chart.area().position('time*tem').color('city').shape('smooth').style({
  opacity: 0.6
});
chart.render();