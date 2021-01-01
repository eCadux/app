<template>
  <div class="container">
    <!--Login form -->
    <div v-if="action == 'login'">
      <p class="font-bold">Login</p>
      <form @submit.prevent="doLogin">
        <label class="block">Email:</label>
        <input
          v-model="userData.email"
          type="email"
          placeholder="e.g. hola@hola.com"
        />
        <label class="block">Contraseña:</label>
        <input v-model="userData.password" type="password" />
        <button type="submit" class="block">
          -> Login
        </button>
        <a class="block" href="#" @click="action = 'register'"
          >-> Don't have an account?</a
        >
        <a class="block" href="#" @click="action = 'reset'"
          >-> Cambiar contraseña</a
        >
      </form>
    </div>

    <!--End Login form -->

    <!--Regiter form -->

    <div v-if="action == 'register'">
      <p class="font-bold">Resgistrto</p>
      <form @submit.prevent="doRegister">
        <label class="block">Nombre:</label
        ><input
          v-model="userData.name"
          type="text"
          placeholder="e.g. Juan Juanes"
        />
        <label class="block">Email:</label>
        <input
          v-model="userData.email"
          type="email"
          placeholder="e.g. hola@hola.com"
        />
        <label class="block">Contraseña:</label>
        <input v-model="userData.password" type="password" />
        <button class="block" type="submit">-> Registrar</button>
        <a href="#" @click="action = 'login'">-> Want to login?</a>
      </form>
    </div>
    <!--End Register form -->

    <!--Password reset email -->
    <div v-if="action == 'reset'">
      <p class="font-bold">Reset</p>
      <form @submit.prevent="doReset">
        <label class="block">Email:</label>
        <input
          v-model="userData.email"
          type="email"
          placeholder="e.g. hola@hola.com"
        />
        <button type="submit" class="block">
          -> Reset
        </button>
        <a href="#" @click="action = 'register'">-> Don't have an account?</a>
      </form>
    </div>
    <!--End Password reset email -->
  </div>
</template>

<script>
export default {
  name: "AuthView",
  data() {
    return {
      action: "login",
      userData: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    redirect() {
      this.$router.push({ name: "Home" });
    },
    resetData() {
      this.userData.name = this.userData.email = this.userData.password = "";
    },
    async doRegister() {
      try {
        await this.$store.dispatch("user/doRegister", {
          name: this.userData.name,
          email: this.userData.email,
          password: this.userData.password
        });
        this.$toast.success("Cuenta creada");
        this.resetData();
        this.redirect();
      } catch (error) {
        this.$toast.error(error.message);
      }
    },
    async doLogin() {
      try {
        await this.$store.dispatch("user/doLogin", {
          email: this.userData.email,
          password: this.userData.password
        });
        this.$toast.success("Has accedido a la app eCadux.");
        this.resetData();
        this.redirect();
      } catch (error) {
        this.$toast.error(error.message);
        console.error(error);
      }
    },
    async doReset() {
      try {
        await this.$store.dispatch("user/doReset", this.userData.email);
        this.$toast.success(
          `Se ha enviado correo a ${this.userData.email} para reiniciar contraseña`
        );
        this.resetData();
        this.redirect();
      } catch (error) {
        this.$toast.error(error.message);
        console.error(error);
      }
    }
  }
};
</script>
