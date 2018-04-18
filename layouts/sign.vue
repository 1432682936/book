<template>
  <div>
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
}
.sign{
    height: 100%;
    font-size: 14px;
    text-align: center;

}
.sign img{
    width: 100px;

}
.sign .main{
    width:400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
    display:inline-block;
    vertical-align: middle;
}
.sign .logo{
    position: absolute;
    left: 50px;
    top:50px;
}
.sign .main .title{
    margin: 0 auto 30px;
    color: #969696;
    font-size: 18px;

}
.sign .main h4 a{
    padding: 10px;
    font-weight: 700;
    color: #939393;
   
}
.sign .main h4 a.active{
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;

}
.sign .main h4 a:hover{
    border-bottom: 2px solid #ea6f5a;
}
.sign .main h4 a,.sign .main h4 b{
    padding: 10px;
    font-weight: 700;
    color: #939393;
   
}

.sign .main form{
    color: #969696;
    margin: 100%;

}

.sign .main form .input-prepend input{
    width: 100%;
    height: 50px;
    padding:4px 12px 4px 30px;
    border: 1px solid #c8c8c8;
    border-radius: 2px;
    background-color: rgb(248, 248, 248);

}
.sign .main form .input-prepend:nth-of-type(1) input{
    border-bottom: 0;
    border-radius: 2px 2px 0 0;

}

.sign .main form .input-prepend:nth-of-type(2) input{
    border-radius: 0 0 2px 2px;

}

.sign .main form .input-prepend i{
position: absolute;
left: 15px;
top:20px;
font-size: 20px;
color: #969696;
}
.sign .main form .remember{
    float: right;
    margin: 20xp 0;

}

.sign .main form .help{
    float: right;
    margin: 20xp 0;
    color: #969696;

}
.sign .main form .remember:hover{
   color: #333;
}

.sign .main form button{
    width: 100%;
    margin: 20px 0 0 ;
    padding: 9px 18px;
    text-align: center;
    color: #fff;
    background-color: #3194d0;
} */
 body{
        background-color: #f1f1f1;
    }
    .sign{
        height:100%;
        font-size: 14px;
        text-align: center;
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
    /* button */
    .sign .main form button{
        width:100%;
        margin:20px 0 0;
        padding: 9px 18px;
        text-align: center;
        color: #fff;
        background: #187cb7;
        border: 0;
        border-radius: 18px;
    }
.sign .main form button:hover{
        width:100%;
        margin:20px 0 0;
        padding: 9px 18px;
        text-align: center;
        color: #fff;
        background: #3194D0;
    }



</style>
