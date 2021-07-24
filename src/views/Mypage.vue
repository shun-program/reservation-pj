<template>
  <div class="mypage">
    <HeaderAuth />
<h1 class="status">予約状況</h1>  
      <div class="box">


          <div class="left-box" v-for="item in shop_list" :key="item">

             <p class="res-card">予約1</p>
             <div class="rescard">
            <p class="shop_name">Shop<span class="space">{{ item.shop_name }}</span></p>  
            <p class="shop_date">Date<span class="space">{{ date }}</span></p>
            <p class="shop_time">Time<span class="space">{{ time }}</span></p>
            <p class="shop_num">Number<span class="space">{{ text }}</span></p>
          </div>
       
            
          </div>

          
     

        <div class="right-box">
          <div id="date">
            <h1>{{user_name}}さん</h1>
            <p class="favorite">お気に入り店舗</p>
           </div>
           <div class="card-wrap">
      <div class="cardbox" v-for="item in shop_list" :key="item">
     <div class="card-body">
       <img :src="item.shop_img"  class="img"/>
      <p class="shop_name">{{ item.shop_name }}</p>
      <div class="flex">
        <p class="shop_area">#{{ item.shop_area }}</p>
        <p class="shop_genre">#{{ item.shop_genre }}</p>
      </div>
      <a href="#" class="btn btn-primary">詳しく見る</a>
      <img class="icon" src="../assets/heart.png" />
     </div>
    </div>

  </div>

          
          </div>

           

      </div>
  </div>
</template>

<script>
import HeaderAuth from "../components/HeaderAuth.vue"

export default {
  data() {
    return {
      shop_list: [
      {
         shop_id:"",
        shop_img: "https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg",
        shop_name: "仙人",
        shop_area: "東京都",
        shop_genre: "寿司",
        shop_info: "料理長厳選の食材から作る寿司を用いたコースをぜひお楽しみください。食材・味・価格、お客様の満足度を徹底的に追及したお店です。特別な日のお食事、ビジネス接待まで気軽に使用することができます。",

      }],
      time: "",
      date: "",
      text: ""
         };
  },
   
  methods: {
    returnHome(){
      this.$router.push('/home')
    }
  },
  components: {
    HeaderAuth
  }
};
</script>

<style scoped>
.mypage{
  background-color: #e4e4e4;
}

.box {
  display: flex;
  
}
.left-box {
  margin: 50px 40px 0px 60px;
 min-width: 40%;
 border: 5px;
 color: #fff;
  background-color:#3860fc;
}
.img{
  width: 100%;
}
.right-box {
  margin: 0px 60px 0px 40px;
  background-color: #e4e4e4;
  min-width: 40%;
}

button {
  background-color: #fff;
}

.card{
  background-color: #e4e4e4;

}
.space {
  padding-left: 50px;
}
.cardbox {
  display: flex;
  float: left;
  align-items: center;
  height: 30%;
  width: 35%;
  background: white;
  border-radius: 5px;

  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
  margin: 20px 20px 20px 20px;
}
.icon {
  width: 40px;
  height: 40px;
  float: right;
  margin: 0px 20px 20px 0px;
  filter: invert(20%) sepia(95%) saturate(6932%) hue-rotate(3000deg) brightness(95%) contrast(112%);
}
.img {
  width: 100%;
  height: 200px;
  margin: 0 auto;
  object-fit: cover;
}

</style>