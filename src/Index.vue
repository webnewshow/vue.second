<template>
  <div class="index">
    <Top/>
    <div class="clearfix" style="margin-top:5px">
    <Tabnews/>
    <!-- <Left/>
    <Right/> -->
    </div>
   </div>
</template>

<script>
import Top from './components/Top'
import Tabnews from './components/Tabnews'
// import Left from './components/Left'
// import Right from './components/Right'
export default {
  components: {
    Top,
    Tabnews
    // Left,
    // Right
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
