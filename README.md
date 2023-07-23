<<<<<<< HEAD
<<<<<<< HEAD
# React-Renting-house
React Implementing a rental page with React
=======
# GoodLive

## 技术栈
React + ReactHook + ReactRouter + Redux + Axios + Less + 第三方

## 计划完成功能
1. 首页展示
2. 城市管理
3. 搜索功能
4. 上拉加载
5. 详情页
6. 收藏功能
7. 订单评价

## 初始化环境构建
1. 项目环境：create-react-app 脚手架构建项目环境
2. 支持Less语法
3. 集成网络请求Axios

## Less支持的配置
在React脚手架构架的环境中，默认支持的是CSS和Sass/Scss。所以需要自己配置Less
1. 执行命令：npm run eject (创建完项目不要做任何操作，直接执行次命令),如果我们修改了文件，打开文件根目录，显示隐藏文件，删除.git文件夹,再次执行命令
2. 安装依赖
```js
npm install --save-dev less less-loader
```
3. 修改配置文件
```js
// 配置1
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

// 配置2
{
    test: lessRegex,
    exclude: lessModuleRegex,
    use: getStyleLoaders(
    {
        importLoaders: 3,
        sourceMap: isEnvProduction
        ? shouldUseSourceMap
        : isEnvDevelopment,
    },
    'less-loader'
    ),
    sideEffects: true,
},
{
    test: lessModuleRegex,
    use: getStyleLoaders(
    {
        importLoaders: 3,
        sourceMap: isEnvProduction
        ? shouldUseSourceMap
        : isEnvDevelopment,
        modules: {
        getLocalIdent: getCSSModuleLocalIdent,
        },
    },
    'less-loader'
    ),
},
```

## 配置网络请求
1. 安装依赖
```js
npm install --save axios
```
2. 配置相关文件

## 配置初始化样式
1. 初始化css文件
2. 引入字体图标库:iconfont


## 实现首页展示
1. 创建页面:Home/Shop/LifeService/User
2. 创建路由
    - 安装依赖：npm install --save react-router-dom
    - 配置AppRouter文件
3. 底部导航
4. iconfont
5. 顶部导航
    - REM配置 -> public/index.html加入REM的计算方案
6. 焦点轮播图
    - 参考文档：https://react-swipeable-views.com/
    - 安装依赖：
        ```js
        npm install --save react-swipeable-views
        npm install --save react-swipeable-views-utils
        ```
    - 指示器需要独立实现
        ```js
        npm install --save classnames
        ```
7. 搭建服务器环境提供数据
    - 安装依赖
    ```js
    npm install --save experss
    npm install --save cors
    ```
    - 跨域使用cors后台解决
    - 数据来源于json文件

8. 首页列表数据展示
    - 组件分类:
        - 智能组件(HomeHotList)：处理数据，获取数据，过滤数据
        - 木偶组件(HomeHotView)：视图适配
    - ReactHook useEffect业务分离

## 实现城市管理
1. 创建城市管理页面实现路由跳转：City
2. 实现路由嵌套，将共享底部导航的页面做成二级路由:Layout布局
3. 城市页面组件效果实现 PubHeader、CurrentCity、CityList
4. 集成Redux：通过它来存储城市页面，根据城市不同，UI会渲染不同的结果
    - Store  Reducers  Actions
    - 安装依赖
    ```js
    npm install --save redux
    npm install --save react-redux
    npm install --save-dev redux-devtools-extension
    ```
    - 创建Redux流程
5. 关联Redux，存储城市数据
    - 修改Header城市文本，传递City组件中的城市文本
6. 页面数据需要根据城市进行切换
7. 城市列表的ABC形式
    参考地址：https://www.ctolib.com/mip/chelun-h5-react-city-select.html
    城市列表数据：https://bang.360.cn/aj/getcitycode
    - 安装依赖
    ```js
    npm i react-city-select --save
    ```

## 实现搜索功能
1. 创建搜索页面，配置路由跳转
    - 抽离搜索的input组件
    - 配置路由
    - 监听keyCode进行enter跳转(keyCode === 13)
    - 路由跳转携带参数
        Hook实现方式，Reaect-Router提供的useParams
2. 实现搜索网络请求的接口
    - 后台由于数据问题，所以每次搜索返回相同的测试内容
3. 前台访问接口，获取数据
4. 关于列表数据渲染的注意事项
    - 我们以前都是直接在获取列表数据直接渲染，从今天开始，我们需要Item去渲染每个一个视图
    - 渲染HTML结构：
    ```html
    <p dangerouslySetInnerHTML={{ __html:data.price + "元/月" }}></p>
    ```
5. 搜索头部实现
6. 上拉加载实现
    - 上拉加载封装组件
    - 实现流程：
        监听滚动事件 -> 滚动高度 + 视口高度 >= 容器列表的高度
    - getBoundingClientRect
        动态获取元素距离顶部的距离 < 视口高度 = 加载数据
    - 回流重绘
        避免程序回流重绘
    - 节流防抖
        参考站点：https://segmentfault.com/a/1190000018428170
        防抖：在一个期限值(时间间隔)内，如果发起多次请求，以最后一次为准
        节流：在一个期限值(时间间隔)内，只发起一次请求
7. 加载更多数据
8. Mock.js
    - 模拟数据，完全随机化
    - 参考网址：http://mockjs.com/
    - 安装： `npm install mockjs --save`
9. 图片预处理
    - 如果图片请求成功，加载图片，否则加载默认值

## 详情页
1. 创建页面，配置路由
2. 内存泄漏
    - 在React中，事件、定时器、网络请求:在滚动事件还没有结束的时候，跳转到另一个页面出现了什么问题？
    - 处理泄露问题：网络请求取消、事件取消、定时器清除
3. 收藏功能
    - 收藏功能是否允许收藏，取决于用户是否登陆，用户登陆则收藏，用户未登录，跳转到登陆页面
    - 判定用户是否定
4. tabs切换
    - React.props.Children
5. 评价系统
    - 加载更多
    - 星星的展示

## 登陆功能
    - 功能的实现
    - 验证,引入验证文件
    ```
    npm install --save lodash
    npm install --save validator
    npm install --save classnames
    ```

## 订单评价
1. 订单的页面，包含路由的跳转功能

## 打包项目
npm run build
>>>>>>> origin/master
=======

>>>>>>> 3f2e73bc57c4248426e589fbc0b47839a3d57ffc
