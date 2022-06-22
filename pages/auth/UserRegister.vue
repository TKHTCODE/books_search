<template>
  <div>
    Register
    <v-row>
      <v-col cols="6">
        <v-text-field v-model="email" label="Mail Address" />
        <v-text-field v-model="password" label="Password" />
      </v-col>
    </v-row>
    <v-row class="mb-4">
      <v-col cols="3">
        <v-btn color="primary" @click="signUp"> Register </v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn color="secondary" to="./UserLogin"> Login Page </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods:{
    signUp(){
      const auth = getAuth(this.$firebase)
      createUserWithEmailAndPassword(auth, this.email, this.password)
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