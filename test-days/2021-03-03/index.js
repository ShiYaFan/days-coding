

/*
Iterator
Iterator 接口的目的，就是为所有数据结构，提供了一种统一的访问机制，即for...of循环

Symbol.iterator:() => { return () => {} }

Array Map Set String NodeList arguments Generator
*/

let obj = {

  [Symbol.iterator]: function* () {
    yield 1
    yield 2
    yield 3
  }

}

for (let value of obj) {
  console.log(value)
}

function* demo() {
  yield 1 + 1
  console.log('start')
  yield 'end'
}

for (let value of demo()) {
  console.log(value)
}



/**
 * proxy
 */

let proxy = new Proxy({}, {
  get: function (target, key, receiver) {
    return Reflect.get(target, key)
  },
  set: function (target, key, value, receiver) {
    return Reflect.set(target, key, value)
  },
  has: function(target,propKey) {
    return Reflect.has(target.propKey)
  },
  ownKeys: function(target){
    return Reflect.ownKeys(target)
  },
  deleteProperty: function(target,propKey){
    return Reflect.deleteProperty(target,propKey)
  }
})

/**
 * Reflect 
 * 1 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上
 * 2 修改某些Object方法的返回结果，让其变得更合理
 * 3 让Object操作都变成函数行为。某些Object操作是命令式，比如name in obj和delete obj[name]，而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)让它们变成了函数行为
 * 
 * 4 Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。
 *   这就让Proxy对象可以方便地调用对应的Reflect方法，完成默认行为，作为修改行为的基础。也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为
 */