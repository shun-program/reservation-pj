<template>
  <div>
    <div class="left">
     <img class="logo" src="../assets/logo.png" alt />
    <div class="right">
      <div class="box">
        <span class="aa">
          <select class="area" required>
            <option value=""
                    hidden>All area</option>
             <option value="1">東京</option>
             <option value="2">大阪</option>
             <option value="3">福岡</option>
          </select>
        </span>
        <span class="aaa">
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
          <input  class="input" placeholder="serch" type="text" v-model="search">
        </span>
      </div>    
    </div>
    </div>

    <div class="card">
      <div class="cardbox" v-for="item in shop_list" :key="item">
     <div class="card-body">
       <img :src="item.shop_img"  class="img"/>
      <p class="shop_name">{{ item.shop_name }}</p>
      <div class="shop_item">
                  <p class="shop_area">#{{ item.shop_area }}</p>
                  <p class="shop_genre">#{{ item.shop_genre }}</p>
                </div>
      <a href="#" class="btn btn-primary">詳しく見る</a>
     </div>
    </div>

  </div>


  </div>
</template>

<script>
export default { 
  data() {
    return {
      shop_list: [
      {
        shop_id:"",
        shop_img: "https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/yakiniku.jpg",
        shop_name: "仙人",
        shop_area: "東京都",
        shop_genre: "寿司"
      },
      {
        shop_id:"",
        shop_img: "https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/izakaya.jpg",
        shop_name: "志摩屋",
        shop_area: "福岡県",
        shop_genre: "居酒屋"
      },
      {
        shop_id:"",
        shop_img: "https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/izakaya.jpg",
        shop_name: "志摩屋",
        shop_area: "福岡県",
        shop_genre: "居酒屋"
      },
      {
        shop_id:"",
        shop_img: "https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/izakaya.jpg",
        shop_name: "志摩屋",
        shop_area: "福岡県",
        shop_genre: "居酒屋"
      }
      ]
    };
  },
  
  };
</script>

<style scoped>
.card {
  flex-wrap: wrap;
}

.cardbox {
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
    background-color: #e4e4e4;;
  }

.logo {
  margin: 20px;
  width: 200px;
  cursor: pointer;
}

.right {
  background-color: #e4e4e4;;
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
  margin: 0 auto;
}



/* .shop_tag{
  border: none;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
  margin: 0px 20px 20px 20px;
  width: 100px;
}*/

.shop_name {
  font-size: 20px;
  margin-bottom: 5px;
  font-weight:bold;
} 

.btn {
  margin: 20px;
  border: none;
  border-radius:5px;
  background-color: #3860fc;
}
</style>