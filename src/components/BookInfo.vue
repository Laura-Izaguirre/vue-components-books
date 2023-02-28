<script>
    export default {
    data() {
      return {
        detailsAreVisible: false,
        book: 
          {
            id: 1,
            title: "Narnia",
            author: "C.S Lewis",
            releaseDate: "1999-12-01"
          },
      }
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      }
    }
  };
</script>

<template>
  <li>
    <h2>{{ book.title }}</h2>
    <button type="button" @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }}
    </button>

    <ul v-if="detailsAreVisible">
      <li><strong>Author: </strong> {{ book.author }} </li>
      <li><strong>Release Date: </strong> {{ book.releaseDate }} </li>
    </ul>
  </li>
</template>