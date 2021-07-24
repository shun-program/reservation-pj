<template>
  <div>
    <div class="left">
     <img class="logo" src="../assets/logo.png" alt />  
    </div>
    <div class="card text-center">
      <div class="card-header">
        Login
      </div>
      <div class="card-body">
        <img class="icon email" src="../assets/email.png" alt />  
        <input placeholder="Email" type="email" />
      </div>
      <div class="card-body">
        <img class="icon pass" src="../assets/password.png" alt />  
        <input placeholder="Password" type="password" />
        <div>
        <a href="#" class="btn btn-primary" @click="auth">ログイン</a>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    auth() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

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
  width: 25%;
  min-width: 200px;
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

.card-header{
  text-align: left;
  color: white;
  font-size: 18px;
  background-color: #3860fc;
  border: none;
}


input {
  width: 80%;
  border: 1px solid black;
  color: black;
  border-right:none;
  border-left:none;
  border-top:none;
}

.card-body:first-child{
  padding-bottom: 10px;
  
}

.card-body:last-child {
  padding-top: 0px;
}

.icon{
  float: left;
  height: 25px;
  margin-top: 0px;
}

.btn{
  margin-top: 20px;
  float: right;
  background-color: #3860fc;
  border: none;
}
</style>