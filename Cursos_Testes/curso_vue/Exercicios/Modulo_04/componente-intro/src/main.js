import {createApp} from 'vue'
import App from './App.vue'
import Contadores from "./components/Contadores";

const app = createApp(App)

// RegistroGlobal
app.component('app-contadores', Contadores)

app.mount('#app')
