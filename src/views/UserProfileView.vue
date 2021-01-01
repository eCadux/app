<template>
  <div class="container">
    <p class="font-bold">Profile</p>
    <!--User profile form -->
    <form v-if="user" @submit.prevent="updateProfile">
      <label class="block">Nombre:</label
      ><input
        v-model="userData.name"
        type="text"
        :placeholder="user.displayName"
      />
      <label class="block">Email:</label>
      <input :placeholder="user.email" v-model="userData.email" type="email" />
      <label class="block">Contraseña:</label>
      <input v-model="userData.password" type="password" />
      <button class="block" type="submit" :disabled="!hasDataChanged">
        -> Actualizar
      </button>
    </form>
    <!--End User profile form -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isLoading: false,
      userData: {
        name: "",
        email: "",
        passowrd: ""
      }
    };
  },
  methods: {
    async updateProfile() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("user/updateProfile", {
          name: this.userData.name,
          email: this.userData.email,
          passowrd: this.userData.passowrd
        });
        this.$toast.success("Datos actualizados.");
        this.userData.name = this.userData.email = this.userData.passowrd = "";
      } catch (error) {
        console.error(error.message);
        this.$toast.error(error.message);
      } finally {
        this.isLoading = false;
      }
    }
  },
  computed: {
    ...mapState("user", ["user"]),
    hasDataChanged() {
      // hay un nuevo nombre?
      return (
        // Name exists and is different
        (this.userData.name && this.userData.name !== this.user.displayName) ||
        // Email exists and is different
        (this.userData.email &&
          this.userData.email !==
            this.user
              .email) /*||
        // Password exists
        this.userData.password.length*/
      );
    }
  }
};
</script>
