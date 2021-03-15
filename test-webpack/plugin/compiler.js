
const { SyncHook,AsyncParallelHook } = require('tapable')


class Compiler {  


  constructor(options){  
    this.hooks = {  
      done: new SyncHook(['name','age']),
      start: new AsyncParallelHook(['name','age'])
    }
    let plugins = options.plugins
    if(plugins && plugins.length > 0){  
      plugins.forEach(item => item.apply(this))
    }
  }
  
  run(){  
    this.hooks.done.call('done',12)
    this.hooks.start.callAsync('start',14)
  }

}


class MyPlugin{  

  apply(compiler){  
    compiler.hooks.start.tap('start',(name,age) => {  
      console.log(name,age)
    })
    compiler.hooks.done.tap('done',(name,age) => {  
      console.log(name,age)
    })
  }
}

const options = {
  plugins:[
    new MyPlugin()
  ]
}

const compiler = new Compiler(options)
compiler.run()

