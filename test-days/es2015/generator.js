/**
 由于 Generator 函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield表达式就是暂停标志。

遍历器对象的next方法的运行逻辑如下。

（1）遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。

（2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。

（3）如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。

（4）如果该函数没有return语句，则返回的对象的value属性值为undefined。
 */

const fs = require('fs')

const fetch = require('node-fetch')
/**
 * thunk函数
 */

 const thunk = function(fn){
   return function(...args) {
     return function(callback) {
       return fn.call(this,...args,callback)
     }
   }
 }

 const readFile = thunk(fs.readFile)

 readFile('./index.js','utf-8')((error,data) => {
  // console.log(data)
 })


 /**
  * 自动执行generator 自动执行器
  */

  const run = function(gen) {
    const g = gen()

    return new Promise(function(resolve) {
      function next(data) {
        let result = g.next(data)
        if (result.done) return resolve(result.value) //执行完成了
        //利用promise then函数将控制权交给generator
        result.value.then(function (data) {
          next(data)
        })
      }

      next()
    })
  }


  function *gen() {
    console.log('start')
    let str1 = yield fetch('https://v0.yiketianqi.com/api')
    console.log('middle')
    let str2 = yield fetch('https://v0.yiketianqi.com/api')
    console.log('end')
    return 'result'
  }


  let result = run(gen)
  result.then(data => {
    console.log(data)
  })

 /**
  * async 函数 内置执行器 更好的语义 更广的适用性 返回值为promise
  * 
  */