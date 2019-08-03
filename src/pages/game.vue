<template>
    <div class="game-warpper">
        <div class="game-tab">
            <div class="tab-item">
                <div class="select">比赛</div>
                <div class="black-line"></div>
            </div>
            <div class="not-select">数据</div>
        </div>
        <gameList/>
        <gameList/>
    </div>
</template>

<script>
import gameList from '../components/long-game-list';
export default {
    components:{
        gameList
    }
}
</script>

<style scoped>
.game-warpper{
    margin: 20px 20px 0 20px;
    font-weight: bold;
    margin-bottom: 50px;
}
.game-tab{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.tab-item{
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.select{
    font-size: 24px;
    letter-spacing: 4px;
}
.black-line{
    width: 36px;
    height: 0px;
    border: 2.5px solid #000000;
    border-radius: 4px;
}
.not-select{
    color: rgba(0, 0, 0, 0.54);
    font-size: 14px;
    letter-spacing: 4px;
}
</style>
