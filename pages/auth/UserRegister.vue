<template>
  <div class="py-4">
    <h1 class="mb-4">Register</h1>
    <v-row>
      <v-col>
        <v-text-field
          v-model="email"
          :rules="[rules.required, rules.email]"
          label="E-mail"
        />
        <v-text-field
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          hint="At least 8 characters"
          counter
          @click:append="show = !show"
        />
      </v-col>
    </v-row>
    <v-row class="mb-4">
      <v-col>
        <v-btn block color="primary" @click="signUp"> Register </v-btn>
      </v-col>
      <v-col>
        <v-btn block text color="secondary" to="./UserLogin">
          Login Page
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
export default {
  data() {
    return {
      show: false,
      email: '',
      password: '',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => `The email and password you entered don't match`,
        counter: (value) => value.length <= 20 || 'Max 20 characters',
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }
  },
  methods: {
    signUp() {
      const auth = getAuth(this.$firebase)
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          this.$store.dispatch('auth/register', {
            email: this.email,
            password: this.password,
          })
        })
        .catch((e) => {
          alert(e.message)
        })
    },
  },
}
</script>

<style>
</style>