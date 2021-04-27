<template>
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
</template>

<script>
export default {
  name: 'statusSelect',
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
            // if ((this.currentStateCode === "removed") || (this.currentStateCode === "disabled") || (this.currentStateCode === "under review") || (this.currentStateCode === "disapproved") || (this.currentStateCode === "site suspended") || (this.canNotEdit === true)) {
            //     return false;
            // } else {
            //     return true;
            // }
            return true;
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* vue列表过渡动画 */
.collapse-table-enter-active,
.collapse-table-leave-active {
  transition: opacity 0.2s;
}

.collapse-table-enter,
.collapse-table-leave-to {
  opacity: 0;
}

.rotate {
  transform: rotate(180deg);
}

.state-btn {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 0;
  z-index: 2;
  width: 15.467vw;
  height: 5.6vw;
  border-radius: 2.8vw;
  font-size: 3.2vw;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 1;
}

/* 启用中 */
.start-state-bg {
  background: #17D4AF;
}

/* 已暂停 */
.pause-state-bg {
  background: #ccc;
}

/* 已移除 */
.remove-state-bg {
  background: #FF551A;
}

/* 已移除 */
.disabled-state-bg {
  background: #FF551A;
}

/* 审核中 */
.underreview-state-bg {
  background: #FF9F1A;
}

/* 未批准 */
.disapproved-state-bg {
  background: rgba(247, 180, 174, .3);
  border-radius: unset;
  color: #FF695D;
}

/* 未批准 */
.suspended-state-bg {
  background: #FF551A;
}

.start-state-text {
  color: rgba(23, 212, 175, 1);
}

.pause-state-text {
  color: #333;
}

.remove-state-text {
  color: #FF551A;
}

/* 已移除 */
.remove-state-text {
  color: #FF551A;
}

/* 已移除 */
.disabled-state-text {
  color: #FF551A;
}

/* 审核中 */
.underreview-state-text {
  color: #FF9F1A;
}

/* 未批准 */
.disapproved-state-text {
  color: #FF695D;
}

/* 未批准 */
.suspended-state-text {
  color: #FF551A;
}

.state-btn .icon-xiajiantou {
  color: #fff;
  font-size: 2.667vw;
}

.drop-down {
  position: absolute;
  z-index: 1;
  right: 0;
  top: -1.333vw;
  display: flex;
  justify-content: center;
  width: 15.467vw;
  /* height: 60px; */
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(225, 225, 225, 1);
  border-radius: 2.8vw;
  color: #ccc;
  padding-top: 9.333vw;
  font-size: 2.933vw;
  font-weight: 400;
  line-height: 5.6vw;
}

.drop-down-item {
  margin-bottom: 4vw;
}
ul {
    list-style: none;
}

</style>
