<template>
    <div>
        <div class="table-head">
                        <div v-for="item in 20" class="item-scroll-wrap">
                            <div class="key-title">关键字标题呀</div>
                            <div class="key-title-place" style="height: 22px;"></div>
                            <div class="head-item" v-for="(item,index) in tableHead" :key="index">{{ item }}</div>
                        </div>
                        <div class="item-scroll-wrap">
                            <div class="key-title">关键字标题呀</div>
                            <div class="key-title-place" style="height: 22px;"></div>
                            <div class="head-item" v-for="(item,index) in tableHead" :key="index">{{ item }}</div>
                        </div>
                    </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableHead: [
                    "状态","展示","点击","点击率","每次点击费用","花费","转化","转化率","每次转化费用","质量分","广告相关性","预期点击率","着陆页体验","首页展示占比","展示份额"
                ]
        }
    }
}
</script>
<style>
    /* 新关键字样式 start */
.table-head {
    overflow-x: scroll;
}
.item-scroll-wrap {
    background: #fff;
   width: 3000px;

}
.head-item {
display: inline-block;
font-size: 26px;
font-family: PingFang SC;
font-weight: 400;
color: #999999;
line-height: 76px;
width: 200px;
text-align: center;
}
.key-title {
    position: absolute;
}
/* 新关键字样式 end */
</style>