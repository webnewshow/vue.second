<template>
    <div>
        <el-container v-for="i in rec" :key="rec.id">
        <el-header>{{i.title}}</el-header>
        <el-header>{{i.time}}</el-header>
        <el-main>{{i.content}}</el-main>
        </el-container>
    </div> 
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            rec:[]
        }
    },
    mounted (){
        let newsId=this.$route.params.id
        axios ({
            method:'get',
            url:"http://127.0.0.1:3000/details?id="+newsId,
            params:{
                data:{
                newsId
            }
            }
        }).then(res =>{
            if(res.data.status === 200){
                this.rec = res.data.data
            }
        })
    }
}

</script>

<style>
.el-header{
    padding-top:20px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
}
</style>