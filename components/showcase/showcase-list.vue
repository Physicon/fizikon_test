<template lang="pug">
  b-row.justify-content-center.showcase-list-component
    showcase-item(v-for="item in items"  :item="item" :priceType="priceType" :key="item.courseId")
    .empty(v-if="isItems()")
      h1 Результаты поиска:
      span Курсы не найдены
</template>

<script>
  import ShowcaseItem from './showcase-item';

  export default {
    name: 'showcase-list',
    components: { ShowcaseItem },
    props: {
      items: {
        type: Array,
        default() {
          return [];
        }
      },
      priceType: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      isItems(){
        return !this.$store.state.items.loading && this.$store.state.items.sortList.length === 0
      }
    }
  };
</script>

<style lang="sass" scoped>
  .showcase-list-component
    margin-top: 28px
  .empty
    text-align: center

    h1
      font-size: 24px
      font-weight: 300
      color: #3c3c3b
</style>
