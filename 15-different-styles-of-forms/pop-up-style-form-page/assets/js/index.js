$(function() {
    // 遮罩
    var mask = $(".mask");

    // 登录表单弹出按钮
    var login = $(".login");

    // 登录表单关闭按钮
    var loginClose = $(".login-close");

    // 登录表单盒子
    var loginBox = $(".login-box");

    // 登录表单弹出按钮事件
    login.click(function (e) { 
        e.preventDefault();
        
        loginBox.css("display", "flex");    
        mask.css("display", "block");
    });

    // 登录表单关闭按钮事件
    loginClose.click(function (e) { 
        e.preventDefault();
        
        loginBox.css("display", "none");
        mask.css("display", "none");
    });

    // 注册表单弹出按钮
    var register = $(".register");

    // 注册表单关闭按钮
    var registerClose = $(".register-close");

    // 注册表单盒子
    var registerBox = $(".register-box");

    // 注册表单弹出按钮事件
    register.click(function (e) {
        e.preventDefault();

        registerBox.css("display", "flex");
        mask.css("display", "block");
    });

    // 注册表单关闭按钮事件
    registerClose.click(function (e) {
        e.preventDefault();

        registerBox.css("display", "none");
        mask.css("display", "none");
    });

    // 重置密码表单弹出按钮
    var reset = $(".reset");

    // 重置密码表单关闭按钮
    var resetClose = $(".reset-close");

    // 重置密码表单盒子
    var resetBox = $(".reset-box");

    // 重置密码表单弹出按钮事件
    reset.click(function (e) {
        e.preventDefault();

        resetBox.css("display", "flex");
        mask.css("display", "block");
    });

    // 重置密码表单关闭按钮事件
    resetClose.click(function (e) {
        e.preventDefault();

        resetBox.css("display", "none");
        mask.css("display", "none");
    });
});