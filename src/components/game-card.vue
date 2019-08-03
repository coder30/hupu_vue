<template>
    <div class="gamecard">
        <div class="team">
            <img class="team-logo" src="../assets/logo.svg"/>
            <span class="team-name">GSW</span>
            <span class="team-score">132</span>
        </div>
        <div class="team">
            <img class="team-logo" src="../assets/logo2.svg"/>
            <span class="team-name">IDN</span>
            <span class="team-score">100</span>
        </div>
        <div class="game-continue">
            <div class="red-dot"></div>
            <span>第三节 5:38</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: String
    }
}
</script>

<style>
.gamecard{
    width: 111px;
    height: 72px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    font-size: 18px;
    font-family: 'DIN Condensed';
    padding: 6px 12px;
    margin: 14px 0 14px 16px;
}
.team{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
    margin-bottom: 5px;
}
.team-name{
    margin-right: 16px;
    height: 20px;
    line-height: 24px;
}
.team-score{
    height: 20px;
    line-height: 24px;
}
.game-continue{
    font-size: 12px;
    display: flex;
    align-items: center;
    font-weight: 600;
}
.red-dot{
    width: 8px;
    height: 8px;
    background-color: #EC174C;
    border-radius: 50%;
    margin: 0 5px;
}
</style>
