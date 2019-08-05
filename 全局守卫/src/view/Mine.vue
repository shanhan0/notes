<template>
    <div>我的
        <h4 style="color:yellow">你好，明天！！！微笑对待</h4>
        <router-link to='/mine/scale'>哈哈</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import {toggle} from '../components/mixins/toggle.js'
export default {
    data () {
        return {
            age: 18
        }
    },
    mixins: [toggle],
    mounted () {
        console.log(this.toggleShow())
    },
    methods: {
         toggleShow () {
             console.log(33333333)
         }
    }
}
</script>

<style>

</style>
