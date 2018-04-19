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
                 <nuxt-link  to="/sign-in">登录</nuxt-link>
                 ·
                   <nuxt-link  to="/sign-up" class="active">注册</nuxt-link> 
              </h4>
          </div>
          <form action="">
                    <div class="input-prepend">
                        <input type="text"  placeholder="你的昵称">
                        <i class="fa fa-user"></i>
                    </div>
                   <div class="input-prepend">
                        <input type="text"  placeholder="手机号">
                        <i class="fa fa-phone" ></i>
                    </div>
                    <div class="input-prepend" >
                        <input type="text"  placeholder="手机验证码">
                        <i class="fa fa-shield" ></i>
                    </div>
                    <div class="input-prepend">
                        <input type="text"  placeholder="设置密码">
                        <i class="fa fa-lock"></i>
                    </div>               
                    <button class="sign-up-btn">注册</button>
                    <p class="sign-up-msg">
                        点击注册即表示您同意
                    </p>
                </form>
             

          <div class="more-sign">
              <p class="">社交账号登录</p>
              <ul>
                  <li>
                      <nuxt-link to="/">
                      <i class="fa fa-weibo"></i>
                      </nuxt-link>
                  </li>
                   <li>
                      <nuxt-link to="/">
                      <i class="fa fa-weixin"></i>
                      </nuxt-link> 
                  </li>
                   <li>
                      <nuxt-link to="/">
                      <i class="fa fa-qq"></i>
                      </nuxt-link>                     
                  </li>
                  <li>
                      <nuxt-link to="/">
                      <i>其他</i>
                      </nuxt-link>                     
                  </li>
              </ul>
          </div>
      </div>
    </div>





</template>
<script>
     export default{
        //  设置标题头
        head:{
    title:'注册-简书',
    meta:[
        {charst:'utf-8'},
        {name:'keyword',content:'注册界面'},
        {name:'description',content:'注册简书'},
        {name:'anthor',content:'杨'},
    ]
}
    }
</script>
