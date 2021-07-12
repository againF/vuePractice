<template>
  <div>
    <div>pageItem: {{ pageItem }}</div>
    <div>currentAdType: {{ currentAdType }}</div>
    <div>eventName: {{ eventName }}</div>
    <div>pageParam: </br>
        {{ pageParam }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        eventName: "report_list", // 筛选监听的事件名称 唯一性 当前页面
     currentAdType: "display", // 当前广告类型
      pageItem: 8,
      pageParam: '',
      screenData: {
        // 用户选择的筛选条件  此处数据为默认值 不允许修改(如果修改 请与筛选页面数据保持一致)
        screen: 3,
        type: "all",
        orderby: "Cost,desc",
        campaign_id: "",
        adgroup_id: "",
      },
      prohibitScreenData: {
        // 筛选按钮禁用
        screenState: [],
        screenType: ["all", "display", "shopping", "video"],
        screenSort: [],
      },
      
    };
  },
  mounted(){
      this.initScreen();
      this.handleOpenScreen()
  },
  methods: {
      initScreen() {
      let initScreenType = ["video"];
      let initScreenState = [];
      let initScreen = 3; // 筛选里的【状态】
      if (this.pageItem === 0) {
        // 广告系列
        initScreenType = [];
        initScreen = 1;
      }
     
      if (this.pageItem === 1 || this.pageItem === 4) {
        // 国家地区 设备
        initScreenType = ["video"];
      }
      if (this.pageItem === 5) {
        // 广告
        initScreen = 1;
        if(this.currentAdType === "search") {
          initScreenType = ["all","shopping","display", "video"];
        }else {
          initScreenType = ["shopping", "video"];
        }
      }
      if (this.pageItem === 2) {
        // 搜索字
        switch (this.currentAdType) {
        case "all":
          initScreenType = ["search","shopping","display", "video"];
          break;
        case "display":
          initScreenType = ["all","search","shopping", "video"];
          break;
        case "shopping":
          initScreenType = ["all","search","display", "video"];
          break;
        case "video":
          initScreenType = ["all","search","shopping","display"];
          break;
        case "search":
          initScreenType = ["all","shopping","display", "video"];
          break;
        default:
          break;
      }
        this.screenData = {
          // 用户选择的筛选条件  此处数据为默认值 不允许修改(如果修改 请与筛选页面数据保持一致)
          screen: "",
          type: this.currentAdType,
          orderby: "Cost,desc",
        };
        this.prohibitScreenData = {
          // 筛选按钮禁用
          screenState: [1, 2, 3, 4],
          screenType: [...initScreenType],
          screenSort: ["TopImpressionPercentage"],
        };
        return;
      }
      if (this.pageItem === 6) {
        // 关键字
        initScreen = 1;
        if(this.currentAdType === "shopping") {
          initScreenType = ["all", "search","display", "video"];
        }else if(this.currentAdType === "search") {
          initScreenType = ["all", "shopping","display", "video"];
        }
      }
      if (this.pageItem === 7) {
        initScreen = 1;
        initScreenType = ["search", "shopping", "video"];
      }
      if (this.pageItem === 1 || this.pageItem === 4 || this.pageItem === 3) {
        initScreenState = [1, 2, 4];
      }
      if (this.pageItem === 8) {
        initScreen = 1;
        initScreenState = [3];
        initScreenType = ["search", "shopping", "video"];
      }
      switch (this.currentAdType) {
        case "all":
          this.screenData = {
            // 用户选择的筛选条件  此处数据为默认值 不允许修改(如果修改 请与筛选页面数据保持一致)
            screen: initScreen,
            type: "all",
            orderby: "Cost,desc",
          };
          this.prohibitScreenData = {
            // 筛选按钮禁用
            screenState: [...initScreenState],
            screenType: [...initScreenType],
            screenSort: [],
          };
          break;
        case "display":
          this.screenData = {
            // 用户选择的筛选条件  此处数据为默认值 不允许修改(如果修改 请与筛选页面数据保持一致)
            screen: initScreen,
            type: "display",
            orderby: "Cost,desc",
          };
          this.prohibitScreenData = {
            // 筛选按钮禁用
            screenState: [...initScreenState],
            screenType: [...initScreenType],
            screenSort: [],
          };
          break;
        case "shopping":
          this.screenData = {
            // 用户选择的筛选条件  此处数据为默认值 不允许修改(如果修改 请与筛选页面数据保持一致)
            screen: initScreen,
            type: "shopping",
            orderby: "Cost,desc",
          };
          this.prohibitScreenData = {
            // 筛选按钮禁用
            screenState: [...initScreenState],
            screenType: ["all", "display", ...initScreenType],
            screenSort: [],
          };
          break;
        case "video":
          this.screenData = {
            // 用户选择的筛选条件  此处数据为默认值 不允许修改(如果修改 请与筛选页面数据保持一致)
            screen: initScreen,
            type: "video",
            orderby: "Cost,desc",
          };
          this.prohibitScreenData = {
            // 筛选按钮禁用
            screenState: [...initScreenState],
            screenType: ["all", "display", ...initScreenType],
            screenSort: [],
          };
          break;
        case "search":
          this.screenData = {
            // 用户选择的筛选条件  此处数据为默认值 不允许修改(如果修改 请与筛选页面数据保持一致)
            screen: initScreen,
            type: "search",
            orderby: "Cost,desc",
          };
          this.prohibitScreenData = {
            // 筛选按钮禁用
            screenState: [...initScreenState],
            screenType: [...initScreenType],
            screenSort: [],
          };
          break;
        default:
          break;
      }
    },
    handleOpenScreen() {
      // from===index 显示系列下拉
      let pageParam = {};
      // 国家地区:pageItem = 1 搜索字:pageItem = 2  关键字:pageItem = 6 着陆页:pageItem = 3 广告:pageItem = 5
      if (
        this.pageItem === 1 ||
        this.pageItem === 2 ||
        this.pageItem === 6 ||
        this.pageItem === 3 ||
        this.pageItem === 5
      ) {
        pageParam = {
          prohibitScreenData: this.prohibitScreenData,
          screenData: this.screenData,
          eventName: this.eventName, // 监听事件名称唯一
          from: "index",
        };
      } else {
        pageParam = {
          prohibitScreenData: this.prohibitScreenData,
          screenData: this.screenData,
          eventName: this.eventName, // 监听事件名称唯一
        };
      }
      this.pageParam = pageParam;
    },
  },
};
</script>