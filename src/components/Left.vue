<template>
  <div class="left">
    <el-row class="tac">
      <el-col :span="12">
        <h5>新闻</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>省市</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">台湾</el-menu-item>
              <el-menu-item index="1-2">香港</el-menu-item>
              <el-menu-item index="1-3">澳门</el-menu-item>
              <el-menu-item index="1-4">北京</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title">重庆</template>
                <el-menu-item index="1-4-1">沙坪坝区</el-menu-item>
                <el-menu-item index="1-4-2">渝中区</el-menu-item>
                <el-menu-item index="1-4-3">渝北区</el-menu-item>
                <el-menu-item index="1-4-4">巴南区</el-menu-item>
                <el-menu-item index="1-4-5">万州区</el-menu-item>
              </el-submenu>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>美食</span>
            </template>
            <el-menu-item-group>
              <el-submenu index="1-1">
                <template slot="title">川菜</template>
                <el-menu-item index="1-1-1">干烧岩鲤</el-menu-item>
                <el-menu-item index="1-1-2">干烧桂鱼</el-menu-item>
                <el-menu-item index="1-1-3">鱼香肉丝</el-menu-item>
                <el-menu-item index="1-1-4">宫保鸡丁</el-menu-item>
              </el-submenu>
              <el-submenu index="1-2">
                <template slot="title">鲁菜</template>
                <el-menu-item index="1-2-1">白切鸡</el-menu-item>
                <el-menu-item index="1-2-2">烤乳猪</el-menu-item>
                <el-menu-item index="1-2-3">梅菜扣肉</el-menu-item>
              </el-submenu>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>民族</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">土家族</el-menu-item>
              <el-menu-item index="1-2">苗族</el-menu-item>
              <el-menu-item index="1-3">汉族</el-menu-item>
              <el-menu-item index="1-4">高山族</el-menu-item>
              <el-menu-item index="1-5">朝鲜族</el-menu-item>
              <el-menu-item index="1-6">蒙古族</el-menu-item>
              <el-menu-item index="1-7">黎族</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      // console.log (key,keyPath)
    },
    handleClose(key, keyPath) {
      // console.log (key,keyPath)
    }
  },
  // 书写JS
  mounted() {
    let el = document.querySelector(
      ".el-submenu__title[style='padding-left: 40px;']"
    );
    el.style.paddingLeft = "15px";
    // 禁止同时划出
    let ulIn = document.querySelector(".el-submenu");
    if (ulIn.className.indexOf("is-opened") > -1) {
      ulIn.parentNode.children[1].classList.remove("is-opened");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left {
  width: 20%;
  float: left;
  text-align: center;
}
h5 {
  padding: 20px 0;
  font-size: 26px;
  color: #d35400;
}
.el-col-12 {
  width: 100%;
}
.el-submenu.is-opened {
  border-bottom: 2px solid #ff2d52;
}
.el-menu-item-group.el-menu-item-group__title {
  padding: 0;
}
</style>
