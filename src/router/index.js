import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AuthView from "../views/AuthView.vue";
import store from "../store";
import UserProfileView from "../views/UserProfileView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/auth",
    name: "Auth",
    component: AuthView,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: UserProfileView,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  console.log("meta: ", requiresAuth);
  const getUser = await store.dispatch("user/getCurrentUser");
  console.log(getUser);
  /*   if (requiresAuth && !(await store.dispatch("user/getCurrentUser"))) {
    next({ name: "Auth" });
    console.error(requiresAuth);
  } else if (!requiresAuth && (await store.dispatch("user/getCurrentUser"))) {
    next({ name: "Home" });
  } else if (!requiresAuth && !(await store.dispatch("user/getCurrentUser"))) {
    next({ name: "Home" });
  } else {
    //a cualquier lado
    next();
  } */
  if (requiresAuth && !getUser) {
    next({ name: "Auth" });
  } else {
    next();
  }
});

export default router;
