import { createApp } from "vue";
import "@arco-design/web-vue/es/message/style/css.js";
import "@arco-design/web-vue/es/modal/style/css.js";

import "./style.css";

import router from "./router";
import App from "./App.vue";
createApp(App).use(router).mount("#app");
