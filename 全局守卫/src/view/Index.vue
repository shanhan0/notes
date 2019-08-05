<template>
<div>
    <div v-pre>{{namea}}</div>
    <div v-cloak>
        {{a}}+{{b}}
    </div>

</div>
</template>

<script>
// import {mixin} from '../components/mixins/toggle.js'
export default {
    name: 'Index',
    data(){
        return {
            a:10,
            b:20
            // namea:'111'
        }
    }
    // mixins: [mixin],
    // mounted () {
    //     this.toggleShow()
    // }
}
</script>

<style>
[v-cloak] {
    display: none;
  }
</style>
