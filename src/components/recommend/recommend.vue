<template>
  <div>推荐</div>
</template>
<script>
// import { getRecommend } from "api/recommend";

export default {
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // getRecommend().then(res => {
      //   console.log(res.data);
      // });
    }
  }
};
</script>
