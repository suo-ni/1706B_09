### 认识React

#### 常见库
- react
react的核心，虚拟dom，jsx，hooks
- react-dom
关于dom的一些操作，render，findDomNode，unMountComponentAtNode
- react-native
关于native的一些操作
- react-script
封装的关于react的webpack构建脚本，可以用eject导出

#### React基础
##### 创建组件的方式
- 函数式组件(视图组件)，就是普通函数
- 类组件(容器组件)，继承React.Component或React.PureComponent
- Hooks组件(容器组件)，就是普通函数+hooks，方便复用带状态的组件
- JSX

#### 样式绑定
- 用className代替class
- 局部样式，cssModule

#### 生命周期
##### 创建期
- constructor
- componentWillMount
- render
- componentDidMount

##### 更新期
- componentWillReceiveProps(如果props更新)
- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate

##### 销毁期
- componentWillUnmount

##### 两个新的生命周期
- getSnapshotBeforeUpdate
- getDerivedStateFromProps

#### 事件绑定
- 合成事件
- 事件绑定的this
    - 比较优化的事件绑定方式
        - 在constructor里bind
        - 对象字面量函数
    - 下面两种方式会导致不必要的重新渲染
        - 在render里bind
        - 箭头函数