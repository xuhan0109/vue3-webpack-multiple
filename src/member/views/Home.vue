<template>
  <div class="main">
   <h1>home</h1>
   <button @click="getList">点击我 获取列表数据</button>
   <button @click="toContent">点击我 跳转Content页面</button>
   <ul>
    <li v-for="item in state.list" :key="item.id">{{ item.MainTitle }}</li>
   </ul>
  </div>
</template>
<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import { useRouter } from 'vue-router';
import { postData } from '../api/api'; 
const router = useRouter();
const state=reactive({
    list:[]
})

// const list = ref('');
const getList = async () => {
  const dataToSend = {
      "AnswerInfoId":"5",
      "PageIndex":"1",
      "PageSize":"100",
      "Type":"8"
  };
  try {
    const res = await postData(dataToSend);
    console.log('Server response:', res.data,'成功');
    state.list=res.data.Data.Info
  } catch (error) {
    console.error('Error sending data:', error,'失败');
  }
};
const toContent = () => {
  router.push('/Content'); 
};

onMounted(() => {
  
});
</script>
<style lang="scss" scoped>
.main{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ul li{
    list-style-type: none;
  }
  button{
    margin-top: 2%;
  }
}
</style>