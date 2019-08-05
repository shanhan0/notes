<template>
  <div>我是首页
    <router-link to='shop'>购物车</router-link>
    <router-link to='modles'>v-modle</router-link>
    <router-view></router-view>
      <button @click='handle'>点击</button>
      <div ref='datas'>{{namea.n}}</div>
  </div>
</template>
<script>
export default {
  // 函数名和（）之间有空格
  // 参数括号与函数体花括号之间必须有空格
  // :后面有空格
  // 不能有多余的空行
  data () {
    return {
      str: '字符串',
      obj:{
        'name':"张飒飒"
      }
    }
  },
  methods:{
     handle(){
          this.obj.name='琴琴'
          console.log(this.$refs.datas.innerHTML)

       //  this.$nextTick(()=>{
          //nextTick是在我们的数据更改完之后，立马更新我们的dom
          //解决的问题
            //利用ref来获取dom节点时，如果不用nextTick,我们的dom是在获取的时候，
            //获取的是上一次的dom,也就是数据是上一次的。
            //这时，可以通过nextTick来解决，把dom的操作放在nextTick中

        //  })
        }
  }
}
</script>
<style>
</style>
