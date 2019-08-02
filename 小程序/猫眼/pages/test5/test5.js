// pages/test5/test5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   flagTab:'0',
   dataList:[],
   data:[],
   num:4,
   pos:"北京",
   imgUrls: ["http://p0.meituan.net/movie/0fd9d06392d1b275705c7300317e924675865.jpg",
      "http://p1.meituan.net/movie/3b1d4cc31f42b8d6e47f25fe790b682485449.jpg",
      "http://p0.meituan.net/movie/fb1cd644e9128ea5963b48d4ba04ac5257379.jpg",
      "http://p1.meituan.net/movie/06b0ed71631aa2f664bf019984136ef777358.jpg",
      "http://p0.meituan.net/movie/e805f225295e5f3e6fb94cca9c79797e91473.jpg",
      "http://p1.meituan.net/movie/cbfd9de709d7e6ff90c9fdd85e87a9c577003.jpg"
    ],
    flag:false,
    idList:[]//放详情页数据
  },
  handleClick:function(e){//点击tab切换
   
  const that=this;
  this.setData({
    flagTab: e.currentTarget.dataset.index
  })
    if (e.currentTarget.dataset.index==='0'){
    wx.request({
      url:'http://m.maoyan.com/ajax/comingList?ci=1&token=&limit=10',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
           res.data.coming.map((item) => {
            item.img = item.img.replace('w.h', '128.180')
          })
         that.setData({
           dataList:res.data.coming,
           data: res.data.coming.slice(0,4)
         })
         console.log(that.data.data)
      }
      

    })
  }

  },

   scrolltolower:function(){//上拉加载
    wx.showLoading()
    let count = this.data.num;
    count++;
    this.setData({
      num:count
    })
    let start=this.data.num;//开始下标
    let end=start+4;//结束下标
    let data=this.data.data;
  if(this.data.dataList.slice(start,end).length){//还有内容
    this.data.dataList.slice(start, end).map((item)=>{
       data.push(item)
       //数据追加
    })
     this.setData({
       data: data
     })
  }
  else{
    wx.hideLoading()
  }
     
   },
  getId:function(e){//接受父组件传来的id
   let idData= this.data.dataList.filter((item,i)=>{
     return item.id === e.detail.id
    })
    this.setData({
      idList: idData,
      flag:true
   
    })
    console.log(this.data.idList[0])
    
   
  },
  getFlag:function(e){
    this.setData({
      flag: e.detail.flag
    })
    console.log(e.detail.flag)
  },
  search:function(){//搜索
  let arr=JSON.stringify(this.data.data);
   wx.navigateTo({
     url: '/pages/test6/test6?arr='+arr
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      pos: options.cur
    })
   console.log(options.cur)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})