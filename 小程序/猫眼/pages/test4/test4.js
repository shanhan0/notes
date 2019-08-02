// pages/test4/test4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityList:[],
    hot:[],
    Arra:{},//{A"{}，B"{},C：{}}
    keys:[],
    contxt:"北京",
    toId:""
  },
  onMyEvent:function(e){
    this.setData({
      contxt: e.detail.val
    })
  },
  scrollTo(e) {
    console.log(e.target.dataset.txt)
   this.setData({
     toId: e.target.dataset.txt
     }, () => {
       console.log(this.data.toId)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let obj={}
    let newObj={}
    let cArr=[]
    let key=[]
    wx.request({
      url:"http://m.maoyan.com/dianying/cities.json",
      method: 'get',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:(res)=>{
        this.setData({
          cityList: res.data.cts,
          hot:res.data.cts.slice(0, 10)
        })
        //主要是找到城市
        res.data.cts.map((item) => {
          let key = item.py.substring(0, 1).toLocaleUpperCase();
          console.log(key);//A,B,C,D,E
          if (obj[key]) {
            obj[key].push(item.nm)
          } else {
            obj[key] = [];
            obj[key].push(item.nm);
          }
          })
          // console.log(obj)
          let keys = Object.keys(obj).sort();
           keys.map((item) => {
            newObj[item] = obj[item]
          })
          key = Object.keys(newObj);

          this.setData({
           keys:key,
           Arra:newObj
          })
         console.log(this.data.Arra)
      
      
      } 
    })
   
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