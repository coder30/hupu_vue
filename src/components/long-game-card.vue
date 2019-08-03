<template>
    <div class="game">
        <div class="team">
            <img src="../assets/logo.svg" class="logo"/>
            <div>GSW</div>
        </div>
        <div class="game-score">132</div>
        <div class="game-data">
            <div class="game-type">常规赛</div>
            <div class="game-time">第三节 5:38</div>
            <div class="game-doing">LIVE</div>
        </div>
        <div class="game-score">100</div>
        <div class="team">
            <img src="../assets/logo2.svg" class="logo"/>
            <div>IND</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.game{
    display: flex;
    background: #ffffff;
    border-radius: 8px;
    width: 271px;
    height: 64px;
    float: right;
    justify-content: space-around;
    align-items: center;
    font-family: 'DIN Condensed';
}
.logo{
    height: 30px;
    width: 30px;
}
.team{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
}
.game-data{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.game-score{
    font-size: 20px;
}
.game-type{
    color: rgba(0, 0, 0, 0.38);
    font-size: 9px;
}
.game-time{
    color: #EC174C;
    font-size: 12px;
}
.game-doing{
    color: #ffffff;
    font-size: 8px;
    line-height: 9px;
    background: #EC174C;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 14px;
    width: 28px;
    font-weight: lighter;
}
</style>
