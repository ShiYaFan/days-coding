
/**
 * http模块
 * 
 */

const { proxyRefs } = require('@vue/reactivity')
const http = require('http')


const app = http.createServer((req, res) => {
  if ('/remote' === req.url) {
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end('hello world')
    return
  } else {
    proxy(req, res)
  }
})


function proxy(req, res) {
  console.log(req.url)
  let options = {
    host: req.host,
    port: 3300,
    headers: req.headers,
    path: '/remote',
    agent: false,
    method: 'GET'
  }

  let httpProxy = http.request(options,response => {
    let array = []
    response.on('data',(chunk) => {
      array.push(chunk)
    })
    response.on('end',() => {
      console.log(Buffer.concat(array).toString())
    })
    response.pipe(res)
  })
  req.pipe(httpProxy)
}

app.listen(3300)



/*
node 事件循环

function con(){
   console.log(arguments[0])
}
process.nextTick(function A(){
   con(1);
   setImmediate(function(){
       con("immediate1")
   })
})
setTimeout(function(){
   con("timeOut")
},0)
setImmediate(function(){
   con("immediate2")
})
setImmediate(function(){
   con("immediate3")
})

1 timeout immediate2 immediate3 immediate1

process.nextTick 是执行完所有同步任务,再执行其中内容;
setTimeout,setImmediate 恰巧又不是同步任务(或者说优先级不够 process.nextTick 高),
所以会先执行 process.nextTick 中的 function A, 所以最先输出的是 1,然后把 immediate1 放入宏队列
然后开始执行宏任务队列
由于 setTimeout 的优先级高于 setIImmediate 所以先输出 timeOut,
然后继续队列,输出 immediate2,输出 immediate3,
最后是队列最后的 immediate1


宏任务: script, setTimeout, setInterval, setImmediate, I/O, UI rendering;
微任务: process.nextTick, Promise, Object.observe, MutationObserver;
*/


/**
 * http协议的知识
 */