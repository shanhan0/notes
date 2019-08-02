// components/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   item:{
      type:Array
   }
  },

  /**
   * 组件的初始数据
   */
  data: {
      flag:false
  }, 

  /**
   * 组件的方法列表
   */
  methods: {
    handleClose(){
      this.setData({
        flag:false
      })
      // this.triggerEvent("myEvent", { id: this.data.id })
      this.triggerEvent("myflag",{flag:this.data.flag})
    }
  }
})
