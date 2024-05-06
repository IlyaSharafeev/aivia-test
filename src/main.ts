import { createApp } from "vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "@/scss/styles.scss";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(router).use(vuetify).mount("#app");
