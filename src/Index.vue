<template>
  <div class="index">
    <Top/>
    <div class="clearfix" style="margin-top:5px">
      <router-view></router-view>
    </div>
    <div>
      <router-view name='details'></router-view>
    </div>
    <User/>
   </div>
</template>

<script>
import Top from './components/Top'
import User from './components/User'
import axios from 'axios'
export default {
  components: {
    Top,
    User
  }
}
</script>

<style>
html {
  overflow-y: scroll;
  font-family:Helvetica Neue;
}
*{
  margin: 0;
  padding: 0;
}
.index{
  max-width: 1200px;
  margin: 0 auto;
}
/* .clearfix::after{
  content: '';
  display: block;
  clear:both;
} */
</style>
