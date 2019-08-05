<template>
 <div>
    <button
        v-for="(tab,index) in tabs"
        :key="tab"
        @click="tabBtn(tab,index)"
        :class="index===i?'active':null"
        >{{tab}}</button>
        
      <keep-alive>
        <component :is="currentTab"></component>        
     </keep-alive>
 </div>
</template>
<script>
 import A from "../components/A";
 import B from "../components/B";
    
export default {
    name: "Tab",
    data() {
        return {
            currentTab: "A",
            tabs: ['A','B'],
            i:0
        }
    },
    methods: {
        tabBtn (tab,index) {
           this.currentTab = tab
           this.i = index
        }
    },
    components: {
        A,
        B
    }
}
</script>
<style>
button{
    width: 100px;
}
.active{
    background:skyblue;
}
</style>
