<template>
  <div class="detail">
    <HeaderAuth />

      <div class="box">


          <div class="left-box" v-for="item in shop_list" :key="item">
            <button type="button" class="btn btn-outline-dark" @click="returnHome">＜</button>
            <p class="shop_name">{{ item.shop_name }}</p>  
            <img :src="item.shop_img"  class="img"/>
            <p class="shop_area">#{{ item.shop_area }}</p>
            <p class="shop_genre">#{{ item.shop_genre }}</p>
            <p class="info">{{ item.shop_info }}</p>
          </div>
     

        <div class="right-box" v-for="item in shop_list" :key="item">
          <div id="date">
            <h1>予約</h1>
           </div>
           <div>
             <input type="date" v-model="date" placeholder="日付を選択"/>
           </div>
           <select class="time" required type="time" v-model="time">
            <option value=""
                    hidden>時間を選択</option>
             <option value="17：00">17：00</option>
             <option value="17：30">17：30</option>
             <option value="18：00">18：00</option>
             <option value="18：30">18：30</option>
             <option value="19：00">19：00</option>
             <option value="19：30">19：30</option>
             <option value="20：00">20：00</option>
             <option value="20：30">20：30</option>
             <option value="21：00">21：00</option>
             <option value="21：30">21：30</option>
             <option value="22：00">22：00</option>
             <option value="22：30">22：30</option>
             <option value="23：00">23：00</option>
             <option value="23：30">23：30</option>
             <option value="24：00">24：00</option>
             <option value="24：30">24：30</option>
             <option value="01：00">01：00</option>
             <option value="01：30">01：30</option>
          </select>
          <select class="num" required type="text" v-model="text">
            <option value=""
                    hidden>人数を選択</option>
             <option value="1人">1人</option>
             <option value="2人">2人</option>
             <option value="3人">3人</option>
             <option value="4人">4人</option>
             <option value="5人">5人</option>
             <option value="6人">6人</option>
             <option value="7人">7人</option>
             <option value="8人">8人</option>
             <option value="9人">9人</option>
             <option value="10人">10人</option>
          </select>

          <div class="card">
            <p class="shop_name">Shop<span class="space">{{ item.shop_name }}</span></p>  
            <p class="shop_date">Date<span class="space">{{ date }}</span></p>
            <p class="shop_time">Time<span class="space">{{ time }}</span></p>
            <p class="shop_num">Number<span class="space">{{ text }}</span></p>
          </div>
         
          
          
          <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button">予約する</button>
</div>
</div>
           

      </div>
  </div>
</template>

<script>
import HeaderAuth from "../components/HeaderAuth.vue"
// import axios from 'axios';
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
.detail{
  background-color: #e4e4e4;
}

.box {
  display: flex;
  
}
.left-box {
margin: 50px 40px 0px 60px;

}
.img{
  width: 100%;
}
.right-box {
  margin: 0px 60px 0px 40px;
  background-color: #e4e4e4;
  min-width: 40%;
  background-color: #3860fc;
  border-radius: 5px;
}

button {
  background-color: #fff;
}

#date{
  color:#fff;
}
.card{
  background-color: #5b7bfa;
  border: none;
  color:#fff;
  height: 25%;
  margin: 10%;
  border-radius: 10px;
  padding: 25px;
  
}
.space {
  padding-left: 50px;
}
.btn-primary{
  background-color: #0b34d8;
  border: none;
  color: #fff;
  width: 100%;
  height: 40px;
  margin-bottom: -100%;
}
</style>