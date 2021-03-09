


class HelloWorldPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('Hello World Plugin', (
      compilation /* 在 hook 被触及时，会将 stats 作为参数传入。 */
    ) => {
      console.log('Hello World!');
    });
    compiler.hooks.emit.tapAsync('emit hook', (compilation,callback) => {  
      console.log('开始处理异步任务')
      setTimeout(() => {
        compilation.chunks.forEach(chunk => {  

          chunk.files.forEach(fileName => {  
            const source = compilation.assets[fileName].source() + '(() => {})()'
            console.log(fileName)
            // compilation.assets[fileName] = { 
            //   source:() => {  
            //     return source
            //   },
            //   size:() => {  
            //     return source.length
            //   }
            // }

          })

        })
        callback()
      }, 1000);
    }) 
  }
}

module.exports = HelloWorldPlugin;

/**
 * compiler对象
 * Compiler对象 与 Compilation 对象 的区别是：Compiler代表了是整个webpack从启动到关闭的生命周期。Compilation 对象只代表了一次新的编译
 * 
webpack在运行的过程中会广播事件，插件只需要关心监听它的事件，就能加入到这条生产线中。然后会执行相关的操作。

after-plugins     设置完一组初始化插件之后    compiler          sync
after-resolvers   设置完 resolvers 之后     compiler          sync
run               在读取记录之前             compiler          async
compile           在创建新 compilation之前  compilationParams  sync
compilation       compilation 创建完成      compilation        sync
emit              在生成资源并输出到目录之前  compilation        async
after-emit        在生成资源并输出到目录之后  compilation        async
done              完成编译                  stats              sync
 */
