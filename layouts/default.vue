<template>
  <v-app dark>
    <SharedHeader />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <SharedFooter />
  </v-app>
</template>

<script>
import SharedFooter from '../components/SharedFooter.vue'
export default {
  name: 'DefaultLayout',
  components: { SharedFooter },
  data() {
    return {
    }
  },
}
</script>
