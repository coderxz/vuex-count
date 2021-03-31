import Vue from 'vue';
import App from './App';
import store from './store'
new Vue({
  store,
  beforeCreate() {
  },
  components: {
    App
  },
  template: '<App/>'
}).$mount('#root')
