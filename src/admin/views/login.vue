<template>
  <div class="main">
    login
    <button @click="getList">点击我 获取列表数据</button>
    <ul>
    <li v-for="item in state.list" :key="item.id">{{ item.MainTitle }}</li>
   </ul>
  </div>
</template>
<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter();
const state = reactive({
  list: [],
});

function getList() {
  axios.post("/api/Local/GetNewsInfo_Vareity", {
      "AnswerInfoId":"5",
      "PageIndex":"1",
      "PageSize":"100",
      "Type":"8"
    })
    .then((res) => {
      if (res.data.Status == 200) {
        state.list=res.data.Data.Info
        console.log(res);
      }
      else {
        console.log(err);
      }
    });
}

onMounted(() => {

});
</script>
<style lang="sass" scoped>
</style>