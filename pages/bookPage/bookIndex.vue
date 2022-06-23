<template>
  <div class="py-4">
    <h1 class="mb-4 text-center">My list</h1>
    <v-row class="mb-4">
      <v-col cols="6">
        <v-btn block color="primary" to="/bookPage/bookSearch">
          <v-icon dark right class="ma-2"> mdi-text-box-search </v-icon>
          Search
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn block color="error" @click="deleteLocalStorage">
          <v-icon dark right class="ma-2"> mdi-trash-can-outline </v-icon>
          Delete
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="book in books" :key="book.id" cols="12" md="6" class="mb-4">
        <v-card>
          <v-row>
            <v-col cols="4">
              <v-img :src="book.image"></v-img>
            </v-col>
            <v-col cols="8">
              <v-card-title>{{ book.title }}</v-card-title>
              <v-card-text
                >Date of reading: {{ book.readDate }}
                <br />
                Memo: {{ book.memo }}
              </v-card-text>
              <v-spacer />
              <v-card-actions>
                <v-btn
                  :to="{ name: 'bookPage-edit-id', params: { id: book.id } }"
                  color="indigo"
                  fab
                  small
                  dark
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    books: {
      type: Array,
      default: () => {},
    },
  },
  methods: {
    deleteLocalStorage() {
      this.$emit('delete-local-storage')
    },
  },
}
</script>

<style>
</style>