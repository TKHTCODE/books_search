<template>
  <div class="text-center py-4">
    <h1>Search</h1>
    <v-row class="mx-auto">
      <v-col class="px-4">
        <v-text-field v-model="keyword" label="Book Title" />
      </v-col>
    </v-row>
    <v-row class="mb-4">
      <v-col cols="6">
        <v-btn block color="primary" @click="search(keyword)"><v-icon dark right class="ma-2"> mdi-text-box-search </v-icon> Search </v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn block text to="/bookPage/bookIndex"><v-icon dark right class="ma-2"> mdi-view-list </v-icon> My List </v-btn>
      </v-col>
    </v-row>
    <div v-show="!isFound" class="mt-4">No result</div>
    <v-row>
      <v-col
        v-for="(book, index) in searchResults"
        :key="index"
        cols="12"
        md="6"
      >
        <v-card class="mx-auto mb-4">
          <v-row>
            <v-col cols="4">
            <v-img :src="book.image" />
            </v-col>
            <v-col cols="8">
              <v-card-title>{{ book.title }}</v-card-title>
              {{ book.description }}
              <v-spacer />
              <v-card-actions>
                <v-btn 
                fab dark color="indigo" class="mx-2" 
                @click="addBookList(index)">
                  <v-icon dark> mdi-plus </v-icon>
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
  data() {
    return {
      keyword: '',
      searchResults: [],
      isFound: true,
    }
  },
  methods: {
    addBookList(index){
      this.$emit('add-book-list', this.searchResults[index])
    },
    async search(keyword) {
      // Create query string
      this.searchResults = []
      const baseUrl = 'https://www.googleapis.com/books/v1/volumes?'
      const params = {
        q: `intitle:${keyword}`,
        maxResults: 40,
      }
      const queryParams = new URLSearchParams(params)

      // Get Json data using fetch
      const response = await fetch(baseUrl + queryParams).then((response) =>
        response.json()
      )

      if (response.items === undefined) {
        this.isFound = false
      } else {
        this.isFound = true
        // Push data to array
        for (const book of response.items) {
          const title = book.volumeInfo.title
          const img = book.volumeInfo.imageLinks
          const description = book.volumeInfo.description
          this.searchResults.push({
            title: title ? title : '', // eslint-disable-line
            image: img !== undefined ? img.thumbnail : '',
            description: description ? description.slice(0, 40) : '',
          })
        }
      }
    },
  },
}
</script>

<style>
</style>