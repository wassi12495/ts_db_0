const URL = 'http://localhost:9000';

import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export const state: any = {
  people: null,
  userSelected: null,
  editing: {},
  newUserAsync: false
};

export const getters = {
  people: (state: any) => state.people,
  userSelected: (state: any) => state.userSelected,
  editing: (state: any) => state.editing,
  newUserAsync: (state: any) => state.newUserAsync
};
export const mutations = {
  setPeople(state: any, data: any[]) {
    console.log('Initialize people', data);
    state['people'] = data;
  },

  personCreated(state: any, data: any) {
    state.people[data.id] = data;
    // async in progress
    state.newUserAsync = false;
    console.log('Async Complete');
    console.log('Add newly created person', state.people);
  },

  userSelected(state: any, data: any) {
    console.log(' User Selected Mutation', data);
    state.userSelected = data;
  },
  editUser(state: any, data: any) {
    state.editing = data;
  },
  createUserInProgress(state: any) {
    state.newUserAsync = true;
    console.log('async in progress', state.newUserAsync);
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
    commit('createUserInProgress');
    Axios.post('http://localhost:9000/users/new', person).then(resp => {
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
        commit('editUser', res);
      });
  },

  userSelected({ commit }: any, data: any) {
    console.log('User Selected Action ', data);
    commit('userSelected', data);
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
