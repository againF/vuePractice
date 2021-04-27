import Vue from 'vue'
var html = `
<div class="component-status-select">
    <div v-if="canEdit" class="state-btn" :class="activeState&&activeState.activeClassName" tapmode @click="toggleDropdown">
        <span>{{ activeState&&activeState.activeName }}</span>

        <i class="icon iconfont icon-xiajiantou" :class="{rotate: isShowDropdown}"></i>
    </div>
    <div v-else class="state-btn" :class="activeState&&activeState.activeClassName">
        <span>{{ activeState&&activeState.activeName }}</span>
    </div>
    <transition name="collapse-table">
        <div class="drop-down" v-show="isShowDropdown">
            <ul>
                <li v-for="(backState, stateIndex) in waitChoiceState" class="drop-down-item" @click="$emit('choice-state', backState.state)"
                    :class="backState.backClassName">
                    {{ backState.backName }}
                </li>
            </ul>
        </div>
    </transition>
</div>
`;

Vue.component('status-select', {
    template: html,
    props: {
        currentStateCode: String, // 当前状态对应码
        listData: Array, // 所有状态可能值列表
        canNotEdit: Boolean, // 传入bool控制是否开启下拉
    },
    data: function () {
        return {
            isShowDropdown: false, // 状态下拉折叠控制
        }
    },
    computed: {
        //状态按钮是否可以下拉选择，已移除状态不能再下拉选择
        canEdit: function () {
            if ((this.currentStateCode === "removed") || (this.currentStateCode === "disabled") || (this.currentStateCode === "under review") || (this.currentStateCode === "disapproved") || (this.currentStateCode === "site suspended") || (this.canNotEdit === true)) {
                return false;
            } else {
                return true;
            }
        },
        activeState: function () { //当前状态
            if (this.currentStateCode === "disabled") {
                return {
                    state: "disabled",
                    activeName: "已移除",
                    backName: "移除",
                    activeClassName: "remove-state-bg",
                    backClassName: "remove-state-text"
                };
            }else if(this.currentStateCode === "under review") {
                return {
                    state: "under review",
                    activeName: "审核中",
                    backName: "审核中",
                    activeClassName: "underreview-state-bg",
                    backClassName: "underreview-state-text"
                };
            }else if(this.currentStateCode === "disapproved") {
                return {
                    state: "disapproved",
                    activeName: "未批准",
                    backName: "未批准",
                    activeClassName: "disapproved-state-bg",
                    backClassName: "disapproved-state-text"
                };
            }else if(this.currentStateCode === "site suspended") {
                return {
                    state: "site suspended",
                    activeName: "未批准",
                    backName: "未批准",
                    activeClassName: "suspended-state-bg",
                    backClassName: "suspended-state-text"
                };
            }
            else {
                for (var i = 0; i < this.listData.length; i++) {
                    if (this.listData[i]['state'] === this.currentStateCode) {
                        return this.listData[i];
                    }
                }
            }
        },
        waitChoiceState: function () { //备选状态
            var waitChoice = [];
            for (var i = 0; i < this.listData.length; i++) {
                if (this.listData[i]['state'] !== this.currentStateCode) {
                    waitChoice.push(this.listData[i])
                }
            }
            return waitChoice;
        },
    },
    methods: {
        /***
         *控制状态下拉折叠
         **/
        toggleDropdown: function () {
            this.isShowDropdown = !this.isShowDropdown;
        }
    }
})