<template>
    <div class="login_body">
				<div>
					<input v-model="username" class="login_text" type="text" placeHolder="账户名/手机号/Email" >
				</div>
				<div>
					<input v-model="password" class="login_text" type="password" placeHolder="请输入您的密码" >
				</div>
				<div class="login_btn">
					<input type="submit" value="登录" @touchstart="handleLogin">
				</div>
				<div class="login_link">
					<router-link to="/mine/register" tag="a">立即注册</router-link>
					<router-link to="/mine/findPassword" tag="a">找回密码</router-link>
				</div>
			</div>
</template>

<script>
export default {
	name: 'login',
	data(){
		return {
			username: '',
			password: '',
		}
	},
	methods:{
		handleLogin(){
			this.axios.post('/api2/users/login',{
				username: this.username,
				password: this.password,
			}).then((res)=>{
				var status=res.data.status;
				var that=this;
				if (status==0) {
					console.log('登录成功');
					that.$router.push('/mine/center');
				}

			})
		}

	},
}
</script>

<style scoped>
#content .login_body{  width:100%;}
.login_body .login_text{ width:100%; height: 40px; border:none; border-bottom: 1px #ccc solid; margin-bottom: 5px; outline: none; text-indent: 10px;}
.login_body .login_btn{ height:50px; margin:10px;}
.login_body .login_btn input{ width:100%; height:100%; background:#e54847; border-radius: 3px; border:none; display: block; color:white; font-size: 20px;}
.login_body .login_link{ display: flex; justify-content:space-between;}
.login_body .login_link a{ text-decoration: none; margin:0 5px; font-size: 12px; color:#e54847;}

</style>
