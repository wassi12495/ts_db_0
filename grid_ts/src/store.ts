const URL = 'http://localhost:9000';

import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export const state: any = {
  people: {},
  rowSelected: null,
  editing: {}
};

export const getters = {
  people: (state: any) => state.people,
  rowSelected: (state: any) => state.rowSelected,
  editing: (state: any) => state.editing
};
export const mutations = {
  setPeople(state: any, data: any[]) {
    console.log('Initialize people', data);
    state['people'] = data;
  },

  personCreated(state: any, data: any) {
    console.log('Add newly created person', data);
    state.people.push(data);
  },

  rowSelected(state: any, data: any) {
    console.log('Row Selected');
    state.rowSelected = data;
  },
  editUser(state: any, data: any) {
    console.log(data);
    state.editing = data;
  }
};

export const actions = {
  getPeople({ commit }: any) {
    Axios.get('http://localhost:9000/users').then(resp => {
      console.log(resp);
      commit('setPeople', resp.data);
    });
  },
  newPerson({ commit }: any, person: any) {
    Axios.post('http://localhost:9000/createPerson', person).then(resp => {
      console.log(resp);
      commit('personCreated', resp.data);
    });
  },
  testValidation({ commit }: any) {
    Axios.post(`${URL}/test`).then(resp => {
      console.log(resp);
    });
  },
  rowSelected({ commit }: any, selection: any) {
    console.log('selection', selection);
    fetch(`http://localhost:9000/user/${selection}`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log('hello', res);
        return res;
      });
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
