<template>
  <el-tabs :tab-position="tabPosition">
    <el-tab-pane label="推荐"><Rec/></el-tab-pane>
    <el-tab-pane label="热点"><Hot/></el-tab-pane>
    <el-tab-pane label="科技">科技</el-tab-pane>
    <el-tab-pane label="娱乐">娱乐</el-tab-pane>
    <el-tab-pane label="体育">体育</el-tab-pane>
  </el-tabs>
</template>

<script>
import Rec from './news/Recommended'
import Hot from './news/Hot'
export default {
    components:{
        Rec,
        Hot
    },
  data() {
    return {
      tabPosition: "left"
    };
  }
};
</script>

<style>
.el-tabs__item:hover{
    color: #fff;
    background-color: #ff2d52;
}
.el-tabs__active-bar{
    background-color: #ff2d52;
}
.el-tabs__item.is-active {
    color: #fff;
    background-color: #ff2d52;
}
.el-tabs__item{
    width: 135px;
    font-size:16px;
}
.el-tabs--left .el-tabs__item.is-left{
    text-align: center;
}
.el-tabs__content{
  max-width: 900px;
}
</style>