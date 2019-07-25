const ws = require('ws');
const WebSocketServer = new ws.Server({
    port: 3100
})
const sockets = []

function tellOther(data, type, igonre) {
    sockets.forEach((item) => {
        if (item != igonre) {
            item.send(JSON.stringify({
                data,
                type
            }))
        }
    })
}
WebSocketServer.on('connection', (socket) => {
    //console.log('连接成功')
    sockets.push(socket)
    tellOther("有一个人加入", "msg")
    tellOther(sockets.length, "num")
        // socket.on('message', () => {
        //     socket.send('你好连接成功')
        // })
        //socket.send('你好连接成功') //向浏览器发送消息
    socket.on('message', (data) => {
        //console.log(data)
        tellOther(data, "chat", socket)

    })
    socket.on('close', () => {
        //console.log("close")
        let index = sockets.findIndex(item => item === socket);
        if (index > 0) {
            sockets.splice(index, 1)
        }
        tellOther("有一个人退出", "msg")
        tellOther(sockets.length, "num")

    })

})