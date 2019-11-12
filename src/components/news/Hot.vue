<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul class="list"  infinite-scroll-disabled="disabled">
      <li v-for="i in rec" class="list-item" :key="i.id">
        <div class="newsMinBox">
          <h2>{{ i.title }}</h2>
          <p>{{i.TIME}}</p>
          <p class="NewsContent">{{i.content}}</p>
        </div>
      </li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>

<script>
// 引入 axios 
import axios from 'axios'
export default {
  data() {
    return {
      rec: [

      ],
      loading: false
    };
  },
  mounted() {
    axios({
      method: "get",
      url: "http://127.0.0.1:3000/hot",
    }).then((res) => {
        if(res.status === 200){
             res=res.data;
             this.rec = res.data;
        }   
    })
  },
  computed: {
    noMore () {
        return this.rec.length >= 10
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
</style>