import Vue from 'vue'
import App from './App.vue'
import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

import { Settings } from 'luxon'
import { store } from './store/store'

Settings.defaultLocale = 'en'

Vue.use(Datetime)
Vue.config.productionTip = false

const vue = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
