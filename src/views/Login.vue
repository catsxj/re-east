<template>
  <div class="login-wrap x-form">
    {{test}}
    <el-form :model="form" ref="loginform" class="login-form" label-position="top">
      <div class="l-left">
        <span class="top"></span>
        <img src="@/img/logo5.png" alt />
      </div>
      <div class="l-right">
        <h4 class="h-title">服务治理平台-星辰111</h4>
        <div class="x-from ss-mr">
          <el-form-item prop="username" class="user-inp" style="position: relative;">
            <el-input size="small" placeholder="用户名" v-model="form.username" id="oUser" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="password" class="user-inp">
            <el-input size="small" id="testInput" placeholder="密码" v-model="form.password"></el-input>
          </el-form-item>
          <div class="git">
            <el-button type="danger" element-loading-background="rgba(226,32,39,0.3)" @click="handleLogin('form')"
              class="login-button" v-loading="loading" element-loading-spinner="el-icon-loading" v-if="!loading">登录</el-button>
            <el-button type="danger" element-loading-background="rgba(226,32,39,0.3)" class="login-button" v-loading="loading"
              v-else>登录中...</el-button>
          </div>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class HelloWorld extends Vue {
    test = "test vue-typescript11"
    loading = false
    form = {
      username: "",
      password: "",
    }

    mounted(){
    }

    handleLogin(form) {
      this.loading = true
    }
  }
</script>
