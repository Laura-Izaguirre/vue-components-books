import { createApp } from 'vue';
import "./assets/main.css";

import App from './App.vue';
import BookInfo from './components/BookInfo.vue';

const app = createApp(App);

app.component("book-info", BookInfo);

app.mount ("#app");