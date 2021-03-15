
import Icon from './assert/mgt-logo.png'
import { cube } from './math'
import { reactive } from '@vue/reactivity'

let a = reactive({ a:10 })
 console.log(a)

{
  const element = document.querySelector('.container');

  const myIcon = new Image();
  myIcon.src = Icon;
  // element.appendChild(myIcon)

  class People { 
    constructor(){
      console.log(cube(10))
     }
  }
  new People()
}


const withContainer = function(component){  
  
  return function(props) {  

    return <component {...props}/>
  }
}
