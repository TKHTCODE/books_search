<template>
  <div>
    <v-footer :absolute="!fixed" app color="transparent">
      <span>&copy; {{ new Date().getFullYear() }} Taka</span>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
    }
  },
}
</script>

<style>
</style>