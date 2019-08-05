<template>
  <div>付款页{{name}}{{price}}</div>
</template>

<script>
export default {
    props: ['name','price'],
    mounted () {
      // console.log(this.$route.params.id)
    }
}
</script>

<style>

</style>
