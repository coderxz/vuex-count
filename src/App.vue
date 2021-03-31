<template>
  <div>
   <h2>
     当前计数:{{count}},它是一个{{evenOrAdd}}
   </h2>
    <select ref="select" v-model="value">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="ifOddIncrement">ifAdd</button>
    <button @click="asyncIncrement">asyncAdd</button>
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters,mapMutations} from 'vuex'
export default {
  mounted() {
    console.log(this.$store)
  },
  data() {
    return {
      value:1
    }
  },
  methods:{
    ...mapActions(['ifOddIncrement','asyncIncrement']),
    ...mapMutations({
      increment:'INCREMENT',
      decrement:'DECREMENT'
    })
  },
  computed:{
    ...mapState(['count']),
    ...mapGetters(['evenOrAdd'])
  }
}
</script>

<style scoped>
</style>