<template>
    <div class="register_body">
        <div>
            邮箱：<input v-model="email" type="text" class="register_text"/><button @touchstart="handleVerify">发送验证码</button>
        </div>
        <div>
            用户名：<input v-model="username" class="register_text" type="text" />
        </div>
        <div>
            密码：<input  v-model="password" class="register_text" type="text" />
        </div>
        <div>
            确认密码：<input type="text" class="register_text" />
        </div>
        <div>
            验证码：<input v-model="verify" type="text" class="register_text" />
        </div>
        <div class="register_btn">
				   <input type="submit" value="注册" @touchstart="handleRegister">
		</div>

        
    </div>
</template>

<script>
export default {
    name: 'register',
    data(){
        return{
            email: '',
            username: '',
            password: '',
            verify : '',
        }
    },
    methods:{
        handleVerify(){
            this.axios.get('/api2/users/verify?email='+this.email).then((res)=>{
                  var status=res.data.status;
                if (status==0) {
                    alert('验证码发送成功！');
                }else{
                    alert('验证码发送失败！');
                }
            })

        },
        handleRegister(){
            this.axios.post('/api2/users/register',{
                email:this.email,
                username: this.username,
                password: this.password,
                verify: this.verify,
            }).then((res)=>{
                var status=res.data.status;
                if (status==0) {
                    alert('注册成功！');
                    this.$router.push('/mine/center');
                }else{
                    alert('注册失败！');
                }
            })

        },
    },
}
</script>

<style scoped>
#content .register_body{  width:100%;}
.register_body button{ position: absolute;right: 10px;top:30px;}
.register_body .register_text{ width:100%; height: 40px; border:none; border-bottom: 1px #ccc solid; margin-bottom: 5px; outline: none; text-indent: 10px;}
.register_body .register_btn{ height:50px; margin:10px;}
.register_body .register_btn input{ width:100%; height:100%; background:#e54847; border-radius: 3px; border:none; display: block; color:white; font-size: 20px;}
.register_body .register_link{ display: flex; justify-content:space-between;}
.register_body .register_link a{ text-decoration: none; margin:0 5px; font-size: 12px; color:#e54847;}
</style>
