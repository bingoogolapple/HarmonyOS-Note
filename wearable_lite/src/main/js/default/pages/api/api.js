import storage from '@system.storage'
import file from '@system.file'

export default {
    data: {
        title_new: ''
    },
    onInit() {
        this.title_new = '追加-' + this.$t('strings.title')
        // 直取不到 i18n 中的 title，需要通过 $t 来获取
        console.log('直接获取 title：' + this.title)
        console.log('title：' + this.$t('strings.title'))
        console.log('subtitle：' + this.$t('strings.subtitle'))
        // 未定义时返回值就是传入的 key strings.xxxx
        console.log('未定义：' + this.$t('strings.xxxx'))
    },
    testWriteText() {
        file.writeText({
            uri: 'internal://app/workspace/test.txt',
            text: 'Text that just for test.',
            success: function () {
                console.log('call writeText success.')
            },
            fail: function (data, code) {
                console.error('call fail callback fail, code: ' + code + ', data: ' + data)
            }
        })
    },
    testReadText() {
        file.readText({
            uri: 'internal://cache/workspace/text.txt',
            success: function (data) {
                console.log('call readText success: ' + data.text)
            },
            fail: function (data, code) {
                console.error('call fail callback fail, code: ' + code + ', data: ' + data)
            }
        })
    },
    testSetStorage() {
        storage.set({
            key: 'storage_key',
            value: 'storage value',
            success: function () {
                console.log('call storage.set success.')
            },
            fail: function (data, code) {
                console.log('call storage.set fail, code: ' + code + ', data: ' + data)
            }
        })
    },
    testGetStorage() {
        storage.get({
            key: 'storage_key',
            success: function (data) {
                console.log('call storage.get success: ' + data)
            },
            fail: function (data, code) {
                console.log('call storage.get fail, code: ' + code + ', data: ' + data)
            },
            complete: function () {
                console.log('call complete')
            }
        })
    }
}
