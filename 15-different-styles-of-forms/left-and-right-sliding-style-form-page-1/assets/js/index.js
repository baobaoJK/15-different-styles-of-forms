$(function() {

    // 背景块
    const backgroundBlock = $(".background");

    // 登录盒子
    const loginBox = $(".login-box");

    // 注册盒子
    const registerBox =  $(".register-box");

    // 注册切换按钮
    const changeRegister = $(".change-register");

    // 注册切换按钮事件
    changeRegister.click(function (e) { 
        e.preventDefault();

        backgroundBlock.addClass("change-register-background");
        loginBox.addClass("change-login-box");
        registerBox.addClass("change-register-box");
    });

    // 登录切换按钮
    const changeLogin = $(".change-login");

    // 登录切换按钮事件
    changeLogin.click(function (e) { 
        e.preventDefault();
        
        backgroundBlock.removeClass("change-register-background");
        loginBox.removeClass("change-login-box");
        registerBox.removeClass("change-register-box");
    });
});