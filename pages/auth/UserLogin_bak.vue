<template>
  <div>
    Login
    <v-row>
      <v-col cols="6">
        <v-text-field v-model="email" label="Mail Address" />
        <v-text-field v-model="password" label="Password" />
      </v-col>
    </v-row>
    <v-row class="mb-4">
      <v-col cols="3">
        <v-btn color="primary" @click="login"> Login </v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn text color="secondary" to="./UserRegister"> Register Page </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods:{
    login(){
      const auth = getAuth(this.$firebase)
      signInWithEmailAndPassword(auth, this.email, this.password)
      .then(userCredential => {
      })
      .catch(e => {
        alert(e.message)
      })
    }
  }
}
</script>

<style>
</style>