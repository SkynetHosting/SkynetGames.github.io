// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

function created() {
	let ckeditor = document.createElement("script");    
	ckeditor.setAttribute("src", "https://commerce.coinbase.com/v1/checkout.js?version=201807");
	document.head.appendChild(ckeditor);
}