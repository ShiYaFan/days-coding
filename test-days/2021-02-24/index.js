
/** 
 * 实现bind函数
 */
Function.prototype.bind = function (target, ...array1) {
  let self = this

  let func = function (...array2) {
    return self.apply(this instanceof func ? this : target, array2.concat(array1))
  }

  func.prototype = Object.create(self.prototype)
  func.prototype.constructor = func

  return func
}

/** 
 * 实现 new 操作符
 */
function newObject(Func, ...array) {
  let obj = {}
  obj.__proto__ = Func.prototype

  let result = Func.apply(obj, array)
  if (result instanceof Object) return result
  return obj
}


/**
 * 左右 開始遍历
 */
let array = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0, j = array.length - 1; i < j;) {
  console.log(array[i] * array[j])
  i++
  j--
}

//num1 num2 必须为字符串  大数相加
function towBigNumberAdd(num1, num2) {

  //补0
  let i = 0
  while (i < num1.length || i < num2.length) {
    if (!num1[i]) {
      num1 = '0' + num1
    }
    if (!num2[i]) {
      num2 = '0' + num2
    }
    i++
  }

  let carried = 0, res = []

  for (let i = num1.length; i > -1; i--) {
    let sum = carried + num1[i] + num2[i]
    if (sum > 9) {
      carried = 1
    } else {
      carried = 0
    }
    res[i] = sum % 10
  }
  if (carried === 1) {
    res.unshift(1)
  }
  return res.join('')

}

