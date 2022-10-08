<template>
    <div class="login-page-root">
        <el-card class="box-card">
            <h2>登录</h2>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-position="left"
                label-width="70px" class="login-from">
                <el-form-item label="用户名" prop="uname">
                    <el-input v-model="ruleForm.uname"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div class="btnGroup">
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <router-link to="/register">
                    <el-button style="margin-left:10px">注册</el-button>
                </router-link>
            </div>
        </el-card>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            ruleForm: {
                uname: "",
                password: "",
            },
            rules: {
                uname: [
                    { required: true, message: "用户名不能为空！", trigger: "blur" },
                ],
                password: [
                    { required: true, message: "密码不能为空！", trigger: "blur" },
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
                    //TODO 使用axios将登录信息发送到后台
                    this.$message({
                        message: 'submit',
                        type: "success",
                    });
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
    },
};
</script>
  
<style scoped lang="less">
.login-page-root {

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