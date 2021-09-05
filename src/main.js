import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

//Vue.config.productionTip = false

// new Vue({
//   render:h => h(App),
//   router
// }).$mount('#app')

const app = createApp(App)
app.use(router)
app.mount('#app')