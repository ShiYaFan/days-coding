
/**
 * 中间件的实现原理
 */
const compose = require('koa-compose');

const app = {
  middles:[],
  use(fn){
    this.middles.push(fn)
    return this
  },
  start(){
    
    return compose(this.middles)('content')
  }
}


app.use(async (content,next) => {
  console.log('start1')
  await next()
  console.log('start2')
});

app.use(async (content, next) => {
  console.log('end2')
  console.log(content)
});

app.start()

