import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import vueHljs from "vue-hljs";

import 'element-ui/lib/theme-chalk/index.css';
import "vue-hljs/dist/vue-hljs.min.css";

import Phone from './components/Phone.vue'
import DocumentContent from './components/DocumentContent.vue'
import MyCode from './components/MyCode.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vueHljs)
Vue.component(Phone.name, Phone);
Vue.component(DocumentContent.name, DocumentContent);
Vue.component(MyCode.name, MyCode);
Vue.prototype.colorList = [{
		title: '嫣红',
		name: 'red',
		color: '#e54d42'
	},
	{
		title: '桔橙',
		name: 'orange',
		color: '#f37b1d'
	},
	{
		title: '明黄',
		name: 'yellow',
		color: '#fbbd08'
	},
	{
		title: '橄榄',
		name: 'olive',
		color: '#8dc63f'
	},
	{
		title: '森绿',
		name: 'green',
		color: '#39b54a'
	},
	{
		title: '天青',
		name: 'cyan',
		color: '#1cbbb4'
	},
	{
		title: '海蓝',
		name: 'blue',
		color: '#0081ff'
	},
	{
		title: '姹紫',
		name: 'purple',
		color: '#6739b6'
	},
	{
		title: '木槿',
		name: 'mauve',
		color: '#9c26b0'
	},
	{
		title: '桃粉',
		name: 'pink',
		color: '#e03997'
	},
	{
		title: '棕褐',
		name: 'brown',
		color: '#a5673f'
	},
	{
		title: '玄灰',
		name: 'grey',
		color: '#8799a3'
	},
	{
		title: '草灰',
		name: 'gray',
		color: '#aaaaaa'
	},
	{
		title: '墨黑',
		name: 'black',
		color: '#333333'
	},
	{
		title: '雅白',
		name: 'white',
		color: '#ffffff'
	},
]

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
