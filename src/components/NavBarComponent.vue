<template>
  <div>
    <h1>eCadux</h1>
    <router-link to="/Home">Home</router-link> |
    <router-link to="/auth">Login</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBarComponent",
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleNavbar: function() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>
