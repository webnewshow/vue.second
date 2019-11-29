<template>
  <div class="user-login">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="登录" name="1">
        <form class="login-form">
        <div>
          <input type="text" name="user" placeholder="邮箱" :value="name" @change="changeName"/>
        </div>
        <div>
          <input type="password" name="password" placeholder="密码" />
        </div>
        <div>
          <div class="login">
            <i class="el-icon-check"></i>
          </div>
        </div>
        </form>
        </el-collapse-item>
        <el-collapse-item title="注册" name="2">
        <form class="register-form">
          <div>
            <input type="text" name="registerMail" placeholder="常用邮箱" />
            <p class="registerMailError">邮箱格式不正确</p>
          </div>
          <div>
            <input type="text" name="code" placeholder="请输入验证码" />
            <div class="getCode">获取验证码</div>
          </div>
          <div>
            <input type="password" name="password" placeholder="密码" />
          </div>
          <div>
            <input type="password" name="password" placeholder="确认密码" />
          </div>
          <div>
            <div class="register">
              <i class="el-icon-check"></i>
            </div>
          </div>
        </form>
      </el-collapse-item>
    </el-collapse>
    <div>
      <div class="transChange" @click="isShow=!isShow">点击我</div>
      <transition>
        <div class="trans" v-if='isShow'></div>
      </transition>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      activeName: "1",
      isShow:true
    };
  },
  computed:{
    name(){
      return this.$store.state.value
    }
  },
  methods:{
    changeName(e){
        let name=e.target.value
        this.$store.commit('changesValue',name)
    }
  },
  mounted() {
    // 注册-获取验证码
    let getCode=document.querySelector('.getCode')
    getCode.onclick=function(){
        let email=document.querySelector('[name=registerMail]').value
        let registerMailError=document.querySelector('.registerMailError')
        let reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
        if(reg.test(email)){
          registerMailError.style.display = 'none';
          axios({
            method:'get',
            url:"http://127.0.0.1:3000/getCode",
            params:{
              email
            }
          }).then( res=> {
              console.log(res)
          })

        }else{
          registerMailError.style.display = 'block';
        }      
    } 
  }
};
</script>

<style>
.user-login {
  width: 150px;
  position: fixed;
  top: 102px;
  right: 30px;
  z-index: 1000;
  text-align: center;
}
.el-collapse-item__header {
  font-size: 18px;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.el-collapse-item__content {
  padding-bottom: 0;
}
input[name="user"],
input[name="registerMail"],
input[name="password"],
input[name="code"],
.getCode {
  border: 1px solid #666;
  outline: none;
  padding: 5px 0;
  margin: 5px 0;
  width: 148px;
  text-align: center;
}
.el-collapse-item__header.is-active {
  color: #ff2d52;
}
.login,
.register {
  font-size: 18px;
  width: 148px;
  height: 26px;
  margin: 0 auto;
  border: 1px solid #666;
  transition: 0.25s;
}
.login:hover,
.register:hover,
.getCode:hover {
  background-color: #ff2d52;
  border: 1px solid #ff2d52;
  cursor: pointer;
  color: white;
}
.registerMailError{
  display: none;
}
/* 特效 */
.transChange{
  cursor: pointer;
}
.trans{
  height: 30px;
  width: 100%;
  background-color: #ff2d52;
  transition: all 2s;
}
.v-enter,.v-leave-to{
  opacity: 0;
}
.v-enter-to,.v-leave{
  opacity: 1;
}
</style>