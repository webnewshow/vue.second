<template>
  <div class="right">
    <div class="content">
      <!-- 轮播 -->
      <template>
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item v-for="item in lists" :key="item">
            <h3 class="medium">
              <img :src="item" />
            </h3>
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>
    <!-- 表 -->
    <div class="content">
      <template>
        <el-table :data="tableData" border style="width: 100%" max-height="200">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="简介：">
                  <span>{{props.row.introduce}}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="date" label="区号" width="180"></el-table-column>
          <el-table-column prop="name" label="名称" width="180"></el-table-column>
          <el-table-column prop="address" label="简称"></el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
                :plain="true"
                @click="open5"
              >移除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
export default {
  data() {
    return {
      tableData: [
        {
          date: "023",
          name: "重庆",
          address: "渝",
          introduce:"重庆，简称“渝”。 为中华人民共和国省级行政区，中西部唯一的直辖市、国家中心城市 、超大城市、国际大都市，长江上游地区的经济、金融、科创、航运和商贸物流中心，西部大开发重要的战略支点、“一带一路”和长江经济带重要联结点以及内陆开放高地；  既以江城、雾都、桥都著称，又以山城扬名。"

        },
        {
          date: "852",
          name: "香港",
          address: "港",
          introduce:"香港（Hong Kong），简称“港”（HK），全称中华人民共和国香港特别行政区，位于中国南部、珠江口以东，西与中国澳门隔海相望，北与深圳市相邻，南临珠海市万山群岛，区域范围包括香港岛、九龙、新界和周围262个岛屿，陆地总面积1106.34平方公里，海域面积1648.69平方公里。截至2018年末，总人口约748.25万人，是世界上人口密度最高的地区之一，人均寿命全球第一。"
        },
        {
          date: "886",
          name: "台湾",
          address: "台",
          introduce:"台湾（Taiwan），简称“台”，是中华人民共和国省级行政区 ，省会台北，位于中国大陆东南海域   ，东临太平洋，西隔台湾海峡与福建省相望，南界巴士海峡与菲律宾群岛相对。   台湾省由中国第一大岛台湾岛和周围属岛以及澎湖列岛两大岛群，共80余个岛屿所组成，总面积3.6万平方公里。  台湾省人口约2350万，超过70%集中在台湾岛西部的5大都会区，其中以台北市为中心的台北都会区最大。"
        },
        {
          date: "853",
          name: "澳门",
          address: "澳",
          introduce:"澳门（葡语Macau、英语Macao），简称“澳”，全称中华人民共和国澳门特别行政区，位于中国南部，地处珠江三角洲西岸。北与广东省珠海市拱北相接，西与珠海市的湾仔和横琴相望，东与香港、深圳隔海相望。相距60公里，南临中国南海。由澳门半岛和氹仔、路环二岛组成，陆地面积32.8平方公里，总人口67.2万人。"
        },
        {
          date:"010",
          name:"北京",
          address:"京",
          introduce:"北京市，简称“京”，是中华人民共和国首都、也是中国4个直辖市之一；北京是国家中心城市、超大城市，全国政治中心、文化中心、国际交往中心、科技创新中心，是世界著名古都和现代化国际城市，也是中国共产党中央委员会、中华人民共和国中央人民政府和全国人民代表大会常务委员会的办公所在地。"
        }
      ],
      lists: { img1, img2, img3, img4, img5 }
    };
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    open5() {
        this.$message({
          message: '移除成功',
          duration:3000,
          showClose:true
        });
        this.$notify({
          message: '我只是看一下移除了没有',
          type: 'warning'
        });
        this.$notify({
          message: '好像是移除了',
          position: 'top-left',
          type: 'success'
        });
        this.$notify.info({
          message: '不可能吧！',
          position: 'bottom-right'
        });
        this.$notify.error({
          message: '我靠，真的移除了',
          position: 'bottom-left'
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right {
  width: 80%;
  float: right;
}
.right img {
  width: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
