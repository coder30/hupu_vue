<template>
    <div>
        <div class="news-list">
            <div v-for="(item, index) in newslist" :key="index">
                <newscard/>
            </div>
        </div>
    </div>
</template>

<script>
import newscard from './news-card';
export default {
    components: {
        newscard
    },
    data() {
        return {
            newslist: [1,2,3,4,5,6,7,8,9]
        }
    }
}
</script>

<style>
.news-list{
    margin-bottom: 60px;
}
</style>
