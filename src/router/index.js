import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
	path: '/',
	name: 'home',
	component: Home,
	children: [{
		path: "/",
		name: 'layout',
		component: () => import( /* webpackChunkName: "phone" */ '../views/Layout'),
	}, {
		path: "/background",
		name: 'background',
		component: () => import( /* webpackChunkName: "background" */ '../views/Background'),
	}, {
		path: "/text",
		name: 'text',
		component: () => import( /* webpackChunkName: "text" */ '../views/Text'),
	}, {
		path: "/icon",
		name: 'icon',
		component: () => import( /* webpackChunkName: "icon" */ '../views/Icon'),
	}, {
		path: "/button",
		name: 'button',
		component: () => import( /* webpackChunkName: "button" */ '../views/Button'),
	}, {
		path: "/tag",
		name: 'tag',
		component: () => import( /* webpackChunkName: "tag" */ '../views/Tag'),
	}, {
		path: "/avatar",
		name: 'avatar',
		component: () => import( /* webpackChunkName: "avatar" */ '../views/Avatar'),
	}, {
		path: "/progress",
		name: 'progress',
		component: () => import( /* webpackChunkName: "progress" */ '../views/Progress'),
	}, {
		path: "/shadow",
		name: 'shadow',
		component: () => import( /* webpackChunkName: "shadow" */ '../views/Shadow'),
	}, {
		path: "/loading",
		name: 'loading',
		component: () => import( /* webpackChunkName: "loading" */ '../views/Loading'),
	}, {
		path: "*",
		name: "/404",
		component: () => import( /* webpackChunkName: "404" */ '../views/404'),
	}]
}, {
	path: "*",
	name: "/404",
	component: () => import( /* webpackChunkName: "404" */ '../views/404'),
}]

const router = new VueRouter({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
