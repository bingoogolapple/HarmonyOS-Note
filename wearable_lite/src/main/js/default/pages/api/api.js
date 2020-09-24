import storage from '@system.storage'
import file from '@system.file'

export default {
    data: {},
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
