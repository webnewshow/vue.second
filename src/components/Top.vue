<template>
  <div class="top">
    CCTV News 央视网
  </div>
</template>

<script>
export default {
    mounted(){
    let height=0;
    let opacity=0;
    let timer=setInterval(() => {
      let topOn=document.querySelector('.top');
      topOn.style.height = height + 'px'
      topOn.style.opacity= opacity;
      height++;
      opacity=opacity+0.01;
      if(height == 101){
      clearInterval(timer);
      };
    }, 10);
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
  height: 100px;
  color: #666;
  line-height: 100px;
  font-size: 34px;
  margin: 0 auto;
  text-align: center;
  background: url("../assets/3141.jpg") no-repeat top;
  border-bottom: 2px solid #ff2d52;
  /* transition: all 2s; */
  overflow: hidden;
  opacity: 0;
}

</style>
