$(function() {

    // 表单快
    const formBlock = $(".form-block");

    // 注册切换按钮
    const changeRegister = $(".change-register");

    // 注册切换按钮事件
    changeRegister.click(function (e) { 
        e.preventDefault();

        formBlock.addClass("change-register-form");
    });

    // 登录切换按钮
    const changeLogin = $(".change-login");

    // 登录切换按钮事件
    changeLogin.click(function (e) { 
        e.preventDefault();
        
        formBlock.removeClass("change-register-form");
    });
});