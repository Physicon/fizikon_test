export const state = () => ({
  list: [],
  sortList: [],
  empty: false,
  priceType: false,
  loading: true
});

export const mutations = {
  addCourses(state, payload) {
    state.list = payload;
    state.sortList = payload;
    state.loading = false
  },
  filtrationCourses(state, filters) {
    let filtering = state.list;
    filters.forEach((item) => {
      filtering = filtering.filter((k) => {
        if (item.filterName === 'grade') {
          let split = k[item.filterName].split(';');
          if (item.value >= split[0] && item.value <= split[split.length - 1]) {
            return item;
          }
        } else if (k[item.filterName] === item.value) {
          return item;
        } else if (item.filterName === 'searchFilter') {
          if (!k.subject.indexOf(item.value) || !k.genre.indexOf(item.value) || !k.grade.indexOf(item.value)) {
            return item;
          }
        }
      });
    });
    state.sortList = filtering;
  },
  changePriceType(state) {
    state.priceType = !state.priceType;
  }


};
