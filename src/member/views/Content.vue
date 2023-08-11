<template>
  <div class="main">
   <h1>Content</h1>
   <button @click="toContent">点击我 跳转home</button>
  </div>
</template>
<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();
const state=reactive({
    list:[]
})
const toContent = () => {
  router.push('/Home'); 
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