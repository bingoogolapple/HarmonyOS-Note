import router from '@system.router'

export default {
    // data 里取不到路由传递的参数，要在 onInit 以及之后的生命周期方法中才能获取路由参数
    data: {
    },
    onCompleteChanged(e) {
        console.log('完成状态变化：' +  JSON.stringify(e))
        this.todoItem.completed = e.checked
    },
    onInit() {
        console.log('代办详情 onInit' + JSON.stringify(this.todoItem))
    },
    onReady() {
        console.log('代办详情 onReady' + JSON.stringify(this.todoItem))
    },
    onShow() {
        console.log('代办详情 onShow')
    },
    onDestroy() {
        console.log('代办详情 onDestroy')
    },
    closePage() {
        console.log('代办详情 回到主页面')
        router.replace({
            uri: 'pages/index/index'
        })
    }
}
