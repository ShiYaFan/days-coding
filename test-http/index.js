
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