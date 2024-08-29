## ElementUI

## 标签

### el-dialog

```vue
<!--
通过 openDialog 方法将 dialogVisible 属性设为 true，从而显示对话框。
对话框的标题通过 title 属性设置，内容可以放在对话框标签内部。
当点击对话框的关闭按钮或者点击遮罩层时，会触发 @close 事件，
通过 closeDialog 方法将 dialogVisible 属性设为 false，从而关闭对话框
-->
<template>
  <div>
    <el-button @click="openDialog">打开对话框</el-button>
    <el-dialog
      :visible="dialogVisible"
      title="对话框标题"
      @close="closeDialog"
    >
      <p>对话框内容</p>
    </el-dialog>
  </div>
</template>
<script>
    export default {
      data() {
        return {
          dialogVisible: false, // 控制对话框的显示/隐藏
        };
      },
      methods: {
        openDialog() {
          this.dialogVisible = true; // 打开对话框
        },
        closeDialog() {
          this.dialogVisible = false; // 关闭对话框
        },
      },
    };
</script>
```

```vue
<!--
@keyup.enter.native:用于监听键盘按下 Enter 键的事件，并触发相应的处理函数handleLogin
-->
<el-input name="password"
                    :type="pwdType"
                    @keyup.enter.native="handleLogin"
                    v-model="loginForm.password"
                    autoComplete="on"
                    placeholder="请输入密码">
```

### el-dropdown

```vue
<!-- 下拉菜单容器 -->
<!-- 通过 <span> 元素设置了触发下拉菜单展示的文本 -->
<el-dropdown class="avatar-container" trigger="click">
    <span class="el-dropdown-link">
      下拉菜单 <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <div class="avatar-wrapper">
        <img class="user-avatar" :src="avatar">
        <i class="el-icon-caret-bottom"></i>
    </div>
    <el-dropdown-menu class="user-dropdown" slot="dropdown">
    </el-dropdown-menu>
</el-dropdown>
```

### el-dropdown-menu

```vue
<!-- 下拉菜单 -->
<!-- el-dropdown-item定义菜单项 -->
<!-- router-link组件用于创建导航链接。通过 to 属性指定要导航到的目标路由路径 -->
<el-dropdown-menu class="user-dropdown" slot="dropdown">
    <router-link class="inlineBlock" to="/">
        <el-dropdown-item>
            首页
        </el-dropdown-item>
    </router-link>
    <el-dropdown-item divided>
        <span @click="logout" style="display:block;">退出</span>
    </el-dropdown-item>
</el-dropdown-menu>
```

### router-link

```vue
<!-- 
router-link组件用于创建导航链接。通过 to 属性指定要导航到的目标路由路径
当用户点击 <router-link> 时，Vue Router 会根据指定的路径加载对应的组件，并渲染到应用的视图中
-->
<template>
  <div>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
  </div>
</template>
```



## 对象

### getters对象

```javascript
/*
这是一个使用Vuex的getters对象，它定义了一些计算属性，用于获取状态中的数据。这些属性可以在应用的其他组件中使用
Vue组件中使用this.$store.getters来获取这些属性的值。如，在组件中使用this.$store.getters.token来获取用户的访问令牌
*/
const getters = {
  //获取应用状态中的app.sidebar，侧边栏的状态
  sidebar: state => state.app.sidebar,
  //获取应用状态中的app.device，设备的状态
  device: state => state.app.device,
  //获取用户状态中的user.token，用户的访问令牌
  token: state => state.user.token,
  //获取用户状态中的user.avatar，用户的头像
  avatar: state => state.user.avatar,
  //获取用户状态中的user.name，用户的名称
  name: state => state.user.name,
  //获取用户状态中的user.roles，用户的角色
  roles: state => state.user.roles,
  //获取权限状态中的permission.addRouters，添加的动态路由
  addRouters: state => state.permission.addRouters,
  //获取权限状态中的permission.routers，所有的路由
  routers: state => state.permission.routers
}
export default getters
```

```javascript
//如何设置这些状态的值？
1. 在actions中进行异步操作
// 在actions中定义一个方法，用于获取数据并设置状态
actions: {
    // 登录
    Login({commit}, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          const tokenStr = data.tokenHead + data.token
          commit('SET_TOKEN', tokenStr)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
}
mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
}
2. 在组件中使用commit方法设置状态
export default {
  methods: {
    login() {
      // 在组件的方法中调用commit方法设置状态
      this.$store.commit('setToken', 'abcdefg');
    }
  }
}
```