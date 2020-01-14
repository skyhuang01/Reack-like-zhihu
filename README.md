This project was bootstrapped with [Create React App](https://github.com/skyhuang01/Reack-like-zhihu.git).

### 初始化npm bower

cd Reack-like-zhihu

```javascript
npm init  //一直enter，默认就好

bower init //同上

```

### 安装必要的开发工具包

- gulp ：基于流的自动化构建工具
- gulp-browserify ：前端模块及依赖管理
- gulp-concat ：文件合并插件
- gulp-react ：JSX语法转化工具
- gulp-connect ：构建本地开发Web服务器
- lodash ：一个具有一致接口、模块化、高性能等特性的 JavaScript 工具库
- reactify ：React 编译器

```javascript
npm install gulp gulp-browserify gulp-concat gulp-react gulp-connect lodash reactify --save-dev

### 安装生产环境依赖包

- react ：主要框架
- react-dom ：React的DOM操作类
- bootstrap ：bootstrap样式

```javascript
npm install --save react react-dom

bower install --save bootstrap
```

### `run repo`

$ gulp server-pro   //用浏览器打开 localhost:5001


