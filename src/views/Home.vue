<template>
  <div>
    <div class="left">
     <img class="logo" src="../assets/logo.png" alt />
    <div class="right">
      <div class="box">
        <span class="tag">
          <select class="area" required>
            <option value=""
                    hidden>All area</option>
             <option value="1">東京</option>
             <option value="2">大阪</option>
             <option value="3">福岡</option>
          </select>
        </span>
        <span class="tag">
          <select class="genre" required>
            <option value=""
                    hidden>All area</option>
             <option value="1">焼肉</option>
             <option value="2">居酒屋</option>
             <option value="3">イタリアン</option>
             <option value="4">ラーメン</option>
             <option value="5">寿司</option>
          </select>
        </span>
        <span class="aaaa">
          <input  class="input" placeholder="search" type="text" v-model="search">
        </span>
      </div>    
    </div>
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
      <a href="#" class="btn btn-primary" @click="detail(item.shop_id)">詳しく見る</a>
      <img class="icon" src="../assets/heart.png" />
     </div>
    </div>

  </div>


  </div>
</template>

<script>
import axios from 'axios';
export default { 
  data() {
    return {
      shop_list: [
      {
        shop_id:"",
        shop_img: "",
        shop_name: "",
        shop_area: "",
        shop_genre: ""
      }]
    };
  },
  methods: {
    async created() {
    const item = await axios.get(
      "http://127.0.0.1:8000/api/shops"
    );
    this.shop_list = item.data.data; 
    console.log(this.shop_list);
  },
   detail(shop_id) {
   this.$router.push({path: '/detail/'+shop_id});
  },
  },
    created(){
    this.created();
    },
  
  };
</script>

<style scoped>
.cardbox {
  display: flex;
  float: left;
  align-items: center;
  height: 30%;
  width: 20%;
  background: white;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
  margin: 20px 20px 20px 20px;
}

.card-body{
  margin: -20px;
}


.left {
    background-color: #e4e4e4;
  }

.logo {
  margin: 20px;
  width: 200px;
  cursor: pointer;
}

.right {
  background-color: #e4e4e4;
  float: right;
  margin: 30px 250px 0 0;
  font-size: 20px;
}

.area {
  padding: 10px 30px 10px 2px;
  border: none;
  border-radius: 5px 0px 0px 5px;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);
}



.genre {
  padding: 10px 30px 10px 2px;
  border: none;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);
}

.input{
  padding-right: 10px;
  border: none;
  height: 48.5px;
  border-radius: 0px 5px 5px 0;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);
}


.img {
  width: 100%;
  height: 200px;
  margin: 0 auto;
  object-fit: cover;
}

/* .shop_tag{
  border: none;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
  margin: 0px 20px 20px 20px;
  width: 100px;
}*/
.flex {
  display: flex;
}

.shop_area {
  padding: 0px 20px 0px 20px;
}

.shop_name {
  font-size: 20px;
  margin-bottom: 5px;
  font-weight:bold;
  font-size: 24px;
  padding: 20px 0px 0px 20px ;
} 

.btn {
  margin: 0px 0px 20px 20px;
  border: none;
  border-radius:5px;
  background-color: #3860fc;
}

.icon {
  width: 40px;
  height: 40px;
  float: right;
  margin: 0px 20px 20px 0px;
  filter: invert(20%) sepia(95%) saturate(6932%) hue-rotate(3000deg) brightness(95%) contrast(112%);
}
</style>