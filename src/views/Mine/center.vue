<template>
    <div>
        <h1>个人中心</h1>
        <p>当前用户：{{$store.state.user.nm}}</p>
        <p v-if="$store.state.user.isAdmin">用户身份：管理员 <a href="/admin" target="_blank">管理界面</a></p>
        <p v-else>用户身份：普通用户</p>
        <a @touchstart='handleLogout'>退出</a>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'center',
    beforeRouteEnter(to,from,next){
            axios.get('/api2/users/getUser').then((res)=>{
                var status=res.data.status;
                if (status==0) {
                    // console.log(res.data.data.user);
                    next(vm=>{
                        window.localStorage.setItem('name',res.data.data.user);
                        window.localStorage.setItem('isAdmin',res.data.data.isAdmin);
                        vm.$store.commit('user/USER_NAME',{nm:res.data.data.user,isAdmin:res.data.data.isAdmin})

                    });
                }else{
                    next('/mine/login');
                }
            })

        },

    methods:{
        handleLogout(){
            window.localStorage.removeItem('name');
            window.localStorage.removeItem('isAdmin');
            this.axios.get('/api2/users/logout').then((res)=>{
                this.$router.push('/mine/login');
            })
        },
        
    },

}
</script>

<style>

</style>
