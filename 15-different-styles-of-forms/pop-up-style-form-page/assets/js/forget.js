$(function () {
    // 验证码
    let resetUserCode = null;

    // 验证码按钮状态;
    let codeButtonState = false;

    // 用户名输入框
    const usernameInput = $(".reset-username");

    // 密码输入框
    const passwordInput = $(".reset-password");

    // 手机号输入框
    const phoneInput = $(".reset-phone");

    // 验证码输入框
    const codeInput = $(".reset-code");

    // 验证码按钮
    const codeButton = $(".reset-code-button");

    // 重置密码按钮
    const resetButton = $(".reset-button");

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
            resetUserCode = parseInt(Math.random() * (10000 - 1000)) + 1000;
            alert("验证码已发送！");
            alert("（手机）您的验证码为" + resetUserCode);

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

    // 重置密码按钮事件
    resetButton.click(function (e) {
        e.preventDefault();

        // 用户名
        const username = usernameInput.val();

        // 密码
        const password = passwordInput.val();

        // 手机号
        const phone = phoneInput.val();

        // 验证码
        const code = codeInput.val();

        // 重置密码
        reset(username, password, phone, code);
    });

    // 重置密码函数
    function reset(username, password, phone, code) {
        if (username == null || username == '') {
            alert("请输入要重置密码的用户名");
        }
        else if (password == null || password == '') {
            alert("请输入新密码");
        }
        else if (phone == null || phone == '') {
            alert("请输入用户名注册的手机号");
        }
        else if (code == null || code == '') {
            alert("请输入验证码");
        }
        else if (code != resetUserCode) {
            alert("验证码不正确");
        }
        else {
            alert("重置成功");
        }
    }
});

