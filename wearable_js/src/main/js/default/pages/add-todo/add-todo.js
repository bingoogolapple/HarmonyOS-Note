import router from '@system.router'
import storage from '@system.storage'

export default {
    data: {
        typeList: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'TypeScript'],
        type: 'HTML',
        time: "1:30"
    },
    onTypeChanged(e) {
        // {"newValue":"学习 Webpack","newSelected":3}
        console.log(JSON.stringify(e))
        this.type = e.newValue
    },
    onTimeChanged(e) {
        // {"hour":3,"minute":2}
        console.log(JSON.stringify(e))
        this.time = `${e.hour}:${e.minute}`
        console.log(this.time)
    },
    onInit() {
        console.log('添加代办 onInit')
    },
    onReady() {
        console.log('添加代办 onReady')
    },
    onShow() {
        console.log('添加代办 onShow')
    },
    onDestroy() {
        console.log('添加代办 onDestroy')
    },
    addTodo() {
        console.log('添加代办', this.type, this.time)

        storage.get({
            key: 'todo_list',
            success: function (data) {
                console.log('获取代办列表成功: ' + data);
                let todoList
                if (!data) {
                    todoList = []
                } else {
                    todoList = JSON.parse(data)
                }
                todoList.push({
                    id: new Date().getTime(),
                    title: `${this.type} - ${this.time}`,
                    completed: false
                })
                this.saveTodo(todoList)
            },
            fail: function (data, code) {
                // TODO 为什么必现 200 错误？
                console.log('获取列表失败, code: ' + code + ', data: ' + data);
            },
            complete: function () {
                console.log('获取列表完成');
            }
        })
    },
    saveTodo(todoList) {
        storage.set({
            key: 'todo_list',
            value: JSON.stringify(todoList),
            success: function () {
                console.log('添加代办成功')
                this.closePage()
            },
            fail: function (data, code) {
                console.log('添加代办失败, code: ' + code + ', data: ' + data)
            }
        })
    },
    closePage() {
        router.replace({
            uri: 'pages/index/index'
        })
    }
}
