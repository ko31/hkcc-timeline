<template>
    <div class="container max-width-lg cd-timeline__container">
      <div class="cd-timeline__block" v-for="tweet in tweets">
        <div class="cd-timeline__img cd-timeline__img--movie">
          <img src="assets/img/cd-icon-movie.svg" alt="Movie">
        </div> <!-- cd-timeline__img -->

        <div class="cd-timeline__content text-component">

          <component-view :id="tweet.id"></component-view>

          <div class="flex justify-between items-center">
            <span class="cd-timeline__date">{{ tweet.title }}</span>
          </div>
        </div> <!-- cd-timeline__content -->
      </div> <!-- cd-timeline__block -->
    </div>
</template>

<script>
import Vue from 'vue'
import { Tweet } from 'vue-tweet-embed'

export default {
  components: {
    'component-view': Tweet
  },
  data() {
    return {
      tweets: [
        {
          "title": "2017年1月号",
          "id": "803730894951358464"
        },
        {
          "title": "2017年3月号",
          "id": "826263992205053952"
        },
        {
          "title": "2017年5月号",
          "id": "849041477476810752"
        }
      ]
    }
  }
}
</script>
