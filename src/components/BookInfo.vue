<script>
    export default {
      /*props: ["id", "title", "author", "releaseDate", "isLiked"],*/

      //Objeto que valide los props 
      props: {
        id: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        author: {
          type: String,
          required: true,
        },
        releaseDate: {
          type: String,
          required: true,
        },
        isLiked: {
          type: String,
          required: false,
          default: "0",
          validator: function(value) {
            return value === "1" || value === "0";
          }
        }      
      },
    data() {
      return {
        detailsAreVisible: false,
        bookIsLiked: this.isLiked,
      }
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },

      toggleFavorite() {
        if(this.bookIsLiked === "1") {
          this.bookIsLiked = "0";
        } else {
          this.bookIsLiked = "1";
        }
      }
    }
  };
</script>

<template>
  <li>
    <h2>{{ title }} {{ bookIsLiked === "1" ? "(Liked)" : "" }}</h2>
    <button type="button" @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }}
    </button>

    <button type="button" @click="toggleFavorite">Toggle Favorite</button>

    <ul v-if="detailsAreVisible">
      <li><strong>Author: </strong> {{ author }} </li>
      <li><strong>Release Date: </strong> {{ releaseDate }} </li>
    </ul>
  </li>
</template>