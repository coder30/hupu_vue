<template>
    <div class="topic-card">
        <img class="topic-img" :src="imgUrl"/>
        <div class="topic-mask"></div>
        <p class="topic-summary">欧文：灵感来自山顶，成熟来自山谷，我们会一起接受考验</p>
    </div>
</template>

<script>
export default {
    data() {
        return  {
            imgUrl: 'https://c2.hoopchina.com.cn/uploads/star/event/images/190305/94f31516d4ae424f5fda04c5b1e7867b2a7743da.jpg'
        }
    }
}
</script>

<style>
.topic-card{
    position: relative;
    width: 328px;
    height: 190px;
    margin-left: 16px;
}
.topic-img{
    height: 100%;
    width: 100%;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    object-fit: cover;
}
.topic-mask{
    position: absolute;
    bottom: 0;
    width: 328px;
    height: 78px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
    border-radius: 8px;
}
.topic-summary{
    position: absolute;
    bottom: 0;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.005em;
    margin: 16px;
    color: #FFFFFF;
    font-weight: 600;
}
</style>
