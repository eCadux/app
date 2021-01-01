import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import VueToast from "vue-toast-notification";
//import 'vue-toast-notification/dist/theme-default.css';
import "vue-toast-notification/dist/theme-sugar.css";
import "./assets/css/main.css";

Vue.use(VueToast, {
  position: "bottom"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
