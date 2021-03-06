const URL = "http://localhost:9000"

import Vue from "vue"
import Vuex from "vuex"
import Axios from "axios"

Vue.use(Vuex)

export const state: any = {
  people: null,
  userSelected: null,
  editing: {},
  newUserAsync: false,
  updateUserAsync: false,
  miscAsync: false,
  validationSchema: null,
  deleteAsync: false,
}

export const getters = {
  people: (state: any) => state.people,
  userSelected: (state: any) => state.userSelected,
  editing: (state: any) => state.editing,
  newUserAsync: (state: any) => state.newUserAsync,
  updateUserAsync: (state: any) => state.updateUserAsync,
  miscAsync: (state: any) => state.miscAsync,
  validationSchema: (state: any) => state.validationSchema,
  deleteAsync: (state: any) => state.deleteAsync,
}
export const mutations = {
  setPeople(state: any, data: any[]) {
    console.log("Initialize people", data)
    state["people"] = data
  },

  personCreated(state: any, data: any) {
    state.people[data.id] = data
    // async in progress
    state.newUserAsync = false
    console.log("Async Complete")
    console.log("Add newly created person", state.people)
  },
  userUpdated(state: any, data: any) {
    console.log("user updated", data)
    state.people[data.id] = data
    state.updateUserAsync = false
  },

  userSelected(state: any, data: any) {
    console.log(" User Selected Mutation", data)
    state.userSelected = data
  },
  editUser(state: any, data: any) {
    state.editing = data
  },
  createUserInProgress(state: any) {
    state.newUserAsync = true
    console.log("async in progress", state.newUserAsync)
  },
  updateUserInProgress(state: any) {
    state.updateUserAsync = true
  },
  miscAsyncInProgress(state: any) {
    console.log("Misc Async now In Progress")
    state.miscAsync = true
  },
  validationSchema(state: any, data: any) {
    state.validationSchema = data
    state.miscAsync = false
  },
  deleteInProgress(state: any, data: any) {
    state.deleteAsync = data
  },
}

export const actions = {
  getPeople({ commit }: any) {
    Axios.get("http://localhost:9000/users").then(resp => {
      console.log(resp)
      commit("setPeople", resp.data)
    })
  },
  newPerson({ commit }: any, person: any) {
    commit("createUserInProgress")
    Axios.post("http://localhost:9000/users/new", person).then(resp => {
      console.log(resp)
      commit("personCreated", resp.data)
    })
  },
  testValidation({ commit }: any) {
    Axios.post(`${URL}/test`).then(resp => {
      console.log(resp)
    })
  },
  rowSelected({ commit }: any, selection: any) {
    console.log("selection", selection)
    fetch(`http://localhost:9000/user/${selection}`)
      .then(res => {
        return res.json()
      })
      .then(res => {
        console.log("hello", res)
        commit("editUser", res)
      })
  },

  userSelected({ commit }: any, data: any) {
    console.log("User Selected Action ", data)
    commit("userSelected", data)
  },

  updateUser({ commit }: any, data: any) {
    console.log("Update User", data)
    commit("updateUserInProgress")
    Axios.put(`http://localhost:9000/user/${data.id}`, data).then(res => {
      console.log(res.data)
      commit("userUpdated", res.data)
    })
  },

  getSchema({ commit }: any, data: any) {
    commit("miscAsyncInProgress")

    fetch("http://localhost:9000/schema")
      .then(res => {
        return res.json()
      })
      .then(res => {
        console.log(res)
        commit("validationSchema", res)
      })
  },
  deleteUser({ commit }: any, data: any) {
    console.log(data)
    commit("deleteInProgress", true)

    Axios.delete(`http://localhost:9000/user/${data.id}`, data).then(resp => {
      console.log(resp)
      commit("setPeople", resp.data)
      commit("deleteInProgress", false)
    })
  },
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
