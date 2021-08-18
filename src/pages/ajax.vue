<template>
    <div>
        <div @click="publish">发布</div>
        <div @click="check">查询发布状态</div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {};
    },
    methods: {
        publish() {
            console.log("发布");
            axios({
                url: "http://127.0.0.1:3000/build",
                method: "post",
            }).then((res) => {
                console.log("res");

                console.log(JSON.stringify(res, null, 4));
            });
        },
        check() {
            axios({
                url: "http://127.0.0.1:3000/ask/publish/status",
                method: "get"
            }).then((res) => {
                console.log("res");

                console.log(JSON.stringify(res, null, 4));
            });
        }
    },
};
</script>
