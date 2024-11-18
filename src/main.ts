import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button } from 'vant'
import Vant from 'vant'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import * as buffer from 'buffer' //引入buffer

if (typeof (window as any).Buffer === 'undefined') {
  // 判断当前环境是否有Buffer对象
  ;(window as any).Buffer = buffer.Buffer // Buffer对象不存在则创建导入的buffer
}
const app = createApp(App)
app.use(Vant)
app.use(createPinia())
app.use(router)
app.use(Button)

app.mount('#app')
