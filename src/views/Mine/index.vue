<template>
  <div id="main">
    <Header title='我的喵喵'/>
      <div id="content">   
       <router-view></router-view>
      </div>
    <TabBar />
  </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import Login from '@/components/Login';
import Center from './center.vue';
export default{
  name: "Mine",
   components: {
     Header,
     TabBar,
     Login,
     Center,
   }
}
</script>

<style>
</style>