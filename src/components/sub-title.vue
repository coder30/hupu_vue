<template>
    <div class="subtitle" :style="{ color:color }">
        <div class="subtitle-line" :style="{ background: color }"></div>
        <span>{{title}}</span>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
    },
    computed: {
        color() {
            return this.title=='比赛'?'#EC174C':'#006BB5';
        }
    }
}
</script>

<style>
.subtitle{
    display: flex;
    margin-left: 16px;
    font-size: 18px;
    align-items: center;
}
.subtitle-line{
    width: 4px;
    height: 20px;
    border-radius: 2px;
    margin-right: 6px;
}
</style>
