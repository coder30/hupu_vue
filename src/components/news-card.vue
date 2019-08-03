<template>
    <div class="newscard">
        <img class="newscard-img" src="https://c1.hoopchina.com.cn/uploads/star/event/images/190122/9919dfb99c585ba94226d948806c1b6376e121b7.png"/>
        <div>
            <p class="newscard-summary">勇士取11连胜，克莱单手暴扣，库里滑倒再现五大囧</p>
            <img src="../assets/comment.svg" />
            <span class="comment-number">3510</span>
        </div>    
    </div>
</template>

<script>
export default {

}
</script>

<style>
.newscard{
    display: flex;
    margin-left: 16px;
    margin-top: 20px;
    height: 60px;    
}
.newscard-img{
    height: 60px;
    width: 80px;
    border-radius: 8px;
    margin-right: 10px;
    object-fit: cover;
}
.newscard-summary{
    margin: 0 14px 0 0;
}
.comment-number{
    color: rgba(0, 0, 0, 0.38);
    font-size: 10px;
    font-weight: 900;
    padding-left: 5px;
    line-height: 14px;
}
</style>
