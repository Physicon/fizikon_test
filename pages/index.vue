<template lang="pug">
  showcase(:items="items" :priceType="priceType")
</template>

<script>
import Showcase from '../components/showcase/showcase';

export default {
  components: { Showcase },
  mounted(){
    this.fetchSomething()
  },
  computed: {
    items () {
      return this.$store.state.items.sortList
    },
    priceType () {
      return this.$store.state.items.priceType
    }
  },
  methods: {
    async fetchSomething() {
      const res = await this.$axios.$post('http://krapipl.imumk.ru:8082/api/mobilev1/update', {'data': ''})
      this.$store.commit('items/addCourses', res.items)
    }
  }

}
</script>

<style lang="sass">

</style>

