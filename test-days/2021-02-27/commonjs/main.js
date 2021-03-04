

require('./a')
require('./b')


/**
 循环引用问题

$ node main.js

在 b.js 之中，a.done = false
b.js 执行完毕
在 a.js 之中，b.done = true
a.js 执行完毕
在 main.js 之中, a.done=true, b.done=true


CommonJS 模块的重要特性是加载时执行，即脚本代码在require的时候，就会全部执行。
一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出


ES6 处理“循环加载”与 CommonJS 有本质的不同。
ES6 模块是动态引用，如果使用import从一个模块加载变量（即import foo from 'foo'），
那些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。



// a.mjs
import {bar} from './b';
console.log('a.mjs');
console.log(bar);
export let foo = 'foo';

// b.mjs
import {foo} from './a';
console.log('b.mjs');
console.log(foo);
export let bar = 'bar';

让我们一行行来看，ES6 循环加载是怎么处理的。
首先，执行a.mjs以后，引擎发现它加载了b.mjs，因此会优先执行b.mjs，
然后再执行a.mjs。接着，执行b.mjs的时候，已知它从a.mjs输入了foo接口，
这时不会去执行a.mjs，而是认为这个接口已经存在了，继续往下执行。
执行到第三行console.log(foo)的时候，才发现这个接口根本没定义，因此报错


修改后
// a.mjs
import {bar} from './b';
console.log('a.mjs');
console.log(bar());
function foo() { return 'foo' }
export {foo};

// b.mjs
import {foo} from './a';
console.log('b.mjs');
console.log(foo());
function bar() { return 'bar' }
export {bar};
 */