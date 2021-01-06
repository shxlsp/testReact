# testReact
react组件测试

```JavaScript
/**
 * 开发用到功能点
 * 
 * 测试把调用文件改到环境变量中
 * npm link
 * npm unlink   记得删除，否则全局的npm模块会一直存在 link的模块，且与本地文件一致
 * 
 * 文件调用声明
 * #!/usr/bin/env node
 * 使用node解析该文件
 * 
 *   "bin": { 
 *        "testReact": "src/index.js"
 *    },
 * 在bin下配置，会使配置文件，在npm install时，会在本地的node_modules/.bin/目录下添加 环境变量(执行文件)
 * 
*/
```
