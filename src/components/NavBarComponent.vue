<template>
  <div class="grid grid-cols-4 divide-x divide-green-500">
    <div class="text-center font-extrabold px-6">
      <router-link to="/">Home</router-link>
    </div>
    <div class="text-center font-extrabold px-6" v-if="!user">
      <router-link to="/auth">Login</router-link>
    </div>
    <div class="text-center font-extrabold px-6" v-if="user">
      <router-link to="/Profile">Profile</router-link>
    </div>
    <div class="text-center font-extrabold px-6" v-if="user">
      <a @click="doLogout">Log out</a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NavBarComponent",
  data() {
    return {};
  },
  methods: {
    async doLogout() {
      try {
        this.$toast.success("Has salido de la app eCadux");
        await this.$store.dispatch("user/doLogout");
        this.$router.push({ name: "Auth" });
      } catch (error) {
        this.$toast.error(error.message);
      }
    }
  },
  computed: {
    ...mapState("user", ["user"])
  }
};
</script>
