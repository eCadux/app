<template>
  <article>
    <section>
      <div>
        <!--Login form -->
        <template v-if="isLogin">
          <h1>Login</h1>
          <form @submit.prevent="doLogin">
            <label>Email:</label>
            <input
              v-model="userData.email"
              type="email"
              placeholder="e.g. hola@hola.com"
            />
            <label>Contraseña:</label>
            <input v-model="userData.password" type="password" />
            <button type="submit">Login</button>
            <a href="#" @click="isLogin = false">Don't have an account?</a>
          </form>
        </template>
        <!--End Login form -->

        <!--Regiter form -->
        <template v-else>
          <h1>Registro</h1>
          <form @submit.prevent="doRegister">
            <label>Nombre:</label
            ><input
              v-model="userData.name"
              type="text"
              placeholder="e.g. Juan Juanes"
            />
            <label>Email:</label>
            <input
              v-model="userData.email"
              type="email"
              placeholder="e.g. hola@hola.com"
            />
            <label>Contraseña:</label>
            <input v-model="userData.password" type="password" />
            <button type="submit">Registrar</button>
            <a href="#" @click="isLogin = true">Want to login?</a>
          </form>
        </template>
        <!--End Register form -->
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "AuthView",
  data() {
    return {
      isLogin: true,
      userData: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    doRegister() {},
    doLogin() {}
  }
};
</script>
