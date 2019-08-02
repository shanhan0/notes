// pages/test6/test6.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    txt:"",
    arr:[],
    newArr:[]
  },
  search:function(e){
    const that = this;
    this.setData({
      txt: e.detail.value
    })
    this.data.arr.map((item) => {
      if (item.nm.indexOf(that.data.txt) >= 0) {
        that.data.newArr.push(item)
      }
    })
    this.setData({
      newArr: this.data.newArr
    })
    console.log(this.data.newArr)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   let arr=JSON.parse(options.arr)
   this.setData({
     arr:arr

   })
   
  
  },
  getId:function(){

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