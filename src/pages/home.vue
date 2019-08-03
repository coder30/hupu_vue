<template>
    <div>
        <div class="title">DRIBALL</div>
        <topiclist/>
        <subtitle title="比赛"/>
        <gamelist/>
        <subtitle title="新闻"/>
        <newslist/>
    </div>
</template>

<script>
import topiclist from '../components/topic-list'
import subtitle from '../components/sub-title';
import gamelist from '../components/game-list';
import newslist from '../components/news-list';
export default {
    components: {
        topiclist,
        subtitle,
        gamelist,
        newslist,
    },
}
</script>

<style>
.title {
  font-family: DIN Condensed;
  font-size: 24px;
  letter-spacing: 4px;
  margin: 16px;
}
</style>
