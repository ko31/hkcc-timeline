<template>
    <div class="container max-width-lg cd-timeline__container">
        <div class="cd-timeline__block" v-for="tweet in tweets" :key="tweet.id">
            <div class="cd-timeline__img cd-timeline__img--movie">
                <img src="img/icon_baseball.svg" alt="Cover">
            </div>
            <div class="cd-timeline__content text-component">
                <component-view :id="tweet.id">
                    <div class="spinner"></div>
                </component-view>
                <div class="flex justify-between items-center">
                    <span class="cd-timeline__date">{{ tweet.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {Tweet} from 'vue-tweet-embed'
    import axios from 'axios'

    export default {
        components: {
            'component-view': Tweet
        },
        data() {
            return {tweets: []}
        },
        mounted: function () {
            const self = this
            axios.get('tweets.json')
                .then(response => {
                    self.tweets = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
</script>
