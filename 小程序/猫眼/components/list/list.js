// components/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   item:{
     type:Object
   }
  },
 

  /**
   * 组件的初始数据
   */
  data: {
   id:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleBtn: function (e) {//点击按钮
     this.setData({
       id: e.target.dataset.id
     })
      this.triggerEvent("myEvent", { id: this.data.id})
  
        // wx.navigateTo({
        //   url: "/pages/test6/test6?id="+this.data.id
        // })
      }
  }
})
