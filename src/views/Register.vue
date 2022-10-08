<template>
    <div class="register-page-root">
        <el-card class="box-card">
            <h2>注册</h2>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-position="left"
                label-width="80px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="uname">
                    <el-input v-model="ruleForm.uname"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div class="btnGroup">
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button @click="goBack">返回</el-button>
            </div>
        </el-card>
    </div>
</template>
  
<script>
export default {
    data() {
        //第一次输入的密码验证
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                if (this.ruleForm.checkPass !== "") {
                    this.$refs.ruleForm.validateField("checkPass");
                }
                callback();
            }
        };
        //第二次输入的密码验证，需和第一次密码相同
        var validatePass2 = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请再次输入密码"));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                uname: "",
                pass: "",
                password: "",
            },
            rules: {
                uname: [
                    { required: true, message: "用户名不能为空！", trigger: "blur" },
                ],
                pass: [{ required: true, validator: validatePass, trigger: "blur" }],
                password: [
                    { required: true, validator: validatePass2, trigger: "blur" },
                ],
            },
        };
    },
    methods: {
        //验证表单
        submitForm(formName) {
            // 验证表单中的账号密码是否有效，因为在上面rules中定义为了必填 required: true
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        //重置表单
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        //返回上一页
        goBack() {
            this.$router.go(-1);
        },
    },
};
</script>
  
<style scoped lang="less">
.register-page-root {

    /* 设置登录面板居中，宽度为400px */
    .box-card {
        margin: auto auto;
        width: 400px;

        /* 设置登录面板中的表单居中 */
        .login-from {
            margin: auto auto;
        }
    }
}
</style>