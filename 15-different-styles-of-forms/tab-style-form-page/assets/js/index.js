$(function () {

    // 登录切换按钮
    var loginChange = $(".login");

    // 注册切换按钮
    var registerChange = $(".register");

    // 重置密码切换按钮
    var forgetChange = $(".forget");

    // 登录表单盒子
    var loginFormBox = $(".login-box");

    // 注册表单盒子
    var registerFormBox = $(".register-box");

    // 重置密码盒子
    var forgetFormBox = $(".forget-box");

    // 登录切换按钮事件
    loginChange.click(function (e) {
        e.preventDefault();

        loginFormBox.siblings().css("display", "none");
        loginFormBox.css("display", "flex");
        loginChange.siblings().removeClass("active");
        loginChange.addClass("active");
    });

    // 注册切换按钮事件
    registerChange.click(function (e) {
        e.preventDefault();

        registerFormBox.siblings().css("display", "none");
        registerFormBox.css("display", "flex");
        registerChange.siblings().removeClass("active");
        registerChange.addClass("active");
    });

    // 重置密码切换按钮事件
    forgetChange.click(function (e) {
        e.preventDefault();

        forgetFormBox.siblings().css("display", "none");
        forgetFormBox.css("display", "flex");
        forgetChange.siblings().removeClass("active");
        forgetChange.addClass("active");
    });
});