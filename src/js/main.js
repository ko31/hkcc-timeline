import Vue from 'vue'
import { Tweet } from 'vue-tweet-embed'
import twitter from './twitter.vue'

//if (document.getElementsByClassName('twitter')[0]) {
//	new Vue({
//		el: '.twitter',
//		components: {twitter}
//	})
//}
//if (document.getElementsByClassName('container')[0]) {
//	new Vue({
//		el: '.container',
//		components: {twitter}
//	})
//}
if (document.getElementsByClassName('cd-timeline')[0]) {
	new Vue({
		el: '.cd-timeline',
		components: {twitter}
	})
}

