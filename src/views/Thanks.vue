<template>
  <div>
    <div class="left">
     <img class="logo" src="../assets/logo.png" alt />  
    </div>
    <div class="card text-center">
     <div class="card-body">
      <p class="card-text">会員登録ありがとうございます</p>
      <a href="#" class="btn btn-primary">ログインする</a>
     </div>
    </div>
  </div>
</template>

<style scoped>
.left {
    background-color: #e4e4e4;;
  }
.logo {
  margin: 20px;
  width: 200px;
  cursor: pointer;
}

.card {
  height: 30%;
  width: 30%;
  min-width: 200px;
  min-height: 200px;
  background: white;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
    -webkit-transform: translate(-50%, -80%);
    -ms-transform: translate(-50%, -80%);
    
    /* @include mobile{
 width: 80%;
} */
}
.card-text{
  position:relative;
  top:20%;
  width:100%;
  font-size: 20px;
  font-weight: bold;
}

.btn{
  margin-top: 20px;
  background-color: #3860fc;
  border: none;
  position:relative;
  top:30%;
}
</style>