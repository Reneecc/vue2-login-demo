.
├── README.md
├── READMETWO.md
├── babel.config.js
├── package.json
├── public
│   ├── favicon.ico //页面的图标
│   └── index.html  //页面的总入口,Vue是单页应用.有根组件挂载点
├── src
│   ├── App.vue 项目的根组件，其他所有组件都包含在这个组件里，作为它的子/孙组件
│   ├── assets  资源文件，存放一些图片和css文件等
│   ├── components  项目的公用组件
│   ├── config.js
│   ├── main.js 整个项目的入口文件，运行yarn run server时先运行了main.js文件，用来创建Vue实例，作为桥梁将App.vue组件挂载到index.html中。还负责全局引入一些插件并安装插件
│   ├── router 用来配置项目的路由
│   ├── store
│   └── views 用来存放页面组件，主要是一些路由跳转要刷新的那些最大的组件
└── yarn.lock
└── vue.config.js  配置文件，如配置代理服务器等

7 directories, 10 files
