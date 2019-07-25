<template>
    <el-container>
    <el-header>喵喵网后台管理系统 你好，管理员：{{$store.state.user.nm}}</el-header>
        <el-container>
            <el-aside width="200px">            
                    <el-menu>
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <router-link to="/admin/users" tag="span" slot="title">用户管理</router-link>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <router-link to="/admin/movies" tag="span" slot="title">电影管理</router-link>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-menu"></i>
                        <router-link to="/admin/cinemas" tag="span" slot="title">影院管理</router-link>
                    </el-menu-item>
                    </el-menu>
            </el-aside>
            <el-main>
                <keep-alive>
                <router-view></router-view>
                </keep-alive>
            </el-main>
        </el-container>
</el-container>
</template>

<script>
import axios from 'axios';
export default {
    name: 'admin',
    beforeRouteEnter(to,from,next){
            axios.get('/api2/admin').then((res)=>{
                var status=res.data.status;
                if (status==0) {
                    // console.log(res.data.data.user);
                    next();
                }else{
                    next('/mine/login');
                }
            })

        },


}
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: left;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
