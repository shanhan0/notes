<template>
  <div>
       父组件
       <input type="text" v-model="msgipt">
       <Child  v-model="msgipt"></Child>
       <!-- <Child v-model="msgipt"></Child> -->
       <!-- v-model做了两件事：
       1. 自己绑定了自定义事件input
       2.有一个value属性，可以被子组件的props接受
       -->
       <button @click="flag=true">显示弹框</button>
       <!-- <Dialogs v-if="flag" v-model="flag"></Dialogs> -->
        <Dialogs v-if="flag" :flag.sync="flag"></Dialogs>

      
  </div>
</template>

<script>
export default {
  data () {
    return {
      msgipt: '我是信息啊',
      flag: ''
    }
  },
  components: {
    Child: {
      props: ['value'],
      //  必须写成value
      //  value是v-model自带的
      template: `
         <div>我是子组件{{value}}
         <button @click='changeVal'>修改</button>
         </div>
         `,
      methods: {
        changeVal () {
          // input是v-model中自带的自定义事件
          this.$emit('input', '改改吧')
        }
      }
    },
    Dialogs: {
      props: ['flag'],
      template: `
           <div>
             <h3>我是弹框</h3>
              <div>
               <button @click="closeDia">取消</button>
               <button>确定</button>
              </div>
          </div>
        `,
      methods: {
        closeDia () {
        //   this.$emit('input', false)
          this.$emit('update:flag', false)
        }
      }
    }
  }
}
</script>

<style>

</style>
