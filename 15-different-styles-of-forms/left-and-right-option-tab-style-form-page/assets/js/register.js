$(function () {
    // 验证码
    let userCode = null;

    // 验证码按钮状态;
    let codeButtonState = false;

    // 用户名输入框
    const usernameInput = $(".register-username");

    // 密码输入框
    const passwordInput = $(".register-password");

    // 手机号输入框
    const phoneInput = $(".register-phone");

    // 验证码输入框
    const codeInput = $(".register-code");

    // 验证码按钮
    const codeButton = $(".register-code-button");

    // 注册按钮
    const registerButton = $(".register-button");

    // 验证码按钮事件
    codeButton.click(function (e) {
        e.preventDefault();

        // 获取手机号
        const phone = phoneInput.val();

        // 发送验证码
        sendCode(phone);
    });

    // 获取验证码函数
    function sendCode(phone) {
        // 判断手机号
        if (phone == null || phone == '') {
            alert("请输入手机号");
        }
        else {

            if (codeButtonState) { return; }

            // 生成验证码
            userCode = parseInt(Math.random() * (10000 - 1000)) + 1000;
            alert("验证码已发送！");
            alert("（手机）您的验证码为" + userCode);

            // 设置按钮禁用
            codeButton.attr("disabled", "disabled");
            codeButtonState = true;

            // 设置时间信息
            let times = 60;
            codeButton.val("(" + times + "s)");

            // 倒计时
            const buttonTime = setInterval(() => {
                if (times == 0) {
                    clearInterval(buttonTime);
                    codeButton.val("获取验证码");
                    codeButton.removeAttr("disabled");
                    codeButtonState = false;
                }
                else {
                    codeButton.val("(" + --times + "s)");
                }
            }, 1000);
        }
    }

    // 注册按钮事件
    registerButton.click(function (e) {
        e.preventDefault();

        // 用户名
        const username = usernameInput.val();

        // 密码
        const password = passwordInput.val();

        // 手机号
        const phone = phoneInput.val();

        // 验证码
        const code = codeInput.val();

        // 注册
        register(username, password, phone, code);
    });

    // 注册函数
    function register(username, password, phone, code) {
        if (username == null || username == '') {
            alert("请输入用户名");
        }
        else if (password == null || password == '') {
            alert("请输入密码");
        }
        else if (phone == null || phone == '') {
            alert("请输入手机号");
        }
        else if (code == null || code == '') {
            alert("请输入验证码");
        }
        else if (code != userCode) {
            alert("验证码不正确");
        }
        else {
            alert("注册成功");
        }
    }
});

