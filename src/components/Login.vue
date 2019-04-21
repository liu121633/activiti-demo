<template>
    <div style="
    height: 100%;
    width: 100%;
    position: absolute;;">
        <img :src="require('@/assets/backImages.jpg')"
             style="z-index: -1;width: 100%; height: 100%;
             background-color: #B3C0D1;
              background-size:100% 100%;
              position: absolute">
        <div id="login-div">
            <el-form ref="user" :rules="rules" :model="userLoginInfo" label-width="80px">
                <el-form-item color="red" label="登录账号" prop="loginName">
                    <el-input v-model="userLoginInfo.loginName"></el-input>
                </el-form-item>
                <el-form-item label="登录密码" prop="loginPassWord">
                    <el-input v-model="userLoginInfo.loginPassWord"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('user')">登录</el-button>
                    <el-button @click="resetForm('user')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        mounted: function () {
        },
        data: function () {
            const userLoginNameReg = /^[a-zA-Z0-9_-]{4,16}$/;
            const userLoginPassWordReg = /^[\w_-]{6,16}$/;
            const validateUserLoginName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入账号'))
                }
                if (!userLoginNameReg.test(value)) {
                    callback(new Error('4到16位（字母，数字，下划线，减号）'))
                } else {
                    callback()
                }
            };
            const validateUserLoginPassWord = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入密码'))
                }
                if (!userLoginPassWordReg.test(value)) {
                    callback(new Error('密码格式 最短6位，最长16位 {6,16}'))
                } else {
                    callback()
                }
            };
            return {
                userLoginInfo: {
                    loginName: "123456",
                    loginPassWord: "123456"
                },
                rules: {
                    loginName: [{required: true, validator: validateUserLoginName, trigger: 'blur'}],
                    loginPassWord: [{required: true, validator: validateUserLoginPassWord, trigger: 'blur'}]
                }
            }
        },
        methods: {
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            submitForm: function (user) {
                this.$refs[user].validate((valid) => {
                    if (valid) {
                        const domain = "http://127.0.0.1:8848/auth/login";
                        this.fetch.post("http://127.0.0.1:8848", "/auth/login", {
                                userName: this.$data.userLoginInfo.loginName,
                                passWord: this.$data.userLoginInfo.loginPassWord
                            },
                            res => {
                                console.info(res)
                                this.$notify({
                                    title: '成功',
                                    message: '这是一条成功的提示消息',
                                    type: 'success'
                                });
                            }
                        );

                        // Cookies.set("isLogin", true)
                        // Cookies.set("userInfo", true)
                        // this.$router.push({name: "index"})
                    } else {
                        this.$message.error('请完整填写表单');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style>
    .el-form-item__label {
        color: #000;
    }

    #login-div {
        width: 300px;
        padding-top: 15%;
        padding-left: 30%;
        margin: 0 auto;
    }

</style>