<template>
    <div>
        lazy
        <div v-for="(item, index) in items" :key="index">
            <img v-lazy="item" alt="">
        </div>
        
    </div>
</template>
<script>
import app_1 from "../assets/device_preview/app_1.png"
import app_2 from "../assets/device_preview/app_2.png"
import app_3 from "../assets/device_preview/app_3.png"
import app_4 from "../assets/device_preview/app_4.png"
import app_5 from "../assets/device_preview/app_5.png"
import app_6 from "../assets/device_preview/app_6.png"
import pc_1 from "../assets/device_preview/pc_1.png"
import pc_2 from "../assets/device_preview/pc_2.png"
import pc_3 from "../assets/device_preview/pc_3.png"
import pc_4 from "../assets/device_preview/pc_4.png"
import pc_5 from "../assets/device_preview/pc_5.png"
export default {
    data() {
        return {
            items: [
                app_1,
                app_2,
                app_3,
                app_4,
                app_5,
                app_6,
                pc_1,
                pc_2,
                pc_3,
                pc_4,
                pc_5,
            ]
        }
    }
}
</script>