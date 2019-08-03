<template>
    <div class="game-list-warpper">
        <div class="time">
            <div>03/05</div>
            <div>星期二</div>
        </div>
        <div>
            <gameCard class="list" div v-for="(item, index) in gameList" :key="index"/>
        </div>
    </div>
</template>

<script>
import gameCard from './long-game-card';
export default {
    components:{
        gameCard
    },
    data() {
        return {
            gameList: [1,2,3,4,5]
        }
    }
}
</script>

<style scoped>
.game-list-warpper{
    overflow: hidden;
    display: flex;
}
.time{
    color: #EC174C;
    letter-spacing: 0.04em;
    font-size: 14px;
    width: 100%;
}
.list{
    margin-bottom: 20px;
}
</style>
