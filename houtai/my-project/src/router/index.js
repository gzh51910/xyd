import Vue from 'vue'
import VueRouter from 'vue-router'

// 安装插件
Vue.use(VueRouter)

import landing from "../project/landing.vue"
// import  Account from "../project/landing"
import admin from "../project/admin.vue"
import defa from "../project/defa.vue"
import per from "../project/per"
import Acc from "../project/Acc.vue"
import approval from "../project/approval.vue"
import note from "../project/note.vue"
import user from "../project/user.vue"
// 实例化VueRouter并配置参数


/**
 * name  编程式跳转地址
 * path  声明式跳转地址
 * component 跳转路由地址
 */

const router = new VueRouter({

    routes: [{
        name: "landing",
        path: "/landing",
        component: landing
    },
    {
        name: "/",
        path: "/",
        component: landing
    },
    {
        name: "admin",
        path: "/admin",
        component: admin,
        children: [{
            name: "defa",
            path: "/defa",
            component: defa
        }, {
            name: "per",
            path: "/Per",
            component: per
        }, {
            name: "Acc",
            path: "/Acc",
            component: Acc
        }, {
            name: "approval",
            path: "/approval",
            component: approval
        }, {
            name: "note",
            path: "/note",
            component: note
        },{
            name:"user",
            path:"/user",
            component:user
        }]
    },

    ]
})


// 全局路由守卫
router.beforeEach((to, from, next) => {
    const nextRoute = ['Acc', 'admin', 'approval', 'defa', "per","user"]
    // 需要登录的页面
    let isLogin = localStorage.getItem("admin");
    window.console.log(isLogin)
    // 判断是否登录，本地存储有用户数据则视为已经登录
    // 未登录状态；当路由到 nextRoute 指定页时，跳转至 UserLogIn
    if (nextRoute.indexOf(to.name) >= 0) {
        if (!isLogin) {
            if (from.name === 'UserLogIn') {
                next('/')
                return
            }
            // 登录后，跳到到当前页面
            router.push({
                name: 'UserLogIn',
                params: { redirect: to.fullPath }
            })
        }
    }
    // 已登录状态；当路由到 UserLogIn 时，跳转至当前页面
    if (to.name === 'UserLogIn') {
        if (isLogin) {
            next('/')
            return
        } else {
            // 失败就跳到登陆界面
            next("landing")
            return
        }

    }
    next() // 必须使用 next ,执行效果依赖 next 方法的调用参数
})


export default router