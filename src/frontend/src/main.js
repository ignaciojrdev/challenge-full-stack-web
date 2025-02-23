// src/main.js
import { createApp } from 'vue'
import App from './App.vue'

//gerenciados de estados
import { createPinia } from 'pinia'


//Importação das rotas
import router from './router/index.js'

// Importação correta do Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// Criando o Vuetify com componentes e diretivas registradas
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // Define Material Design Icons como o padrão
  },
})

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(vuetify)
app.use(pinia)

app.mount('#app')
