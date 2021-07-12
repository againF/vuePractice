<template>
  <div>
    <div v-for="(item, index) in tagList" :key="index">
      <h1>{{ item.name }}</h1>
      <div
        v-for="(child, inx) in item.child"
        :key="inx"
        @click="check(index, child, item.child, inx)"
      >
        {{ child.name }}{{ child.active }}
      </div>
    </div>
    <h1>result: {{ result }}</h1>
    <div v-for="(i, inx) in result">
      <div v-if="i">{{ i.name }}{{ i.active }}</div>
      <div v-if="!i"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tagList: [
        {
          name: "tag1",
          child: [
            {
              name: "c1",
              active: false,
            },
            {
              name: "c2",
              active: false,
            },
            {
              name: "c3",
              active: false,
            },
          ],
        },
        {
          name: "tag2",
          child: [
            {
              name: "c4",
              active: false,
            },
            {
              name: "c5",
              active: false,
            },
            {
              name: "c6",
              active: false,
            },
          ],
        },
      ],
      result: [], // 结果勾选
    };
  },
  methods: {
    check(index, child, childList, childIndex) {
      // 如果当前项是active:true,将当前改为active:false
      if (child.active) {
        child.active = false;
      } else {
        // 把其他active改为false
        childList.forEach((item) => {
          item.active = false;
        });
        // 当前项为改为active:true
        childList[childIndex].active = true;
      }
      if (child.active) {
        this.$set(this.result, index, child);
      } else {
        this.$set(this.result, index, "");
      }
    },
  },
};
</script>