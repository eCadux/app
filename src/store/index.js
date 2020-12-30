import Vue from "vue";
import Vuex from "vuex";

import user from "./user";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    checkAuth() {}
  },
  modules: {
    user
  }
});

export default store;

//Carga inicial llamamos a checkAuth para verificar estado de autenticacion.
store.dispatch("checkAuth");
