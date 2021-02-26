/**
 * https://zhuanlan.zhihu.com/p/146097763
 */
const { 
  effect,
  reactive,
  shallowReactive,
  isReactive,
  readonly,
  shallowReadonly,
  isReadonly,
  isProxy,
  markRaw,
  toRaw
} = require('@vue/reactivity')

{ 
  /**
   * effect 定义副作用
   * reactive 定义响应式对象
   * shallowReactive 定义浅响应式
   */

   const obj = reactive({ test:'test' })
   const shallowObj = shallowReactive({ test:{ name:'lili' } })

   effect(() => {
     console.log(obj.test)
   })

   setTimeout(() => {
     obj.test = 'test change'
     obj.test = 'test change2'

   }, 1000);
   console.log(`obj 是否是响应式${isReactive(obj)}`)
   console.log(`obj 代理对象引用的原始对象 __v_raw`, obj.__v_raw)
}

{
  /**
   * 
   * readonly 
   * shallowReadonly
   */
  const obj = readonly({ test:'test' })
  const shallowObj = shallowReadonly({ test:{ name:'lili' } })
  shallowObj.test.name = 'change' //success
  obj.test = 10 //无效
  
  console.log(`obj 是否是只读对象${isReadonly(obj)}`)
  console.log(`obj 是否是代理对象${isProxy(obj)}`)
}

{
  /**
   * 哪些数据可以被代理
   * Object Array Set Map WeakMap WeakSet
   * 1、非Object.isFrozen
   * 2、非 VNode  __v_skip: true
   * 
   * markRaw 用于让数据不可被代理
   */
  const obj = { test:'test' }
  markRaw(obj)
  console.log(`markRaw obj`,obj)
}

{
  /**
   * toRaw 接受代理对象  获取原始对象
   */
}

{
  /**
   * 调度执行 effect - scheduler
   */

  let queue = []
  let isFlushing = false
  let queueJob = (job) => {
    if(!queue.includes(job))queue.push(job)
    if(!isFlushing){
      isFlushing = true
      Promise.resolve().then(res => {
        let fn 
        while (fn = queue.shift()) {
          fn()
        }
      })
    }
  }
  
  const obj = reactive({ test:'test scheduler' })
  effect(() => {
    console.log(obj.test)
  },{
    scheduler:queueJob
  })
  obj.test += '1'
  obj.test += '2'
}