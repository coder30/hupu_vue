<template>
    <div class="game-list">
        <div v-for="(item, index) in gamelist" :key="index">
            <gamecard/>
        </div>
    </div>
</template>

<script>
import gamecard from './game-card';
export default {
    components: {
        gamecard,
    },
    data() {
        return {
            gamelist: [1,2,3,4,5]
        }
    }
}
</script>

<style>
.game-list{
    display: flex;
    overflow: scroll;
    margin-bottom: 10px;
}
</style>
