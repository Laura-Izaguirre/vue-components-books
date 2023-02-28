<script>
  export default {
    data() {
      return {
        books: [
          {
            id: 1,
            title: "Narnia",
            author: "C.S Lewis",
            releaseDate: "1999-12-01"
          },
          {
            id: 2,
            title: "Narnia",
            author: "C.S Lewis",
            releaseDate: "1999-12-01"
          },
          {
            id: 3,
            title: "Narnia",
            author: "C.S Lewis",
            releaseDate: "1999-12-01"
          }
        ],
      }
    },
  };
</script>

<template>
  <h1>My books</h1>
  <ul>
    <book-info></book-info>
  </ul>
</template>

<style>
  h1 {
    color: aqua;
  }
</style>