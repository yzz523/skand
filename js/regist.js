 //验证码
 const code = document.querySelector('.code')
 //通过变量来控制 防止多次点击
 let flag = true
 code.addEventListener('click', function () {
     if (flag) {
         flag = false
         //全局变量
         let i = 5
         //提升交互体验
         code.innerHTML = `0${i}秒后重新获取`
         const timesId = setInterval(function () {
             i--
             code.innerHTML = `0${i}秒后重新获取`
             if (i === 0) {
                 clearInterval(timesId)
                 code.innerHTML = '重新获取'
                 flag = true
             }
         }, 1000)
     }
 })


 //用户名
 const uname = document.querySelector('[name=uname]')
 // change 事件 内容 值 发生变化
 uname.addEventListener('change', verifyName)
 //封装verifyName函数
 function verifyName() {
     const span = uname.nextElementSibling
     //定义用户名规则 
     const reg = /^[a-zA-Z0-9-_]{6,10}$/
     //如果正则表达式与指定的字符串匹配 返回 true
     if (!reg.test(uname.value)) {
         span.innerHTML = '输入有误，请输入6-10位'
         return false
     }
     //输入正确
     span.innerHTML = ''
     return true

 }



 //手机号
 const phone = document.querySelector('[name=phone]')
 // change 事件 内容 值 发生变化
 phone.addEventListener('change', verifyPhone)
 //封装verifyPhone函数
 function verifyPhone() {
     const span = phone.nextElementSibling
     //定义用户名规则  手机号 \d 数字
     const reg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
     //如果正则表达式与指定的字符串匹配 返回 true
     if (!reg.test(phone.value)) {
         span.innerHTML = '请输入正确的手机号'
         return false
     }
     //输入正确
     span.innerHTML = ''
     return true

 }



 //验证码
 const codeInput = document.querySelector('[name=code]')
 // change 事件 内容 值 发生变化
 codeInput.addEventListener('change', verifyCode)
 //封装verifyCode函数
 function verifyCode() {
     const span = codeInput.nextElementSibling
     //定义用户名规则  \d 数字  6位数验证码
     const reg = /^\d{6}$/
     //如果正则表达式与指定的字符串匹配 返回 true
     if (!reg.test(codeInput.value)) {
         span.innerHTML = '请输入正确的验证码'
         return false
     }
     //输入正确
     span.innerHTML = ''
     return true

 }




 //密码
 const password = document.querySelector('[name=password]')
 // change 事件 内容 值 发生变化
 password.addEventListener('change', verifyPwd)
 //封装verifyPass函数
 function verifyPwd() {
     const span = password.nextElementSibling
     // console.log(11);
     //定义用户名规则  \d 数字  6位数验证码 
     const reg = /^[0-9a-zA-Z-_]{6,20}$/
     //如果正则表达式与指定的字符串匹配 返回 true
     if (!reg.test(password.value)) {
         span.innerHTML = '请输入6-20位的数字字母符号组成'
         return false
     }
     //输入正确
     span.innerHTML = ''
     return true

 }
 //再次验证密码
 const confirm = document.querySelector('[name=confirm]')
 // change 事件 内容 值 发生变化
 confirm.addEventListener('change', verifyConfirm)
 //封装verifyPass函数
 function verifyConfirm() {
     const span = confirm.nextElementSibling
     //如果正则表达式与指定的字符串匹配 返回 true
     if (confirm.value !== password.value) {
         span.innerHTML = '两次密码不一致'
         return false
     }
     //输入正确
     span.innerHTML = ''
     return true

 }

 //同意
 //看看有有没有包含某个类 有返回 true
 // .classlst.contains
 const checked = document.querySelector('.ui-checkbox')
 // checked.checked = true

 // console.log(checked.checked);
 //提交
 const info = document.querySelector('form')
 // console.log(info);
 info.addEventListener('submit', function (e) {
    e.preventDefault()
     //判断是否勾选 同意模块
     if (!checked.checked) {
         alert('请勾选用户协议')
         //阻止提交
         e.preventDefault()
     }
     //判断上面每一个框框 是否正确 
     // 返回 true 或者 false
     // console.log(verifyName());
     if(!verifyName()) e.preventDefault()
     if(!verifyPhone()) e.preventDefault()
     if(!verifyPwd()) e.preventDefault()
     if(!verifyCode()) e.preventDefault()
     if(!verifyConfirm()) e.preventDefault()
     if(verifyName() && verifyPhone() && verifyPwd() && verifyCode() && verifyConfirm() && checked.checked) alert('注册成功')
 })