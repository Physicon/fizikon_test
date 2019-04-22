<template lang="pug">
  .showcase-item-component
    .showcase-item-component__image
      img(:src="`https://www.imumk.ru/svc/coursecover/${item.courseId}`")
    .showcase-item-component__content
      .showcase-item__content-subject
        p {{item.subject}}
      .showcase-item-component__content-grade
        p {{gradeFormatting(item.grade)()}}
      .showcase-item-component__content-genre
        p {{item.genre}}
      .showcase-item-component__content-meta
        a Подробнее
      .showcase-item-component__content-controls
        a {{this.priceType ? `${item.price} рублей` : `${item.priceBonus} бонусов`}}

</template>

<script>
  export default {
    name: 'showcase-item',
    props: {
      item: {
        type: Object,
        default: null
      },
      priceType: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      gradeFormatting(grade) {
        let arr = grade.split(';');
        return (() => {
          if (arr.length > 1) {
            return `${arr[0]}-${arr[arr.length - 1]} классы`;
          } else {
            return `${arr} класс`;
          }
        });
      }
    }
  };
</script>

<style lang="sass" scoped>

  .showcase-item-component
    display: flex
    flex-wrap: wrap
    width: 170px
    min-height: 260px
    margin: 0 15px 55px
    border: solid 1px #b5b5b5
    border-radius: 10px
    box-sizing: border-box
    overflow: hidden

    &__image
      background: #7f828b
      height: 134px
      min-height: 134px
      width: 100%
      position: relative
      overflow: hidden
      img
        max-width: 100%

    &__content
      padding: 10px 16px
      width: 100%
      p
        padding-left: .5em
        font-size: 14px
        font-weight: normal
        margin-bottom: 0

      &-genre
        margin-top: 4px
        p
          font-size: 11px

      &-meta
        margin-top: 6px
        a
          font-size: 12px
          font-weight: 600
          color: #00c1ff
          padding-left: .5em

      &-controls
        margin-top: 4px
        padding: .3em .1em
        border-radius: 6px
        background: #00c1ff
        color: white
        font-size: 12px
        text-align: center

</style>
