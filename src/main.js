/*
 * @Description: 全局的入口
 * @Author: your name
 * @Date: 2019-09-25 22:40:24
 * @LastEditTime: 2019-09-26 17:03:07
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入element-Ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
