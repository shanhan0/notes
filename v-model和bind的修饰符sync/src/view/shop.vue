<template>
  <div>
    shop
    <button @click='giveVal'>提交</button>
    <div v-for="(item,i) in arr" :key="i">
      <span>{{item.name}}</span>
      <span>{{item.age}}</span>
    </div>
    {{num}}
    <button @click="addCount">点击</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      arr: [{
        age: 19,
        name: '琴琴',
        id: 0
      },
      {
        age: 20,
        name: '芳芳',
        id: 1
      },
      {
        age: 21,
        name: '强强',
        id: 2
      }]

    }
  },
  methods: {
    giveVal () {
      this.$store.commit('giveVal', this.arr)
    },
    addCount () {
      this.$store.commit('addCount')
    }
    // ,...mapMutations(['giveVal'])
    // ,...mapActions(['reduc'])
  },
  computed: {
    ...mapGetters({
      add: state => state.arr
    }),
    num () {
      return this.$store.state.Login.num
    },
    infos () {
      return this.$store.state.info
    }
  },
  mounted () {
    this.$axios.get('http://169.254.213.11:7001/user/user').then((res) => {
      console.log(res)
    })
  }
}
</script>

<style>

</style>
