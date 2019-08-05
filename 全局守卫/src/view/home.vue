<template>
  <div>
         <h2>{{$route.name}}</h2>
         <!-- 可以显示当前组件的name -->
        <ol>
          <li><router-link to="/indexa">首页</router-link></li>
          <li><router-link to="/keeplive">设置</router-link></li>
          <li><router-link to="/mine">我的</router-link></li>
        </ol>
        <router-link to="/shop">购物车页面</router-link> 
        <router-link to="/keeplive">keep-alive</router-link>
        <!-- <router-link to="/showmoney/2">付款页面</router-link>  -->
        <span @click="()=>{$router.push('/showmoney/2')}">付款页面</span>

        <button @click="showAlert">显示弹框</button> 
        <!-- <router-view name="Showmoney"></router-view> -->
        <section>
          <keep-alive include="Tab">
           <router-view></router-view>   
          </keep-alive>       
        </section>
  </div>
</template>
<script>
import '../utils/dialog.css'
export default {
  data () {
    return {
      // flag: false
    }
  },
    methods: {
      showAlert() {
            this.$showDialog({
              title: "我是确认弹框",
              content: `你确认去删除这一项吗？`,
              type: [{
                  type: '取消',
                  cancelFun: (msg)=>{
                    console.log(msg)
                  }
              },
              {
                type: '确认',
                sureFun: (msg)=>{
                    console.log(msg)
                }
              }]
            })
       }
    },
    components: {
      // Alert
    },
    mounted() {
      console.log(this)
    }
}
</script>

<style scoped>
*{
   padding:0;
  margin:0;
}
html,body{
  width: 100%;
  height: 100%;
}
.on{
  color:blue;
}
ol{
  display: flex;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background:#ccc;
  margin-top:30px;
}
ol li{
  list-style: none;
  width: 90px;
  text-align: center;
}
ol li a{
  color:#f00;
  text-decoration:none;
}
h2{
  text-align: center;
}
section{
  margin-top:20px;
}
 /* a.router-link-active{
  background:#f00;
} */
.active{
  background:blue;
}
</style>
