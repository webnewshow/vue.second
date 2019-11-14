<template>
  <div class="user-login">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="登录" name="1">
        <form>
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
        <form>
          <div>
            <input type="text" name="user" placeholder="常用邮箱" />
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "1"
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
</style>