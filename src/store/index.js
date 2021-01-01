import Vue from "vue";
import Vuex from "vuex";
//Importo los mudolos desagregados del store de vuex
import user from "./user";

//Importo el modulo de autenticación de firebase para escuchar si el usuario esta logeado.
import { auth } from "../firebase.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user
  },
  state: {},
  mutations: {},
  actions: {
    checkAuth({ commit }) {
      auth.onAuthStateChanged(function(user) {
        if (user) {
          commit("user/setUser", user);
        } else {
          commit("user/setUser", null);
        }
      });
    }
  }
});

export default store;

//Carga inicial llamamos a checkAuth para verificar estado de autenticacion.
store.dispatch("checkAuth");
