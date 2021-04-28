<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>功能需求</h1>
    <ul>
      <li>复刻案例中给出的这个状态切换按钮</li>
      <li>按钮中的表现分别是<br>
        【启用中】绿底白字<br>
        【已暂停】灰底白字<br>
        【已移除】红底白字
        </li>
        <li>下拉中的表现<br>
          【启用】绿字<br>
          【暂停】黑字<br>
          【移除】红字.
        </li>
        <li>
          下拉里的状态不包括当前按钮的状态，<br>比如当前按钮状态为【启用中】，那么下拉里只有【暂停】【移除】，没有启用
        </li>
        <li>
          要求样式的切换和文案的切换与案例一致
        </li>
    </ul>
    <status-select
      ref="statusSelect"
      :current-state-code="detail.Status"
      :list-data="listData"
      @choice-state="choiceState"
    >
    </status-select>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import statusSelect from './components/statusSelect.vue'
export default {
  name: "App",
  components: {
    // HelloWorld
    statusSelect
  },
  data() {
    return {
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
  },
};
</script>

<style>

</style>
