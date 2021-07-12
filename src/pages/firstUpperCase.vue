<template>
  <div>
    <input
      placeholder="请输入英文"
      maxlength="55"
      @input="checkInput"
      v-model.trim="name"
      type="text"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    checkInput() {
      // console.log("d")
      let step1 = this.name.replace(/[^a-zA-Z0-9\s]/g, "");
      this.name = this.firstUpperCase(step1);
      // this.name = this.name.replace(/[^a-zA-Z0-9\s`@#$%&*+\-=_[\]{}\\;:,./?]$/g, '');
    },
    // 字符串首字母大写，其他保持原样
    firstUpperCase(str) {
      return str.replace(/\b(\w)(\w*)/g, function ($0, $1, $2) {
        return $1.toUpperCase() + $2;
      });
    },
  },
};
</script>