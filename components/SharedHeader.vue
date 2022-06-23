<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list @click.stop="drawer = !drawer">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          @click.stop="drawer = !drawer"

        >
          <v-list-item-action>
            <v-icon >{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app style="width: 100%;">
      <div v-show="isLoggedIn">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </div>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props:{
    books:{
      type: Array,
      default: null
    }
  },
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-view-list',
          title: 'My list',
          to: '/bookPage/bookIndex',
        },
        {
          icon: 'mdi-text-box-search',
          title: 'Search',
          to: '/bookPage/bookSearch',
        },
        { 
          icon: 'mdi-logout',
          title: 'Logout',
          to: '/auth/UserLogout',
        },
      ],
      title: 'Books Search',
    }
  },
  computed:{
    isLoggedIn(){
      return this.$store.getters['auth/getLoggedIn']
    }
  }
}
</script>

<style>
</style>