<!--
 * @Description: 登录页
 * @Author: your name
 * @Date: 2019-09-26 17:14:16
 * @LastEditTime: 2019-09-28 13:16:50
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="login">
    <el-card class="box-card">
      <div class="login_title_icon">
        <img src="../../assets/image/logo_index.png" alt="首页图标" />
      </div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
        class="demo-ruleForm"
      >
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="ruleForm.mobile" autocomplete="off" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input
            type="password"
            v-model="ruleForm.code"
            autocomplete="off"
            placeholder="请输入验证码"
            style="width:60%"
          ></el-input>
          <el-button type="primary" style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <el-checkbox v-model="ruleForm.check" style="float:left" name="type">
            我已阅读并同意
            <span>用户协议</span>和
            <span>隐私条款</span>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="passlogin" @click="passlogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {

  data () {
    // check时 定义的自定义方法
    var myCheckValidator = function (rules, value, callback) {
      if (value) {
        callback()
      } else {
        callback(new Error('你必须同意此选项'))
      }
    }

    return {
      ruleForm: {
        mobile: '13911111111',
        code: '',
        check: false
      },
      // 校验规则
      rules: {
        mobile: [
          { required: true, message: '输入的信息不能为空', trigger: 'blur' },
          // 验证的正则
          { pattern: /^1[3456789]\d{9}$/, message: '手机格式错误' }
        ],
        code: [
          { required: true, message: '验证码格式错误', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '验证码格式错误' }
        ],
        check: [
          {
            // 自定义函数
            validator: myCheckValidator
          }
        ]
      }
    }
  },
  methods: {
    /**
     * @description:登录验证
     * @param {type} validate: 手动校验表单数据
     * @return:
     */
    passlogin () {
      this.$refs.ruleForm.validate((isOk) => {
        if (isOk) {
          console.log('登录界面校验通过')
          // 进入到首页
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: url("../../assets/image/mylogin.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-card {
    width: 420px;
    height: 330px;
    .login_title_icon {
      width: 200px;
      height: 40px;
      margin: 10px auto;
      img {
        width: 100%;
      }
    }
    span {
      color: pink;
    }
    .passlogin {
      margin-left: -30px;
      width: 100%;
    }
  }
}
</style>
