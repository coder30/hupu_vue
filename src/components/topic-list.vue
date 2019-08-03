<template>
    <div>
        <div class="topic-list">
            <div v-for="(item, index) in topiclist" :key="index">
                <topiccard/>
            </div>
        </div>
    </div>
</template>

<script>
import topiccard from './topic-card';
export default {
    components: {
        topiccard
    },
    data() {
        return {
            topiclist: [1,2,3]
        }
    }
}
</script>

<style>
.topic-list{
    display: flex;
    overflow: scroll;
    margin-bottom: 29px;
}
</style>
