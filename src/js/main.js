import Vue from 'vue'
import {Tweet} from 'vue-tweet-embed'
import twitter from './twitter.vue'

if (document.getElementsByClassName('cd-timeline')[0]) {
	new Vue({
		el: '.cd-timeline',
		components: {twitter}
	})
}
