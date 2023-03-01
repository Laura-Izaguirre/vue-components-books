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
    <book-info id="1"
    title="Narnia"
    author="C.S Lewis"
    release-date="1999-12-01"
    is-liked="1"
    >
  </book-info>
  <book-info id="2"
    title="NarniaII"
    author="C.S Lewis"
    release-date="1989-12-01"
    is-liked="0"
    >
  </book-info>
  <book-info id="3"
    title="NarniaIII"
    author="C.S Lewis"
    release-date="1979-12-01"
    is-liked="1"
    >
    </book-info>
  </ul>
</template>

<style>
  h1 {
    color: aqua;
  }
</style>