<template>
<div class="wrap">
     <div>
    textDemo
    <p>原字符：{{ str }}</p>
    <p>原字符长度：{{ str.length }}</p>
    <p  class="name">新字符：{{ textOverflowMiddleDot(str) }}</p>
    <p>新字符长度：{{ textOverflowMiddleDot(str).length }}</p>
  </div>
</div>
 
</template>
<script>
export default {
  name: "textDemo",
  data() {
    return {
      str: "这个是原始标题很12322222",
    };
  },
  methods: {
    /***
         * 字符串超过长度中间打点隐藏
         * 
         * 广告系列名称写不下中间打点，后留4个字该规则APP内通用
           例如搜索baseball 所有国家地区但排除大...印度01
         * **/
    textOverflowMiddleDot(
      str,
      outputLength = 15,
      lastLength = 4,
      sign = "..."
    ) {
      /****
       * str: 输入的字符串
       * outputLength: 输出的字符长度
       * lastLength: 末尾字符长度，如【...印度01】就是lastLength = 4
       * sign:用什么当省略号
       * * */

      if (str.length > outputLength) {
        // 如果输入的字符串超过了长度范围触发中间打点省略
        let newStr = "";
        let startStr = ""; // 开头保留的字符串
        let lastStr = ""; // 尾部保留的字符串
        let clipLength = str.length - outputLength; // 裁剪长度
        let startIndex = str.length - (clipLength + lastLength + sign.length);
        
        lastStr = str.slice(-lastLength);
        startStr = str.slice(0, startIndex);
        newStr = `${startStr}${sign}${lastStr}`;
        return newStr;
      } else {
        return str;
      }
    },
  },
};
</script>
<style >
.name {
    font-size: 15px;
    color: #333;
    font-weight: bolder;
    margin-right: 10px;
}
    .wrap {
        width: 375px;
    }
</style>