import Vue from 'vue'
import App from './App.vue'
import Web3 from 'web3'

const web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546', net, options);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
