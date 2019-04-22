<template lang="pug">
  b-container.showcase-component(fluid text-center)
    h1.showcase-component__title Витрина
    showcase-form(
      :items="items"
      :priceType="priceType"
      :subjectList='subjectList'
      :genreList='genreList'
      :gradeList='gradeList'
      :searchInput.sync='searchInput'
      @onChangeSubject="onChangeSubject"
      @onChangeGenre="onChangeGenre"
      @onChangeGrade="onChangeGrade"
      @changePriceType="changePriceType"
      @changeSearch="(val)=>addFilter('searchFilter', '', val)"
    )
    showcase-list(:items="items" :priceType="priceType")
</template>

<script>
  import ShowcaseForm from './showcase-form';
  import ShowcaseList from './showcase-list';

  export default {
    name: 'showcase',
    components: {
      ShowcaseList,
      ShowcaseForm
    },
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
    data() {
      return {
        currentSubject: 'Все предметы',
        currentGrade: 'Все жанры',
        currentGenre: 'Все классы',
        searchInput: '',
        filterList: []
      };
    },
    computed: {
      subjectList() {
        return [...new Set(this.$store.state.items.list.map(item => item.subject))];
      },
      genreList() {
        return [...new Set(this.$store.state.items.list.map(item => item.genre))];
      },
      gradeList() {
        let grades = [...new Set(this.$store.state.items.list.map(item => item.grade))];
        let splitGrades = grades.map(item => item.split(';'));
        let merged = [].concat.apply([], splitGrades);
        return [...new Set(merged.map(item => item).sort((a, b) => {
          return a - b;
        }))];
      }
    },
    methods: {
      addFilter(filter, defaultValue, value) {
        if (value !== defaultValue) {
          if (this.filterList.find(k => k.filterName === filter)) {
            this.filterList = this.filterList.map((item) => {
              if (item.filterName === filter) {
                return ({
                  filterName: filter,
                  value: value
                });
              } else return item;
            });
          } else {
            this.filterList.push({
              filterName: filter,
              value: value
            });
          }
        } else {
          this.filterList = this.filterList.filter((item) => {
            return item.filterName !== filter;
          });
        }
        this.filtrationCourses();

      },
      changePriceType() {
        this.$store.commit('items/changePriceType');
      },
      onChangeSubject(event) {
        console.log(event);
        this.currentSubject = event.target.value;
        this.addFilter('subject', 'Все предметы', this.currentSubject);
      },
      onChangeGrade(event) {
        this.currentGrade = event.target.value;
        this.addFilter('grade', 'Все классы', this.currentGrade);
      },
      onChangeGenre(event) {
        this.currentGenre = event.target.value;
        this.addFilter('genre', 'Все жанры', this.currentGenre);
      },
      filtrationCourses() {
        this.$store.commit('items/filtrationCourses', this.filterList);
      }
    }
  };
</script>

<style lang="sass">
  .showcase-component
    max-width: 1000px
    &__title
      font-size: 36px
      text-align: center
      margin: 30px 0
</style>
