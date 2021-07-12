<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>功能需求</h1>
    <ul>
      <li>复刻案例中给出的这个状态切换按钮</li>
      <li>
        按钮中的表现分别是<br />
        【启用中】绿底白字<br />
        【已暂停】灰底白字<br />
        【已移除】红底白字
      </li>
      <li>
        下拉中的表现<br />
        【启用】绿字<br />
        【暂停】黑字<br />
        【移除】红字
      </li>
      <li>
        下拉里的状态不包括当前按钮的状态，<br />比如当前按钮状态为【启用中】，那么下拉里只有【暂停】【移除】，没有启用
      </li>
      <li>要求样式的切换和文案的切换与案例一致</li>
    </ul>
    <status-select
      ref="statusSelect"
      :current-state-code="detail.Status"
      :list-data="listData"
      @choice-state="choiceState"
    >
    </status-select>
    <div class="list-wrap">
      <div class="list-item hvr-rectangle-in">
        <div class="product-img">产品图</div>
      </div>
    </div>
    <h1>
      demo页面
    </h1>
    <div>
      <router-link to="/textDemo">字符中间打点</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import statusSelect from "./components/statusSelect.vue";
export default {
  name: "App",
  components: {
    // HelloWorld
    statusSelect,
  },
  data() {
    return {
      pass: true,
      detail: {
        CampaignId: "9469638201",
        CampaignName: "美国ds fds ds fd fdsf ds fdf sdf ds fds fds fsd",
        CampaignStatus: "enabled",
        AdGroupId: "97546015393",
        AdGroupName: "广告组1 sd fds ds d d fds fds ds d fds ",
        AdGroupStatus: "enabled",
        Id: "420340065331",
        Status: "enabled",
        CombinedApprovalStatus: "approved",
        PolicySummary: [],
        AdType: "Expanded text ad",
        HeadlinePart1:
          "The the the sd ds ds sd fsd fsd fds fsd fsdfsd sd  sd dsf   s ",
        HeadlinePart2:
          "The the same ds fds ds fsd fds ds fds ds fs   dsf sd d sd d dsf ",
        ExpandedTextAdHeadlinePart3:
          " sdfds fs fd fds fsd fsd fsd fsd fsd fs  ds df dsf ds d sd fsd s",
        Description:
          "The way you sdf d ds d fsd sdfsd ds ds fds fds sd ds ds ds df ds fds fsd ",
        ExpandedTextAdDescription2:
          " ds fd ds fds dfds fdf dsf dsfds ds s fd dsf sd fd ds fsd fd d fds fds ",
        Path1: "",
        Path2: "",
        Cost: 0,
        AverageCpc: 0,
        Clicks: "0",
        Ctr: "0.00",
        Impressions: "0",
        Conversions: "0.00",
        ConversionRate: "0.00",
        CostPerConversion: 0,
        FinalUrl: "https://www.ghj.com sd fds df fds ds fds dsf ds fds ds fds ",
        DisplayUrl: "www.ghj.com ds fds df ds fds fds fsd fsd d ",
        AdStatus: "enabled",
      }, //页面数据
      listData: [
        {
          state: "enabled",
          activeName: "启用中",
          backName: "启用",
          activeClassName: "start-state-bg",
          backClassName: "start-state-text",
        },
        {
          state: "paused",
          activeName: "已暂停",
          backName: "暂停",
          activeClassName: "pause-state-bg",
          backClassName: "pause-state-text",
        },
        {
          state: "removed",
          activeName: "已移除",
          backName: "移除",
          activeClassName: "remove-state-bg",
          backClassName: "remove-state-text",
        },
      ],
    };
  },
  methods: {
    /***
     *切换状态
     **/
    choiceState: function (status) {
      /***
       *state
       *enabled: 启用
       *paused：暂停
       *removed：移除
       **/
      this.detail.Status = status;
      this.$refs.statusSelect.toggleDropdown();
    },
    outClick(event) {
      console.log("out");

      if (!this.pass) {
        console.log("权限不够");
        event.stopPropagation();
      }
    },
    innerClick() {
      console.log("inner");
    },
  },
};
</script>

<style>

/* Rectangle In */
.hvr-rectangle-in {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  background: yellow;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-rectangle-in:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid yellow;
  background: #fff;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  border-radius: 50%;
}
.hvr-rectangle-in:hover, .hvr-rectangle-in:focus, .hvr-rectangle-in:active {
  color: white;
}
.hvr-rectangle-in:hover:before, .hvr-rectangle-in:focus:before, .hvr-rectangle-in:active:before {
  -webkit-transform: scale(0);
  transform: scale(0);
}
.list-wrap {
  display: flex;
  align-items: center;
}
.list-item {
  width: 100px;
  height: 100px;
  /* background-color: yellow; */
  border-radius: 50%;
}
</style>
