<template lang="pug">
  b-row.justify-content-center.showcase-form-component
    b-col.showcase-form-component__el(cols="12" lg="3" sm="4" md="4")
      select.showcase-form-component__el-select(@change="$emit('onChangeSubject', $event)")
        option Все предметы
        option(v-for="item in subjectList") {{ item }}
    b-col.showcase-form-component__el(cols="12" lg="3" sm="4" md="4")
      select.showcase-form-component__el-select(@change="$emit('onChangeGenre', $event)")
        option Все жанры
        option(v-for="item in genreList") {{ item }}
    b-col.showcase-form-component__el(cols="12" lg="3" sm="4" md="4")
      select.showcase-form-component__el-select(@change="$emit('onChangeGrade', $event)")
        option Все классы
        option(v-for="item in gradeList") {{ item }}
    b-col.showcase-form-component__el.search-wrapper(cols="12" lg="3" md="12")
      input.showcase-form-component__el-input(placeholder="Поиск" v-model="value" v-on:keyup.enter="$emit('changeSearch', value)")
      button.showcase-form-component__el-button(v-on:click="$emit('changeSearch', value)")
        img(src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png" alt="submit")
    b-col
      no-ssr
        toggle-button( color='#82C7EB', :labels="{checked: 'Рубли', unchecked: 'Бонусы'}" :font-size="15" :width="90" v-model="priceType" @change="$emit('changePriceType')")
</template>

<script>
	export default {
		name: 'showcase-form',
    props: {
      priceType: {
        type: Boolean,
        default: false
      },
      subjectList: {
        type: Array,
        default (){
          return []
        }
      },
      genreList : {
        type: Array,
        default (){
          return []
        }
      },
      gradeList : {
        type: Array,
        default (){
          return []
        }
      },
      searchInput : {
        type: String,
        default: ''
      }
    },
    computed: {
		  value: {
		    get(){
		      return this.searchInput
        },
        set(val){
          this.$emit('update:searchInput', val)
        }
      }
    }
	};
</script>

<style lang="sass">
  .showcase-form-component__el
    padding: 0 15px 15px
    &:first-child
      margin-left: 0
    &:last-child
      margin-right: 0
    &-select
      background: transparent
      height: 32px
      padding: 0 10px
      font-size: 15px
      line-height: 2
      border: 1px solid black
      border-radius: 5px
      outline: none
      width: 100%
      &:active
        border: 1px solid #129fea
      &:first-child
        margin-left: 0
      &:last-child
        margin-right: 0
    &-input
      font-size: 15px
      padding: 0 10px
      width: 100%
      border: 1px solid black
      border-radius: 5px
      outline: none
      height: 32px
      &:focus
        border: 1px solid #129fea
    &-button
      background: white
      border: none
      img
        width: 30px

  .search-wrapper
    display: flex
    align-items: center

</style>
