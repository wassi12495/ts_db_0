import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export const state: any = {
  people: []
};

export const getters = {
  people: (state: any) => state.people
};
export const mutations = {
  setPeople(state: any, data: any[]) {
    console.log('Initialize people', data);
    state.people = data;
  }
};

export const actions = {
  getPeople({ commit }) {
    Axios.get('http://localhost:9000/').then(resp => {
      console.log(resp);
      commit('setPeople', resp.data);
    });
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
