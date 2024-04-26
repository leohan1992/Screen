

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import DataVVue3 from '@kjgl77/datav-vue3'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)

app.use(router)
app.use(DataVVue3)
app.use(ElementPlus)
app.provide('$axios',axios)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
