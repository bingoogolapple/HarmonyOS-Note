// 全局 JavaScript 逻辑和应用生命周期管理
export default {
    onCreate() { // 当应用创建时调用
        console.info("Application onCreate")
    },
    onDestroy() { // 当应用退出时触发
        console.info("Application onDestroy")
    }
}
