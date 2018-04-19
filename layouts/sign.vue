<template>
  <div id="sign-template">
    <nuxt/>
  </div>
</template>

<script>

// // 首先引入bootstrap.css文件。加载bootstrap
// import Vue from 'vue'
// import Bootstrap  from 'bootstrap-vue'
// // 首先引入bootstrop.css文件加载bootstrop样式
// import 'bootstrap/dist/css/bootstrap.css'
// // 引入bootstrap-vue.css
// import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  components: {
   
  }
}
</script>

<style>
 /* body{
        background-color: #f1f1f1;
    } */
    .sign{
        height:100%;
        font-size: 14px;
        text-align: center;
         background-color: #f1f1f1;
         min-height: 750px;
    }
    .sign:before{
        content: '';
        display: inline-block;
        height: 85%;
        vertical-align: middle;

    }
    .sign img{
        width: 100px;
    }
    .sign .main{
        width: 400px;
        margin: 50px 0 0;
        padding: 50px 50px 30px;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 0 8px rgba(0, 0, 0, .1);
        display: inline-block;
    }
    .sign .logo{
        position: absolute;
        left: 50px;
        top: 56px;
    }
    .sign .main .title{
        margin: 0 auto 30px;
        color: #969696;
        font-size: 18px;
    }
    /* 两个点击选项的样式 */
    .sign .main h4 a{
        font-weight: 700;
        padding: 10px;
        color: #969696;
    }
    .sign .main h4 b{
        font-weight: 400;
}
    .sign .main h4 a.active{
        color:#ea6f5a;
        border-bottom: 2px solid #ea6f5a;
    }
    .sign .main h4 a:hover{
        border-bottom: 2px solid #ea6f5a;
    }
    /* 表格样式 */
    .sign .main form{
        color:#969696;
        margin: 0 0 30px;
    }
    .sign .main form .input-prepend{
        position: relative;
        width: 100%;
    }
    .sign .main form .input-prepend input {
        width: 100%;
        height: 50px;
        padding:4px 12px 4px 30px;
        border:1px solid #c8c8c8;
        border-radius: 2px;
        background-color: rgb(248, 248, 248);

    }
    .sign .main form .input-prepend:nth-of-type(1) input{
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    .sign .main form .input-prepend:nth-of-type(2) input{
        border-radius: 0 0 3px 3px;
    }
    .sign .main form .input-prepend i {
        position: absolute;
        left: 11px;
        top: 20px;
        font-size: 20px;
        color: #969696;
    }
    .sign .main form .remember{
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
    }
    .sign .main form .help{
    float: right;
    margin: 20xp 0;
    color: #969696;
   

}
    /* button 按钮设置*/
    .sign-in-btn{
        width:100%;
        margin:20px 0 0;
        padding: 10px 18px;
        text-align: center;
        color: #fff;
         background: #3194D0;
        border: 0;
        border-radius: 20px;
        font-size:1.25em;

    }
.sign-in-btn:hover{
        width:100%;
        margin:20px 0 0;
       padding: 10px 18px;
        text-align: center;
        color: #fff;
     background: #187cb7; 
         font-size:1.25em; 
          cursor: pointer;   
    }


    /* 左右两端的线 */
    p{
        color:  #969696;
        position: relative;
    }
      p:before,p:after{
            content: '';               
            position: absolute;       
            top: 52%;
            background: #969696;     
            width:23%;
            height: 1px;
    }
    p:before{
        left: 5%;
    }
    p:after{
        right:5%;
    }
/* .sign .main .more-sign p{
    position: relative;
    font-size: 14px;
    color: #b8b8b8;
}
.sign .main .more-sign p:before{
    content:'';
    width: 60px;
    border-bottom: 2px solid #b8b8b8;
    position: absolute;
    left: 10px;
    top: 10px;
}
.sign .mian .more-sign */




 /* 布局第三方登录图标 */
ul{
    display:inline-block;
    display: flex;
    justify-content: space-between;
    padding:5px;
 
}
.more-sign a:nth-of-type(1)>i{
    font-size: 1.8em;
    color: #E05244;
}
.more-sign li:nth-of-type(2)>a>i{
    font-size: 1.8em;
    color: #00BB29;
}
.more-sign li:nth-of-type(3)>a>i{
    font-size: 1.8em;
    color: #498AD5;
}
.more-sign li:nth-of-type(4)>a>i{
    font-size: 1em;
    color: #969696;
}

 /* 媒体查询 鉴定窗口大小 */
@media screen and (max-width:768px) {
    .sign{
    background-color: #fff;
       }
          .sign:before{
      
       
        height: 0;
       
    }
       .logo{
           display: none;
       }
        .sign .main{  
        background: #fff;
        box-shadow: 0 0 0px rgba(0, 0, 0, 0);
        /* display: inline-block; */
    }

}

  /* 注册 */

    .sign-up-btn{
        width:100%;
        margin:20px 0 0;
        padding: 10px 18px;
        text-align: center;
        color: #fff;
         background: #42C02E;
        border: 0;
        border-radius: 20px;
        font-size:1.25em;

    }
.sign-up-btn:hover{
        width:100%;
        margin:20px 0 0;
       padding: 10px 18px;
        text-align: center;
        color: #fff;
     background: #42C02E; 
         font-size:1.25em;
         cursor: pointer;  
    }
.sign .main form p.sign-up-msg{
    font-size: 12px;
    margin: 15px 0;
    text-align: center;
    line-height: 20px;
    color: #969696;


}
.sign .main form .send-ssm{
    position: absolute;
    right: 10px;
    top: 10px;
    width: 100px;
    height: 40px;
    line-height: 36px;
    border-radius: 20px;
    color: #fff; 
}


</style>
