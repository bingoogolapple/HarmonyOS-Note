import router from '@system.router'
import app from '@system.app'
import configuration from '@system.configuration'
import utils from '../../common/utils.js'

export default {
// 页面的数据模型，类型是对象或者函数，如果类型是函数，返回值必须是对象。属性名不能以 $ 或 _ 开头，不要使用 for、if、show、tid 等保留字
    data: {
        customTitleColor: '#009688',
        todoList: [
            {
                id: 111,
                title: '代办1',
                completed: false
            }, {
                id: 222,
                title: '代办2',
                completed: true
            }, {
                id: 333,
                title: '代办3',
                completed: true
            }, {
                id: 444,
                title: '代办4',
                completed: true
            }, {
                id: 555,
                title: '代办5',
                completed: false
            }, {
                id: 666,
                title: '代办6',
                completed: false
            }, {
                id: 777,
                title: '代办7',
                completed: true
            }, {
                id: 888,
                title: '代办8',
                completed: false
            }, {
                id: 999,
                title: '代办9',
                completed: true
            }
        ]
    },
    onInit() { // 表示页面的数据已经准备好，可以使用 js 文件中的 data 数据。只触发一次
        /*
         获取当前应用配置文件中声明的信息 https://developer.harmonyos.com/cn/docs/documentation/doc-references/lite-apis-basic-features-context-0000001054443956
         {"appName":"智能穿戴-代办","versionName":"1.0.0","versionCode":100}
         appName 是 abilities 下 label 的值
         */
        const info = app.getInfo()
        // 获取应用当前的语言和地区。默认与系统的语言和地区同步 {"language":"en","countryOrRegion":"US,UM","dir":"ltr"}
        const localeInfo = configuration.getLocale()
        utils.log('调用工具类打印日志\n系统信息：' + JSON.stringify(info) + " \n语言和地区：" + JSON.stringify(localeInfo))

        console.log('主页 onInit')
    },
    onReady() { // 表示页面已经编译完成，可以将界面显示给用户。只触发一次
        console.log('主页 onReady')
    },
    onShow() { // JS UI 只支持应用同时运行并展示一个页面，当打开一个页面时，上一个页面就销毁了。当一个页面显示的时候，会调用 onShow
        console.log('主页 onShow')
    },
    onDestroy() { // 页面销毁时被调用
        console.log('主页 onDestroy')
    },
    openAddTodoPage() {
        console.log('跳转到添加代办页面')
        // 不支持 push？
        router.replace({
            uri: 'pages/add-todo/add-todo'
        })
    },
    openTodoDetailPage(todoItem) {
        console.log('跳转到代办详情页面 ' + JSON.stringify(todoItem))
        // 用应用内的某个页面替换当前页面，并销毁被替换的页面 https://developer.harmonyos.com/cn/docs/documentation/doc-references/lite-apis-basic-features-routes-0000001054283935
        router.replace({
            uri: 'pages/todo-detail/todo-detail',
            params: {
                todoItem: todoItem
            }
        })

        // 遍历 todoList 传递的 $item、todoItem 已经是可观察对象了，在 js 中修改 todoItem.title = '修改后'，页面也会自动刷新
        // todoItem.title = '修改后'
    },
    onSwipeRoot(e) {
        // e 中只存在 direction 这一个属性，值为 up、down、left、right
        console.log('滑动 ' + e.direction)
        if (e.direction === 'right') {
            this.appExit()
        }
    },
    appExit() {
        console.info('退出应用')
        // 退出当前 Ability
        app.terminate()
    },
    testApi() {
        router.replace({
            uri: 'pages/api/api'
        })
    }
}
