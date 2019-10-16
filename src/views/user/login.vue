<template>
  <section>
    <div class="login">
      <h1>Hello,World</h1>
      <div>
        <el-input clearable
          v-model="username"
          placeholder="请输入用户名"
          prefix-icon="el-icon-user"></el-input>
      </div>
      <div>
        <el-input show-password
          v-model="password"
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"></el-input>
      </div>
      <div>
        <el-button type="primary" class="btn">登录</el-button>
      </div>
    </div>
    <p class="copyright">Copyright © {{ year }} Hello,World集团出品</p>
  </section>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      year: (new Date()).getFullYear()
    }
  }
}
</script>
<style lang="less" scoped>
section {
  width: 100%;
  height: 100vh;
  background-color: #f0f2f5;
  background-image: url('~assets/login.svg');
}
.login {
  position: absolute;
  width: 360px;
  left: 50%;
  top: 50%;
  transform:translate(-50%, -50%);
  text-align: center;
  h1 {
    margin-bottom: 24px;
    font-size: 32px;
    font-weight: 600;
    font-family: 'Avenir, Helvetica Neue, Arial, Helvetica, sans-serif';
    color: #2B313D;
  }
  > div {
    margin-bottom: 15px;
  }
}
.btn {
  width: 100%;
}
.copyright {
  position: absolute;
  bottom: 12px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #9D9EA7;
}
</style>
