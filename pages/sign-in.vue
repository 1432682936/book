<template>
  <div class="sign">
      <div class="logo">
          <nuxt-link to="/">
          <img src="~assets/img/logo.png" alt="">
          </nuxt-link>
      </div>

      <div class="main">
          <div class="title">
              <h4>
                 <nuxt-link class="active" to="/sign-in">登录</nuxt-link>
                 ·
                   <nuxt-link  to="/sign-up" class="">注册</nuxt-link> 
              </h4>
          </div>
          <form action="">
                    <div class="input-prepend">
                        <input type="text"  placeholder="手机号或邮箱">
                        <i class="fa fa-user"></i>
                    </div>
                    <div class="input-prepend">
                        <input type="text"  placeholder="密码">
                        <i class="fa fa-lock"></i>
                    </div>
                    <div class="remember">
                        <div class="checkbox">
                            <input type="checkbox" id="checkbox">
                            <label for="checkbox">记住我</label>
                        </div>
                        <div class="trouble">
                            <nuxt-link class="help" to='/'>
                                    登录遇到问题?
                            </nuxt-link>
                        </div>
                    </div>                    
                    <button>登录</button>
                </form>
             

          <div class="more-sign">
              <p class="">社交账号登录</p>
              <ul>
                  <li>
                      <nuxt-link to="/">
                      <i class="fa fa-weixin"></i>
                      </nuxt-link>
                  </li>
                   <li>
                      <nuxt-link to="/">
                      <i class="fa fa-weibo"></i>
                      </nuxt-link> 
                  </li>
                   <li>
                      <nuxt-link to="/">
                      <i class="fa fa-qq"></i>
                      </nuxt-link>                     
                  </li>
              </ul>
          </div>
      </div>
    </div>
</template>
<script>
export default {
  // 修改当前页面默认模板为sign.vue
  // 不修改的话是defa聊天.vue
  layout: "sign",
  head: {
    title: "登录-简书",
    meta: [
      { charst: "utf-8" },
      { name: "keyword", content: "登录界面" },
      { name: "description", content: "登录简书" },
      { name: "anthor", content: "杨" }
    ]
  }
};
</script>
<style scoped>

</style>
