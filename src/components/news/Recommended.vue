<template>
  <div>
    <div>
      <el-carousel :interval="4000" type="card" height="250px">
        <el-carousel-item v-for="item in list" :key="item">
          <h3> <img :src="item" /></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="infinite-list-wrapper" style="overflow:auto">
      <ul class="list" infinite-scroll-disabled="disabled">
        <li v-for="i in rec" class="list-item">
          <div class="newsMinBox">
            <h2>{{ i.title }}</h2>
            <p>{{i.time}}</p>
            <p class="NewsContent">{{i.content}}</p>
          </div>
        </li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </div>
</template>

<script>
// 引入 axios
import axios from "axios";
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/img5.jpg";
export default {
  data() {
    return {
      rec: [],
      loading: false,
      list:{
        img1, img2, img3, img4, img5
      }
    };
  },
  mounted() {
    axios({
      method: "get",
      url: "http://127.0.0.1:3000/rec"
    }).then(res => {
      if (res.status === 200) {
        res = res.data;
        this.rec = res.data;
      }
    });
  },
  computed: {
    noMore() {
      return this.rec.length >= 10;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  }
};
</script>

<style>
.newsMinBox {
  padding-left: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #999;
}
.newsMinBox h2 {
  margin: 10px 0;
}
.NewsContent {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  margin: 0;
  position: relative;
}
/* h3 p{
  position: absolute;
  top:0
} */
.el-carousel__item h3 img{
  height:100%;
  width: 100%;
}
.el-carousel__indicators--outside button{
  background-color: #ff2d52
}
</style>