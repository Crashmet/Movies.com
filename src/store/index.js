import Vue from 'vue';
import Vuex from 'vuex';
import movies from './modules/movies';
import loader from './modules/loader';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { movies, loader },
});

store.dispatch('initMoviesStore');
// вызываем метод dispatch из модуля movies для заранее прогрузки данных

export default store;
