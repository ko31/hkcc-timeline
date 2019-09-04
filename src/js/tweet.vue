<template>
  <span>
    <component-view :id="tweetId"></component-view>
    <component-view :id="'783943172057694208'"></component-view>
    <Twitter :id="tweetId" :key="status"></Twitter>
  </span>
</template>

<script>
import Vue from 'vue'
import { Tweet } from 'vue-tweet-embed'
//import Tweet from 'vue-tweet-embed'

export default {
  components: {
    // component-view is available in the parents scope
    'component-view': Tweet
  },
  data() {
    return {
      tweetId: '783943172057694208'
    }
  }
}
</script>
