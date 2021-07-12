<template>
    <div>
        <p v-if="!show" onclick="fireClick">返回</p>
        <p v-if="show" @click="cancel">取消</p>
        <p v-if="!show" @click="next">下一步</p>
        <p v-if="show" @click="ok">确定</p>
        <div class="BURY_CODE_4bbc0f2cbbc1494b8987c0cde5da1165"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    methods: {
        fireClick() {
            console.log('fireClick');
            
        },
        cancel(){
            console.log('cancel');
            this.show = !this.show;
        },
        next(){
            console.log('next');
            this.show = !this.show;
            
        },
        ok(){
            console.log('ok');
            
        }
    }
}
</script>