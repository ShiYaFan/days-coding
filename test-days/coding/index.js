/**
 * 链表反转
 */
function reverseNode(head) {
  let pre = null
  let current = head
  while(current !== null){
    let temp = current.next 
    current.next = pre
    pre = current
    current = temp
  }
  return pre
}

/**
 * 快排
 */

function sort(array) {

  if (array.length <= 1) {
    return array
  }

  let middle = Math.floor(array.length / 2)

  let leftArray = []
  let rightArray = []
  //关键的一步
  let middleValue = array.splice(middle, 1)[0]

  for (let i = 0; i < array.length; i++) {

    if (array[i] < middleValue) {
      leftArray.push(array[i])
    }
    if (array[i] >= middleValue) {
      rightArray.push(array[i])
    }
  }
  return sort(leftArray).concat([middleValue], sort(rightArray))
}

console.log(sort([1, 3, 9, 2, 3]))

/**
 * 移动零
 */

function moveZero(array) {
  if (array.length === 0) {
    return array
  }
  let index = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      array[index] = array[i]
      index++
    }
  }

  while (index < array.length) {
    array[index++] = 0
  }
}
let array = [1, 2, 0, 3, 0, 4]
moveZero(array)

console.log(array)

/**
 * 盛最多水
 * [1,8,6,2,5,4,8,3,7]
 */
  //暴力破解
 function maxArea(height) {
  let max = 0
  for(let i = 0; i < height.length - 1; i++){
    for(let j = i + 1;j < height.length; j++){
      max = Math.max(max,(j-i) * (Math.min(height[j],height[i])))
    }
  }
  return max
 }
 //双指针破解


console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))