import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ELE from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App)
  .use(ELE)
  .use(router)
  .mount('#app')