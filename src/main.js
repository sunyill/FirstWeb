/*
 * @Description: 全局的入口
 * @Author: your name
 * @Date: 2019-09-25 22:40:24
 * @LastEditTime: 2019-09-28 14:20:10
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入element-Ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入初始化样式
import '../src/styles/index.less'
// 配置axios
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 将axios给vue的原型
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
