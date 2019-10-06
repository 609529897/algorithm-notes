# React

> 此教程的内容不全，但足够入门。学完这个再看官方教程也可以！

## 创建 react 项目

1. 使用 React 脚手架工具 create-react-app 创建项目，创建项目后在项目根目录输入 `npm start` 就可以运行项目。

````shell
create-react-app react-demo
````

2. 直接 npx

````javascript
npx create-react-app react-demo
````

----

## 目录结构

+ favicon.ico 图标
+ index.html 网站主页
+ mainifest.json PWA ：允许将站点添加至主屏幕，在草案阶段

+ src 源代码
  + index.js 入口文件
  + App.js 根组件
  + components：组件文件夹，所有文件放在这里
  + assets：静态资源
    + images
    + css
      + index.css 项目的公共 css 文件
      + App.css
+ .gitignore git忽略文件
+ package.json 项目配置

> 更换一下路径

----

## 基本语法

**创建一个基本的 Hello World!**

````jsx
//App.jsx
import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
            <div>Hello World!</div>
        )
    }
}

export default App;
````

````javascript
//main.js
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

ReactDOM.render(<App />, document.getElementById('root'))
````

+ `render(){}` 方法里面放模板
+ `Component` 也可以用另外一个方法引入使用

````javascript
import React from 'react'

class App extends React.Component {
    render() {
        return (
            <div>Hello World!</div>
        )
    }
}

export default App;
````

---

**创建组件在 App.jsx 里面引入**

+ 组件名和组件文件名必须大写
+ 在组件所有的节点必须使用一个根节点包裹起来

````jsx
//Home.jsx
import React, { Component } from 'react'
class Home extends Component {
    render() {
        return (
            <div>Component</div>
        )
    }
}

export default Home
````

````jsx
//App.jsx
import React, { Component } from 'react'
import Home from './components/Home.jsx'

class App extends Component {
    render() {
        return (
            <div>
                 <Home />
                 <p>Hi Component</p>
            </div>
        )
    }
}

export default App;
````

**函数组件**

```react
import React from 'react'

export default function Logo() {
  return (
    <div className="logo-container">
      <img src={Logo} alt="logo" className='logo-img' />
    </div>
  )
}
```



---

**数据绑定**

+ 数据放在 `constructor` 的 ==`this.state = {}`== 里
+ ==`{this.state.属性名}`==：引用 `this.state` 里的数据
+ ==`super()`== ：指代父类的实例（即父类的 `this` 对象 ），必须写不然报错。这是因为子类没有自己的 `this` 对象，而是继承父类的 `this` 对象，然后对其进行加工。如果不调用 `super` 方法，子类就得不到 `this` 对象。
+ ==`props`== ： 用于父子组件传值

> state: 陈述，声明    props: prop的第三人称单数。支柱，维持

````jsx
import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)
        //这边！
        this.state = {
            name: '孙悟空',
            age: 19,
            userinfo: {
                username: '李白',
                userage: 18
            }
        }
    }
    render() {
        return (
            <div>hi Component
                <p> 姓名: {this.state.name} </p>
                <p> 年龄: {this.state.age} </p>
                <hr />
                <div>userinfo:
                    <p> 姓名: {this.state.userinfo.username}</p>
                    <p> 年龄: {this.state.userinfo.userage}</p>
                </div>
            </div>

        )
    }
}

export default Home
````

```jsx
import React from 'react'

class Userlist extends React.Component {
  constructor(props) {
    super(props)
  }
  //状态可以不用写在 constructor 放在这里也可以！
  state = {
      msg: 'Hello world!'
  } 
  render() {
    return (
        //这里应该不用 this 就可以引用
      <div>{this.state.msg}</div>
    )
  }
}

export default Userlist
```



----

## 绑定属性

+ class => className
+ for => htmlFor
+ 内联样式：style

````jsx
<div style={{ color: 'red' }}>style</div>
````

+ 基本写法

````jsx
<div title={this.state.title}>我是一个 div</div>
````

**引入 css 并使用**

+ 使用 `className` 指定 class 选择器

````jsx
import React from 'react'
import '../assets/css/index.css'

class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '我是一个title'
        }
    }
    render() {
        return (
            <div>{this.state.foo.name}
                <div title={this.state.title}>我是一个 div</div>
                <br />
                <div className='red'>我是一个红色的 div</div>
            </div>
        )
    }
}

export default News
````

+ 需要把以前 HTML 里的 `for` 属性改成 `htmlFor`

```jsx
<label htmlFor="name">姓名</label>
<input id="name" />
```

+ 内联样式 `style` 需要这样写：

````jsx
<div style = {{width: 100 + 'px'}}></div>
````

+ 也可以这样写

````jsx
this.state = {
    title: '我是一个title',
    style: {
        color:'red'
    }
````

````jsx
<div style={{ color: this.state.style.color }}>style</div>
````



---



`````jsx
import React from 'react'
// import '../assets/css/index.css'

class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '我是一个title'
        }
    }
    render() {
        return (
            <div>
                <div title={this.state.title}>我是一个 div</div>
                <br />
                <div className='red'>我是一个红色的 div</div>
                <br />
                <label htmlFor="name">姓名</label>
                <input id="name" />
                <div style={{ color: 'red' }}>style</div>
            </div>
        )
    }
}

export default News
`````

----

## 引入资源

**本地图片资源**

+ 引入图片，使用 `import`

````jsx
import logo from '../assets/images/logo.jpg'
````

+ 使用图片

````jsx
<img src={logo} />	
````

+ 或者

```jsx
<img src={require('../assets/images/logo.jpg')} />
```

**远程图片资源**

````javascript
<img src="http://www.baidu.com/img/dog.png" />
````

----

## 渲染数组

````jsx
        this.state = {
            list1: ['1', '2', '3', '4'],
            list2: [<h2>我是一个好</h2>, <h2>我是一个好</h2>],
            list3: [
                { title: '1' },
                { title: '2' },
                { title: '3' },
                { title: '4' },
            ]
        }
````

**渲染 `list2` **

````jsx
{this.state.list2}
````

**渲染 `list1` ，使用数组的方法渲染**

> 必须在每个列表项上指定唯一 key 属性

```jsx
import React from 'react'

class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list1: ['1', '2', '3', '4'],
            list2: [<h2 key='1'>我是一个好</h2>, <h2 key='2'>我是一个好</h2>],
            list3: [
                { title: '1' },
                { title: '2' },
                { title: '3' },
                { title: '4' },
            ]
        }
    }
    render() {
        let list1 = this.state.list1.map((value, key) => {
            return <li key={key}>{value}</li>
        })
        return (
            <div>
                {this.state.list2}
                {list1}
            </div>
        )
    }
}

export default News
```

---

**渲染 list3**

````jsx
    render() {
        let list1 = this.state.list1.map((value, key) => {
            return <li key={key}>{value}</li>
        })
        return (
            <div>
                <p>{this.state.name}</p>
                {this.state.list2}
                {list1}
                <ul>
                    {
                        this.state.list3.map((value, key) => {
                            return (<li key={key}>{value.title}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
````

> return 出去 html 就可以渲染 html 内容？

-----

## 注意事项

+ 所有模板要被一个根节点包裹起来
+ 模板元素不要加引号
+ `{}` ：绑定数据
+ 绑定属性注意：
  + `class` => `className`
  + `for` => `htmlFor`
  + `style` 
    +  `<div style={{ color: 'red' }}>style</div>` 
    +  `<div style={{ color: this.state.color }}>style</div>`

+ 循环数据要加唯一值 `key`

+ `super(props)`

+ 组件类，组件文件的名称首字母要大写

----

## 事件与方法

````jsx
import React from 'react'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    //定义方法
    run() {
        console.log('running')
    }
    render() {
        return (
            <div>
                {/* 调用方法 */}
                <button onClick={this.run}>执行方法</button>
            </div>
        )
    }
}

export default Home
````

----



````jsx
import React from 'react'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    //定义方法
    run() {
        console.log('running')
    }
    getData() {
        //此时是拿不到的
        console.log(this.state.msg)
    }
    render() {
        return (
            <div>
                {/* 调用方法 */}
                <button onClick={this.run}>执行方法</button>
                <button onClick={this.getData}>执行方法</button>
            </div>
        )
    }
}

export default Home
````

**`this` 指向当前组件的方法**

+ 方式一：使用 `bind` 绑定 `this`

````jsx
<button onClick={this.getData.bind(this)}>获取数据</button>
````

+ 方式二：在 `constructor` 指定 bind

```jsx
import React from 'react'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 'Hi'
        }
        //这里！
        this.getData = this.getData.bind(this)
    }
    getData() {
        console.log(this.state.msg)
    }
    render() {
        return (
            <div>
                <button onClick={this.getData}>获取数据</button>
            </div>
        )
    }
}

export default Home
```

+ 方式三：使用箭头函数，箭头函数的里的 `this` 和方法外面的 `this` 一样
> 这个应该用的最多！

````jsx
    getName = () => {
        console.log(this.state.name)
    }
````

> 可以这样理解吗：当我在自定义的方法里使用 this 获取组件里的方法或者数据，必须使用上面三个方法里的一个来指定 this 的指向

----

````jsx
import React from 'react'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 'Hi',
            msg1: 'Hello',
            name: '李白'
        }
        this.getData1 = this.getData1.bind(this)
    }
    //定义方法
    run() {
        console.log('running')
    }
    getData() {
        console.log(this.state.msg)
    }
    getData1() {
        console.log(this.state.msg1)
    }
    getName = () => {
        console.log(this.state.name)
    }
    render() {
        return (
            <div>
                {/* 调用方法 */}
                <button onClick={this.run}>执行方法</button>
                <button onClick={this.getData.bind(this)}>获取数据</button>
                <button onClick={this.getData1}>获取数据</button>
                <button onClick={this.getName}>获取数据</button>
            </div>
        )
    }
}

export default Home
````

----

**改变 `state` 里面的值**

+ `this.setState({})`

````jsx
import React from 'react'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 'Hi'
        }
    }
    setData() {
        this.setState({
            msg: 'bye'
        })
    }
    render() {
        return (
            <div>
                {this.state.msg}
                <button onClick={this.setData.bind(this)}>设置</button>
            </div>
        )
    }
}

export default Home
````

+ 传值

````jsx
import React from 'react'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 'Hi',
            value: '1000e+10$',
            name: '杜甫'
        }
    }
    //这里！
    setData(value, name, againName) {
        this.setState({
            msg: value + name + againName
        })
    }
    render() {
       return (
         <div>
           {this.state.msg}                  //这里！
           <button onClick={this.setData.bind(this, '李白', '白居易')}>设置</button>
         </div>
       )
    }
}

export default Home
````

----

## 事件对象，ref，双向数据绑定

> 模板的注释： `{/*我是注释*/}`

**事件对象**

````jsx
import React from 'react'

class Nems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 'Hi',
        }
    }
    //这个 event 就是事件对象
    //event.target 获取执行这个事件的 DOM 元素
    run(event) {
        event.target.style.background = 'red'
    }
    render() {
        return (
            <div>
                {this.state.msg}

                <button onClick={this.run}>事件对象</button>
            </div>
        )
    }
}

export default Nems
````

+ event 对象获取元素属性：`event.target.getAttribute('属性名')`

`````jsx
    run(event) {
        let titleVal = event.target.getAttribute('title')
        console.log(titleVal)
    }
`````

---

**表单事件**

> onChange 事件

````jsx
import React from 'react'

class Nems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }
    inputChange(event) {
        this.setState({
            username: event.target.value
        })
    }
    getUN() {
        alert(this.state.username)
    }
    render() {
        return (
            <div>
                <h2>表单对象</h2>
                <input onChange={this.inputChange.bind(this)} /> 
                <button onClick={this.getUN.bind(this)}>获取 input 的值</button>
            </div>
        )
    }
}

export default Nems
````

---

**`ref` 获取 DOM 元素**

```jsx
{/*在想要获取的 DOM 元素上指定 ref 属性*/}
<input ref="username" onChange={this.inputChange.bind(this)} />
```

```jsx
    inputChange() {
        //获得指定的 DOM
        //this.refs.username
        let val = this.refs.username.value
        this.setState({
            username: val
        })
    }
```

---



````jsx
import React from 'react'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }
    inputChange() {
        let val = this.refs.username.value
        this.setState({
            username: val
        })
    }
    getInput() {
        alert(this.state.username)
    }
    render() {
        return (
            <div>
                <input ref="username" onChange={this.inputChange.bind(this)} />
                <button onClick={this.getInput.bind(this)}></button>
            </div>
        )
    }
}

export default List
````

---

**键盘事件**

```jsx
import React from 'react'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }
    keyUp(e) {
        //这里！
        console.log(e.keyCode)
        if (e.keyCode === 13) {
            this.setState({
                username: '13'
            })
        }
    }
    render() {
        return (
            <div>
                <p>{this.state.username}-8</p>
                {/*这里！*/}
                <input onKeyUp={this.keyUp.bind(this)} />
            </div>
        )
    }
}

export default List
```

---

**双向数据绑定**

+ model 数据 <=> view 数据，互相影响
+ 如果想要给 `input` 的 `value` 属性绑定 `state` 的值，需要把 `value` 改成 `defaultValue`，如果在元素上要绑定 `onChange` 事件那就不用修改

`````jsx
<input defaultValue={this.state.msg} />
`````

````jsx
<input value={this.state.msg} onChange={this.change.bind(this)} />
````

+ 双向绑定

`````jsx
import React, { Component } from 'react'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: ''
        }
    }
    change(e) {
        this.setState({
            msg: e.target.value
        })
    }
    render() {
        return (
            <div>
                {this.state.msg}
                <br />
                <input value={this.state.msg} onChange={this.change.bind(this)} />

            </div>
        )
    }
}

export default TodoList
`````

---

## 表单

| 表单类型     | 代码                                                         | 应用场景                                       |
| ------------ | ------------------------------------------------------------ | ---------------------------------------------- |
| 非约束性组件 | `<input defaultValue={this.state.msg} />`                    | 只是想要获得 state 的数据，并渲染就使用这个 MV |
| 约束性组件   | `<input value={this.state.msg} onChange={this.change.bind(this)} />` | 想要双向绑定就使用这个 MVVM                    |

+ 非约束性组件：就是原生 DOM 的 value 属性，这样写出来的组件，其 value 值就是用户输入的内容， React 完全不管理输入的内容
+ 约束性组件：这时候 value 属性不再是一个写死的值，它是属性值是由 `onChange` 管理的。实际上这时候的value 值根本不是用户输入的内容。而是 `onChange` 事件触发之后，由于 `this.state` 导致了一次重新渲染。不过 React 会优化这个渲染过程。

> e.preventDefault() ：阻止默认行为

````jsx
import React, { Component } from 'react'

class ReactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 'react 表单',
            name: 'xxx',
            sex: '1',
            city: '北京',
            citys: [
                '北京', '上海', '深圳'
            ],
            hobby: [
                {
                    'title': '睡觉',
                    'checked': true
                },
                {
                    'title': '吃饭',
                    'checked': false
                },
                {
                    'title': '敲代码',
                    'checked': true
                }
            ],
            info: ''
        }
    }
    handelName(e) {
        this.setState({
            name: e.target.value
        })
    }
    handelSubmit(e) {
        e.preventDefault()
        console.log(this.state.name)
        console.log(this.state.sex)
        console.log(this.state.city)
        console.log(this.state.hobby)
        console.log(this.state.info)
    }
    handelSex(e) {
        this.setState({
            sex: e.target.value
        })
    }
    handelCity(e) {
        this.setState({
            city: e.target.value
        })
    }
    handelHobby(key) {
        let hobby = this.state.hobby
        hobby[key].checked = !hobby[key].checked
        this.setState({
            hobby: hobby
        })
    }
    handelInfo(e) {
        this.setState({
            info: e.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handelSubmit.bind(this)}>
                    用户名: <input type="text" value={this.state.name} onChange={this.handelName.bind(this)} />
                    <br /><br />
                    性别:
                    <input type="radio" value="1" checked={this.state.sex == 1} onChange={this.handelSex.bind(this)} />男
                    <input type="radio" value="2" checked={this.state.sex == 2} onChange={this.handelSex.bind(this)} />女
                    <br /><br />
                    居住城市:
                    <select value={this.state.city} onChange={this.handelCity.bind(this)}>
                        {
                            this.state.citys.map((value, key) => {
                                return <option key={key}>{value}</option>
                            })
                        }
                    </select>
                    <br /><br />
                    爱好:
                    {
                        this.state.hobby.map((value, key) => {
                            return (
                                <span key={key} >
                                    <input type="checkbox" checked={value.checked} onChange={this.handelHobby.bind(this, key)} /> {value.title}
                                </span>
                            )
                        })
                    }
                    <br /><br />
                    备注: <textarea value={this.state.info} onChange={this.handelInfo.bind(this)} />
                    <br /><br />
                    <input type="submit" defaultValue="提交" /><br />
                </form>
            </div>
        )
    }
}

export default ReactForm
````

---

> React 如果即需要事件对象 event 又需要传值那咋办？

## 	TodoList

```react
import React, { Component } from 'react'
//引入自定义模块
import Storage from '../src/model/storage'

class Todolist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    addData(e) {
        if (e.keyCode === 13) {
            this.state.list.push({
                title: this.refs.title.value,
                checked: false
            })
            this.setState({
                list: this.state.list
            })
            this.refs.title.value = ''

            //缓存数据
            Storage.set('todolist', this.state.list)
        }
    }
    clickAddData(e) {
        this.state.list.push({
            title: this.refs.title.value,
            checked: false
        })
        this.setState({
            list: this.state.list
        })
        this.refs.title.value = ''
        //缓存数据
        Storage.set('todolist', this.state.list)
    }
    removeData(key) {
        this.state.list.splice(key, 1)
        this.setState({
            list: this.state.list
        })
        //缓存数据
        Storage.set('todolist', this.state.list)
    }
    checkboxChange(key) {
        this.state.list[key].checked = !this.state.list[key].checked
        this.setState({
            list: this.state.list
        })
        //缓存数据
        Storage.set('todolist', this.state.list)
    }
    //生命周期函数，页面渲染完成后触发
    componentDidMount() {

        let todolist = Storage.get('todolist')  //字符串
        if (todolist) {
            this.setState({
                list: todolist
            })
        }
    }
    render() {
        return (
            <div style={{ lineHeight: '50px' }}>
                <header><span>Todolist:</span> <input ref="title" onKeyUp={this.addData.bind(this)} /><button onClick={this.clickAddData.bind(this)}>添加</button></header>
                <h2>待办事项</h2>
                <hr />
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            if (!value.checked) {
                                return (
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this, key)} />
                                        {value.title}
                                        <button onClick={this.removeData.bind(this, key)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                <h2>已完成事项</h2>
                <hr />
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            if (value.checked) {
                                return (
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this, key)} />
                                        {value.title}

                                        <button onClick={this.removeData.bind(this, key)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Todolist
```

**封装的 Local Storage 的方法**

````react
//封装 Local Storage
const Storage = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  get(key) {
    return JSON.parse(localStorage.getItem(key))
  },
  remove(key) {
    localStorage.removeItem(key)
  }
}

export default Storage
````

> localStorage.setItem 设置缓存数据
>
> localStorage.getItem 获取缓存数据
>
> localStorage.removeItem 删除缓存数据

---

## 组件，父子组件通信

**父传子：属性**

````jsx
//1.父组件调用子组件的标签上传入想要给子组件的值
<Header title={this.state.title} />
````

````jsx
//2.子组件使用 this.props 接受传来的值
{this.props.title}
````

**父传子：方法**

> 跟属性的方式一样

````jsx
//1.传入
<Header title={this.state.title} run={this.run} />
````

````jsx
//2.接受 this.props.run
<button onClick={this.props.run}>run by father</button>
````

**父组件把自己传给子组件**

+ 这样子组件可以随意调用父组件的方法和属性

```jsx
//1.传
<Header news={this} />
```

```jsx
//2.接受 this.props.news
<button onClick={this.props.news}>父亲你来啦！</button>
```

---

**子传父**

```jsx
<Header news={this} />
```

````jsx
//传，给父组件的 getDataChild 方法传入了: 我是子组件的数据
<button onClick={this.props.news.getDataChild.bind(this, 'from Child')}>父亲你来啦！</button>
````

```jsx
//接受使用  
getDataChild(data) {
  this.setState({
      msg: data
  })
}
```

+ 父组件获取获取子组件全部

> 需要在 DOM（组件） 加载完后获取

````jsx
//在调用子组件的地方绑定 ref
<Footer ref="footer" />
````

````jsx
//在父组件获取子组件的方法或者属性 this.refs.footer
getChildComponent() {
    console.log(this.refs.footer.state.msg)
    this.refs.footer.run() //执行子组件的方法
}
````

---

## defaultProps 和 propTypes

> default 计算机领域的语义是默认

+ ==defaultProps== ：父子组件传值中，如果父子间调用子组件的时候不给予组件传值，则可以在子组件中使用 defaultProps 定义的默认值
+ ==propTypes==  ：验证父组件传值的类型

+ 都是应用在子组件中

**defaultProps**

`````jsx
import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: "子组件"
    }
  }
  render() {
    return (
      <div>            {/*这里是父组件传递过来的值*/}
        {this.state.msg}|{this.props.msg}
      </div>

    )
  }
}

Header.defaultProps = { 
  msg: 'defalut 值'    //this.props.msg 的默认值
}

export default Header
`````

**propTypes**

```jsx
import React, { Component } from 'react'

//1.引入 PropTypes
import PropTypes from 'prop-types'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: "子组件"
    }
  }
  render() {
    return (
      <div>           {/*这里是父组件传递过来的值*/}
        {this.state.msg}|{this.props.num}
      </div>

    )
  }
}
//2.指定父组件传来值的类型
Header.propTypes = {
  num: PropTypes.number
}

export default Header
```

---

## React 获取服务器 API 接口的数据

+ Axios
+ fetch-jsonp

**Axios**

+ 对 jsonp 不友好，跨域的话后台允许一下跨域

````shell
# 安装 axios
$ npm install axios --save
````

```jsx
// 在使用的组件内引入
import axios from 'axios'
```

````jsx
// get 请求
axios.get('/user?ID=12345')
  .then(response => {
    this.setData({
      list: response.data.result
    })
  }).catch(error => console.log(error))
````

````jsx
// 页面渲染
{
    this.state.list.map((value, key) => {
        return <li key={key}>{value.title}</li>
    })
}
````

````jsx
// post请求
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
})
.then(response => console.log(response))
.catch(error => console.log(error))
````

---

**fetch-jsonp**

+ jsonp 请求

````shell
# 安装
$ npm install fetch-jsonp --save
````

```jsx
//引入
import fetchJsonp from 'fetch-jsonp'
```

```jsx
  //使用
  fetchJsonp('/user.jsonp')
    .then(response => {
    return response.json()
     }).then(
      json => {
        this.setState({
          list: json.result
        })
      }
    )
  .catch(error => console.log(error))
```

---

## 生命周期函数

+ `componentWillMount` ：组件将要挂载时触发
+ `componentDidMount` ：组件挂载完成时触发的函数
+ `shouldComponentUpdate` ：是否要更新数据时触发
+ `componentWillUpdate` ：将要更新数据时触发
+ `componentDidUpdate` ：数据更新完成时触发
+ `componentWillReceiveProps` ：改变父组件里面的 props 传值的时候触发
+ `componentWillUnmont`：组件销毁的时候触发

> will: 想要   mount: 增加，嵌入   should: 可能    Update: 更新   did: 做

----

**组件加载的时候触发的函数：**

+ `constructor`

+ `componentWillMount` 
+ `render`
+ `componentDidMount`
  + DOM 操作一般放在这里

**组件更新的时候触发的生命周期函数：**

+ `shouldComponentUpdate(nextProps, nextState) {}` 
  + 表示是否更新数据，返回 true 才开始更新数据触发 componentWillUpdate 和 componentDidUpdate
  + 接受两个参数：
    1. nextProps：更新后的 porps
    2. nextState：更新的数据
+ `componentWillUpdate`
+ `render`
+ `componentDidUpdate`

**改变父组件里面的 props 传值的时候触发：**

+ `componentWillReceiveProps`

**组件销毁的时候触发**

+ `componentWillUnmont`

````jsx
import React, { Component } from 'react'

class Cycle extends Component {

  constructor(props) {
    super(props)
    this.state = {
      msg: 'hi'
    }
    console.log('constructor:开始了哦')
  }
  componentWillMount() {
    console.log('componentWillMount:组件将要挂载')
  }
  componentDidMount() {
    //一般 DOM 操作放在这里，请求数据也放在这里
    console.log('componentDidMount:组件挂载完成')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps)
    console.log(nextState)
    console.log('shouldComponentUpdate:是否要更新数据呢，弟弟？')
    //表示是否更新数据
    //返回 true 才开始更新数据触发 componentWillUpdate 和 componentDidUpdate
    return true
  }
  componentWillUpdate() {
    console.log('componentWillUpdate:数据将要更新')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate:更新的数据已 render 完')
  }
  componentWillUnmount() {
    //用在组件销毁的时候执行的函数
    console.log('太惨了，俺销毁了~~~')
    localStorage.setItem('Cycle', 123456)
  }
  componentWillReceiveProps() {
    console.log('父子组件传值时触发俺！')
  }
  setMsg() {
    this.setState({
      msg: 'bye'
    })
  }
  render() {
    console.log('render:数据渲染')
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.setMsg.bind(this)}>love</button>
      </div>
    )
  }
}

export default Cycle
````

----

## React-Router

> http://localhost:7777/ : 想要测试路由需要这样起点项目

+ 可以让根组件在不同条件下挂载不同的组件

```jsx
import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'//1.导入路由模块

import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/*2.使用超链接进行路由跳转*/}
          <Link to="/" >首页</Link>
          <Link to="/header" >头部</Link>
          <Link to="/footer" >尾部</Link>
          {/*3.配置路由*/}
          {/*exact: 给 / 首页组件添加的，表示当别的组件 /header 加载时不加载配置了 / 的首页组件*/}
          <Route exact path="/" component={Home} />
          <Route path="/header" component={Header} />
          <Route path="/footer" component={Footer} />
        </div>
      </Router>
    )
  }
}

export default App
```

**动态路由和 get 传值**

+ 一个页面跳转到另一个页面进行传值
  1.  get 传值
  2. 动态路由
  3. LocalStorage

+ ==动态路由==

```jsx
//传给 content 组件一个变量 value.aid
<Link to={`/content/${value.aid}`}>{value.title}</Link>
```

````jsx
//在路由接受传过来的值
<Route path="/Content/:aid" component={Content} />
````

> 我估计如果在 render 写 JS 代码必须使用 `{}` 把代码包裹起来

````jsx
//content.jsx
//要获取动态路由过来的值，需要在生命周期函数获取
componentDidMount() {
    console.log(this.props.match.params.aid)
}
````

+ ==get 传值==

````url
//在 url : ?aid=123 传值
http://localhost:7777/product?aid=123 
````

````jsx
//Product.jsx
<Link to={`/productContent?aid=${value.aid}`}>{value.title}</Link>
````

+ 获取 get 传的值

```jsx
console.log(this.props.location.search) //?aid=1
```

+ 我们需要使用第三方模块解析返回过来的 `?aid=1` 

````bash
$ npm install url --save
````

````jsx
//引入模块
import url from 'url'
````

```jsx
//解析，会返回一个对象
url.parse(this.props.location.search, true)
```

```jsx
//得到 aid
let query = url.parse(this.props.location.search, true).query
console.log(query)  // {aid: 1}
```

**路由的 Switch**

> 设定成某个时刻显示某个路由，切换路由

```react
<Router>
  <Switch>
    {
      routes.map((value, key) => {
        if (value.path) {
          return <Route key={key} path={value.path} component={value.component}></Route>
        } else {
            {/*默认路由*/}
          return <Route key={key} component={value.component}></Route>
        }
      })
    }
  </Switch>
</Router>
```

----

**渲染二维数组**

````jsx
import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      domain: 'http://a.api.com/'
    }
  }
  requireData() {
    const api = `${this.state.domain}api/productilist`
    axios.get(api)
      .then(response => {
        this.setState({
          list: response.data.result
        })
      })
      .catch(error => {
        throw new Error('Requested Error')
      })
  }
  componentDidMount() {
    this.requireData()
  }
  render() {
    return (
      <div>
        <div className="list">
          {
            // 在这里渲染得到的数据 list 
            this.state.list.map((value, key) => {
              return (
                <div key={key}> {/* 在这里加 key 也行 */}
                  <h3>{value.title}</h3>
                  <ul>
                    {
                      value.list.map((value, key) => {
                        return (
                          <li key={key}>
                            <div>
                              <Link to={`/pcontent/${value._id}`}>
                            <img src={require(`${this.state.domain}${value.img_url}`)} />
                                <p>{value.title}</p>
                                <p>{value.price}</p>
                              </Link>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Home
````

````jsx
//新闻详情页
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'

class Pcontent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      domain: 'http://a.api.com/'
    }
  }
  requestData(id) {
    const api = `${this.state.domain}api/productilist?${id}`
    axios.get(api)
      .then(response => {
        this.setState({
          list: response.data.result[0]
        })
      })
      .catch(error => {
        throw new Error('Requested Error ' + "error")
      })
  }
  componentWillMount() {
    this.requestData(this.props.match.params.id)
  }
  render() {
    return (
      <div>
        {
          this.state.list.map((value, key) => {
            return (
              <div key={key}>
                <Link to="/">返回</Link>
                <li >渲染新闻详情{value}</li>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Pcontent
````

**React 解析 HTML 标签**

````jsx
//官方文档
function createMarkup() {
    return {__html: 'First &middot; Second'}
}

function MyComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()}></div>
}
````

```jsx
<div dangerouslySetInnerHTML={{__html: this.state.list.content}}></div>
```

> 官方文档位置：[React 解析 HTML 标签](https://reactjs.org/docs/dom-elements.html)

----

## React 渲染数据时的注意事项和原生 JS 实现路由跳转

**React 渲染数据时的注意事项**

+ 当用 html 渲染数据时可能数据还没取过来呢，但是 render 会在第二次执行的时候会把数据渲染出来，所有可能会报错但是数据渲染了。
+ 这时我们只需要使用三目运算符判断一下就行

```jsx
{this.state.list.img_url?<img src={`${this.state.domain}${this.state.list.img_url}`}>:""}
```

**原生 JS 实现路由跳转**

1. 引入 `Redirect` ，它是在 `react-router-dom` 模块里

````jsx
import { BrowserRouter as Router, 
        Route, 
        Link, 
        Redirect 
       } from 'react-router-dom'
````

2. 定义一个 `flag`

```jsx
this.state = {
    flag: false
}
```

3. 进行判断

````jsx
render() {
    if (this.state.flag === true) {
                        // to="/" 这样也 OK       
        return <Redirect to={{ pathname: "/" }} />
    }
    return (
        <div></div>
    )
}
````

4. 当验证正确时把 `flag` 变换成 `true`

```jsx
if (username === 'admin' && password === '123456') {
    this.setState({
        flag: true
    })
} else {
        alert('登录失败')
}
```

> 为啥点击按钮会重新 render ?

----



```jsx
//Login.jsx
import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loginFlag: false
		}
	}
	doLogin(e) {
		e.preventDefault() //阻止默认行为
		let username = this.refs.username.value
		let password = this.refs.password.value
		if (username === 'admin' && password === '123456') {
			this.setState({
				loginFlag: true
			})
		} else {
			alert('登录失败')
		}
	}
	render() {
		if (this.state.loginFlag === true) {
			return <Redirect to={{ pathname: "/" }} />
		}
		return (
			<div>
				{/* onSubmit会默认重新刷新页面 */}
				<form onSubmit={this.doLogin.bind(this)}>
					<input type="text" ref="username" /> <br />
					<input type="password" ref="password" /> <br />
					<input type="submit" value="执行登录" />
				</form>
			</div>
		)
	}
}
export default Login
```

---

## 路由的嵌套

**嵌套路由**

````jsx
import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Main from './User/Main.jsx'
import Info from './User/Info.jsx'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <div className="content">
          <div className="left">
            <Link to="/user/">个人中心</Link>
            <br />
            <Link to="/user/info">用户信息</Link>
          </div>
          <div className="right">
            {/* 组件渲染的位置 */}
            <Route exact path="/user/" component={Main} />
            <Route path="/user/info" component={Info} />
          </div>
        </div>
      </div>
    )
  }
}

export default User
````

+ `path` 路径还可以这样写

```jsx
<Route exact path={`${this.props.match.url}/`} component={Main} />
<Route path={`${this.props.match.url}/info`} component={Info} />
```

**路由的模块化1**

```jsx
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './component__/Home.jsx'
import User from './component__/User.jsx'
import Shop from './component__/Shop.jsx'

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/shop",
    component: Shop
  },
  {
    path: "/user",
    component: User
  }
]


class _App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Router>
        <div>
          <Link to="/">首页</Link> |
          <Link to="/user">用户</Link> |
          <Link to="/shop">商城中心</Link>
          <hr />
          {
            routes.map((route, key) => {
              if (route.exact) {
           return <Route key={key} exact path={route.path} component={route.component} />
              } else {
           return <Route key={key} path={route.path} component={route.component} />
              }
            })
          }
        </div>
      </Router>
    )
  }
} 
export default _App
```

###  this 的传递

````jsx
import React, { Component } from 'react'
import {  Route, Link } from 'react-router-dom'

import ShopApp from './Shop/ShopApp'
import ShopList from './Shop/ShopList'


//怎样获得 Shop 里面的 this
function route() {
  return [
    {
      path: `${this.props.match.url}/`,
      component: ShopApp,
      exact: true
    }, {
      path: `${this.props.match.url}/shoplist`,
      component: ShopList
    }
  ]
}

class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: []
    }
  }
  componentWillMount() {
    this.setState({
      routes: [...route.call(this)]
    })
  }  
  render() {
    return (
      <div>
  <div className="content" style={{ width: "100%", height: "500px", display: "flex" }}>
  <div className="left" style={{ width: "200px", height: "500px", background: "#eeee" }}>
            <Link to="/shop/">商城首页</Link>
            <br />
            <Link to="/shop/shoplist">商城列表</Link>

          </div>
<div className="right" style={{ flex: "1", height: "500px", border: "1px solid black" }}>
            {
              this.state.routes.map((route, key) => {
                if (route.exact) {
          return <Route key={key} exact path={route.path} component={route.component} />
                } else {
          return <Route key={key} path={route.path} component={route.component} />
                }
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
export default Shop
````

---

**路由的模块话2**

> 这个才是真正的模块化，把路由抽离成一个单独的文件

````jsx
//routes.jsx
//组件和路由都在这里管理
import Home from '../../component__/Home.jsx'
import User from '../../component__/User.jsx'
import Shop from '../../component__/Shop.jsx'

let routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/shop",
    component: Shop
  },
  {
    path: "/user",
    component: User
  }
]

export default routes
````

````jsx
//App.js
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import routes from './src/model_/routes.jsx'

class _App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Router>
        <div>
          <Link to="/">首页</Link> |
          <Link to="/user">用户</Link> |
          <Link to="/shop">商城中心</Link>
          <hr />
          {
            routes.map((route, key) => {
              if (route.exact) {
           return <Route key={key} exact path={route.path} component={route.component} />
              } else {
           return <Route key={key} path={route.path} component={route.component} />
              }
            })
          }
        </div>
      </Router>
    )
  }
}
export default _App
````

---

**嵌套路由的模块化**

```jsx
//router.jsx
//组件和路由都在这里管理
import Home from '../../component__/Home.jsx'
import User from '../../component__/User.jsx'
import Shop from '../../component__/Shop.jsx'
import _User from '../../component__/_User'
    import Userlist from '../../component__/User_/Userlist'
    import Useradd from '../../component__/User_/Useradd'

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/shop",
    component: Shop
  },
  {
    path: "/user",
    component: User
  },
  {
    path: "/_user",
    component: _User,
    //嵌套的路由
    routes: [
      {
        path: "/_user/",
        component: Useradd,
        exact: true
      },
      {
        path: "/_user/userlist",
        component: Userlist
      }
    ]
  }
]

export default routes
```

````jsx
//处理嵌套的路由，并传递给子组件
{
   routes.map((route, key) => {
     if (route.exact) {
       return <Route key={key} exact path={route.path}
         render={props => (
                                      {/*如果没有 routes 嵌套咋办？传空值？*/}
           <Route.component{...props} routes={route.routes} />
         )}
       />
     } else {
       return <Route key={key} path={route.path}
         render={props => (
           <Route.component{...props} routes={route.routes} />
         )} />
     }
   })
 }
````

> 直接在子组件 import router.jsx 让后在指定的条件下配置嵌套的路由呗 😀

```jsx
//在子组件里接受数据并配置
{
  this.props.routes.map((route, key) => {
    return <Route key={key} exact path={route.path} component={route.component} />
  })
}
```

----

## Ant Design

+ UI 框架

> 支持 React 和 Angular 框架

**在 creact-react-app 中使用**

+ 安装 antd 

```shell
$ yarn add antd
```

```shell
$ npm install antd --save
```

+ 在 css 文件中引入 antd

````css
/*@charset = "UTF-8"*/
@import '~antd/dist/antd.css'
````

+ 引入 antd 组件，并使用

```jsx
import { Button } from 'antd'

<Button type="primary">primary</Button>
```

**按需引入 CSS**

+ 安裝一個工具模塊

```shell
$ yarn add react-app-rewired
```

+ 配置 package.json 文件

> 把 scripts 裏的 react-script 換成 react-app-rewired

```json
  "scripts": {
   - "start": "react-script start",
   + "start": "react-app-rewired start",
   - "build": "react-script build",
   + "build": "react-app-rewired build",
   - "test": "react-script test --env=jsdom",
   + "test": "react-app-rewired test --env=jsdom",
  }
```

+ 新建一個 `config-overrides.js` 文件

```js
module.exports = function override(config, env) {
    return config
}
```

+ 安裝 `babel-plugin-import`

````shell
$ yarn add babel-plugin-import
````

+ 再一次配置 `config-overrides.js` 文件，改成下面這樣

```js
const { injectBabelPlugin } = require('react-app-rewired')
module.exports = function override(config, env) {
    config = injectBabelPlugin(
         ['import', { libraryName:'antd', libraryDirectory: 'es', style: 'css' }],
         config,
    )
    return config
}
```

+ 去掉 `@import '~antd/dist/antd.css'` ，可以直接按需引入指定模塊組件了

```jsx
import { Button } from 'antd'
```

---

## Redux0

- 全局状态管理模块

- 管理组件之间传递的数据

**三个重要部分**

- `action`

- `reducer`：进行状态修改
- `state(store)`：存储数据的地方

> dispatch 是派发的事件

```react
import { createStore } from 'redux'

// reducer
const counterReducer = (state = { count: 1 }, action) => {
  return state
};

// store
const store = createStore(counterReducer);
```

```react
// 如果需要改变一个 reducer 的值，需要使用 dispatch 派发一个 action
// action 需要两个参数
// 1. type    需要使用 type 区分对 state 做什么操作
// 2. payload 传递的数据

const counterReducer = (state = { count: 1 }, action) => {
  switch (action.type) {
    case 'COUNT_ADD':
      return {
        ...state, count: state.count + 1
      };
    case 'COUNT_REDUCE':
      return {
        ...state, count: state.count - 1
      };
    default:
      return state;
  };
};

const store = createStore(counterReducer);

store.dispatch({
  type: 'COUNT_ADD',
  payload: {}
});

store.dispatch({
  type: 'COUNT_REDUCE',
  payload: {}
});
```

**使用 chrome 插件查看状态**

- Redux DevTools

```react
const store = createStore( 
    counterReducer
    window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

---

**使用多个 reducer**

```react
//使用 combineReducers
import { createStore, combineReducers } from 'redux'

const counterReducer = (state = { count: 1 }, action) => {
  switch (action.type) {
    case 'COUNT_ADD':
      return {
        ...state, count: state.count + 1
      };
    case 'COUNT_REDUCE':
      return {
        ...state, count: state.count - 1
      };
    default:
      return state;
  };
};

const postReducer = (state = { list: [{ title: '你好！' }] }, action) => {
  switch (action.type) {
    case 'LOAD_POST':
      return {
        ...state, list: action.payload
      };
    default:
      return state
  };
};

//通过 combineReducers 把多个 reducer 进行合并
const rootReducers = combineReducers({
  counter: counterReducer,
  post: postReducer
});

const store = createStore( 
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

---

**redux 的网络请求**

> json holder：网站，会提供在线的 API

```shell
# redux 使用 redux-thunk 插件进行网络请求
$ yarn add redux-thunk 
$ yarn add axios
```

```react
// 导入需要的插件
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { get } from 'axios'
import thunk from 'redux-thunk'
```

```react
// 配置 store
const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(...[thunk])  //需要使用的中间件数组
    ),
    window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

```react
const getPostsRequest = () => {
    return get('https://xxx.com/posts');
};

store.dispatch(async (dispatch) => {
    const res = await getPostsRequest();
    dispatch({
        type: 'LOAD_POST',
        payload: res.data
    });
});
```

---

**拆分代码，使其阅读更合理**

+ 在 src 文件夹下创建 actions 文件夹，把所有的 action 文件放在里面
+ 在 src 文件夹下创建 reducers 文件夹，把所有的 reducer 文件放在里面
+ 在 src 文件夹下创建 services 文件夹，把所有的关于网络请求得文件放在里面
+ 在根目录下创建 store.js 文件

```react
// src/services/post_api.js
import { get } from 'axios'

export function getPosts() {
    return get('https://xxx.com/posts');
}
```

```react
// src/actions/counter_action.js
export const countAddAction = {
    type: 'COUNT_ADD'
}

export const countReduceAction = {
    type: 'COUNT_REDUCE'
}
```

````react
// src/actions/post_action.js
import { getPosts } from '../services/post_api'

export const loadPostsAction = async (dispatch) => {
    const res = await getPosts();
    dispatch({
        type: 'LOAD_POSTS',
        payload: res.data
    })
}
````

```react
// src/reducers/post_reducer.js
const postReducer = (state = { list: [{ id: 1, title: '你好！' }] }, action) => {
    switch (action.type) {
        case 'LOAD_POST':
            return {
                ...state, list: action.payload
            };
        default:
            return state
    };
};

export default postReducer;
```

```react
// src/reducers/counter_reducer.js
const counterReducer = (state = { count: 1 }, action) => {
    switch (action.type) {
        case 'COUNT_ADD':
            return {
                ...state, count: state.count + 1
            };
        case 'COUNT_REDUCE':
            return {
                ...state, count: state.count - 1
            };
        default:
            return state;
    };
};

export default counterReducer;
```

```react
// src/reducers/index.js
//合并 reducer
import { combineReducers } from 'redux'

import counterReducer from './counter_reducer'
import postReducer from './post_reducer'

const rootReducers = combineReducers({
    counter: counterReducer,
    post: postReducer
});

export default rootReducers;
```

```react
// src/store.js
//合并 store

import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducers from './reducers/index'

const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(...[thunk])
    ),
    window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
```

```react
//引用 store
import store from './store'

//操作
import { countAddAction } from './actions/counter_action'
import { loadPostsAction } from './actions/post_action'

store.dispatch(countAddAction);
store.dispatch(loadPostsAction);
```

---

### 在 react 使用 redux

``` shell
# 需要安装插件
$ yarn add react-redux
```

```react
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'

import store from './store'

// 使用 react-redux 的 Provider 元素把 <App /> 包裹起来，这样所有的组件都可以使用 store 里面的数据
ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
```

```react
//使用 connect 组件根 redux 连接
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPostsAction } from '../actions/post_action'

class PostList extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    };
    componentDidMount() {
        this.props.dispatch(loadPostsAction); //加载远程数据
    };
    render() {
        const { list } = this.props.post;
        const Posts = list.map(post=>{
            return (<li key={post.id}>{post.title}</li>)
        })
        return (
            < div >
                <ul>{ Posts }</ul>
            </div >
        );
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.post
    };
};

// 通过 connect 连接组件和 redux 数据，传递 state 数据和 dispatch 方法
export default connect(mapStateToProps)(PostList);
```

---

## React Hooks

- React 的新特性
- 函数式

```react
//体验 React Hooks
import React, { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1)}}>Click Me!</button>
        </div>
    )
}

export default Example;
```

---

### userState

- 函数

- 按照 useState 的顺序记录的
- 不可以在条件判断语句中

- const [a, b] = userState(0);

> a 是属性？ b 是作用在 a 上的方法？ 0 是 a 的默认值？强制的？

```react
//useState
import React, { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1)}}>Click Me!</button>
        </div>
    )
}

export default Example;
```

---

### useEffect 

> effect: 影响，效果

- 可代替生命周期函数
- 生命周期函数其实是负作用的
  - 代替 `componentDidMount()` 和 `componentDidUpdate()`

- 在上面两个生命周期函数执行的时机，useEffect 都会执行
- 异步的
- 这需要好好把握逻辑，需要好好适配两个生命周期函数

```react
import React, { useState, useEffect } from 'react'

function Example() {
    const [count, countAdd] = useState(0);
    useEffect(() => {
        console.log(`${count}`);
    });
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => { countAdd(count + 1) }}>countAdd</button>
        </div>
    );
};
export default Example;
```

- useEffect 代替 `componentWillUnmont` 生命周期函数（销毁前一步的触发的生命周期函数）

```react
import React, { useState, useEffect } from 'react'

function Example() {
    const [count, countAdd] = useState(0);
    useEffect(() => {
        console.log(`${count}`);
        //return 的匿名函数在 componentWillUnmont 生命周期函数执行时执行，也就是组件摧毁前执行
        //这样是每一次状态发生变化时，都会执行一次 return 的函数
        return () => console.log('老弟你走了！');
        //useEffect 的第二个参数：
        //数组，当空时表示只有这个组件销毁时此函数触发 return 的函数
        //当数组有值时表示，当这个值的状态发生变化时触发此 return 的匿名函数，而销毁时不会触发了
    },[]);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => { countAdd(count + 1) }}>countAdd</button>
        </div>
    );
};
export default Example;
```

---

### useContext

- 解决父子组件传值的问题

> props 支柱，维持    Context 上下文，背景

```react
import React, { useState, createContext } from 'react'

import Counter from './Counter'

//在父组件导出 createContext 创建传值的 CountContext
export const CountContext = createContext();

function Example() {
    const [count, countAdd] = useState(0);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => { countAdd(count + 1) }}>countAdd</button>
            {/*传子组件值*/}
            <CountContext.Provider value={count}>
                <Counter />
            </ CountContext.Provider>
        </div>
    );
};
export default Example;
```

```react
//子组件
export default Counter;

import React, { useContext } from 'react'

//接受 createContext() 的值，不知道这样对不对！
import { CountContext } from './Example'

function Counter(props) {
    //使用 useContext 在子组件接受父组件传来的值
    const count = useContext(CountContext);
    return (
        <div>
            {count}
        </div>
    )
};

export default Counter;
```

---

### useReducer

- 跟 useContext 一起使用达到类似 redux 的效果

````react
//reducer
export default function countReducer(state, action) {
    switch (action.type) {
        case 'add':
            return state + 1
        case 'sub':
            return state - 1
        default:
            return state
    }
}
````

```react
import React from 'react'

export default function Reducer(props) {
    const [count, dispatch] = React.useReducer((state, action) => {
        switch (action) {
            case 'add':
                return state + 1
            case 'sub':
                return state - 1
            default:
                return state
        };
    }, 0);
    return (
        <div>
            <h3>现在的分数是{count}</h3>
            <button onClick={() => { dispatch('add') }}>Increment</button>
            <button onClick={() => { dispatch('sub') }}>Decrement</button>
        </div>
    );
};
```

---

#### 使用 useReducer + useContext 代替 reducer 的小案例

```react
// Buttons.js
import React, { useContext } from 'react'
import { ColorContext, UPDATE_COLOR } from './color'

function Buttons(props) {
    const { dispatch } = useContext(ColorContext);
    return (
        <div>
            <button onClick={() => { dispatch({ type: UPDATE_COLOR, color: "red" }) }}>红色</button>
            <button onClick={() => { dispatch({ type: UPDATE_COLOR, color: "yellow" }) }}>黄色</button>
        </div>
    );
};

export default Buttons;
```

```react
// color.js
import React, { createContext, useReducer } from 'react'

export const ColorContext = createContext({});

export const UPDATE_COLOR = "UPDATE_COLOR";

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}

export const Color = props => {
    const [color, dispatch] = useReducer(reducer, 'blue');

    return (
        <ColorContext.Provider value={{ color, dispatch }}>
            {props.children}
        </ColorContext.Provider>
    );
};
```

```react
// Example.js
import React from 'react'

//引入子文件
import Buttons from './Buttons'
import ShowArea from './ShowArea'
import { Color } from './color';

function Example(props) {
    return (
        <div>
            <Color>
                <ShowArea />
                <hr />
                <Buttons />
            </Color>
        </div>
    );
};

export default Example;
```

```react
//ShowArea.js
import React, { useContext } from 'react'

import { ColorContext } from './color'


function ShowArea(props) {
    const { color } = useContext(ColorContext); 
    return (
        <div style={{color:color}}>字体颜色{color}</div>
    );
};

export default ShowArea;
```

---

### useMemo

- 解决 React Hooks 的性能问题

- useEffect 没有 shouldComponentUpdate 生命周期函数，所以可能会产生性能的极大损耗

  （每一次父组件更新，子组件的方法函数也会执行一遍）

```react
//用 useMemo() 包装一下子组件跟着父组件一起执行的方法
const actionXiaohong = useMemo(() => changeXiaohong(name), [name] )
```

---

### useRef  获取 DOM 和保存变量

- 可以获取 DOM 元素
- 可以保存变量（但不推荐使用）

```react
import React, { useRef } from 'react'

function ChildComponent() {
    //获取 DOM 
    const inputE1 = useRef(null);
    console.log(inputE1);
    return (
        <div>
            <input ref={inputE1} type="text" />
            <button onClick={() => { inputE1.current.value = "Hello" }}>input</button>
        </div>
    )
}

export default ChildComponent;
```

---

### 自定义 Hooks 函数

> 自定义的 Hooks 函数协定 use 开头

> useCallback 缓存方法

```react
//自定义 Hooks 方法，随着窗口大小的改变放回他的大小值
import React, { useState, useEffect, useCallback } from 'react'

function UseFunc() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    });
    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }, []);
    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [onResize]);
    return size;
};


//使用方法
function Ex() {
    const size = UseFunc();
    return (
        <div>
            {size.width} <hr /> 
            {size.height}
        </div>
    )
}

export default Ex;
```

---

## Redux1

