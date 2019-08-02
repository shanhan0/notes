// components/citys/citys.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    key: String,
    data: Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
      handleClick(event){
        this.triggerEvent("myevent", {
          val: event.currentTarget.dataset.val
        })

        wx.navigateTo({
          url: '/pages/test5/test5?cur=' + event.currentTarget.dataset.val,
        })
      }
  }
})
