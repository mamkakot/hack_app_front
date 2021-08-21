<template>
  <v-card width="420" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="login.username"
          label="Username"
          prepend-icon="mdi-account-circle"
        />

        <v-text-field
          v-model="login.password"
          label="Enter your password"
          hint="At least 8 characters"
          min="8"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="info" @click="onLoginClick">Login</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LoginPage",
  data: () => ({
    showPassword: false,
    login: {
      username: "",
      password: "",
    },
  }),
  methods: {
    onLoginClick() {
      this.logIn(this.login)
      .then( () => {
        this.$router.push({ name: 'Home' })
      })
    },
    ...mapActions("user", ["logIn"])
  },
};
</script>
