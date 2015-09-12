*2015年達暉資訊教育訓練*
# React & Flux 123

>>

# 0. 開始前
<small>提示：往下滑動看章節內容，往右滑動切換章節</small>

vv

## 0.1 你今天會學到
- React/Flux 的觀念
- 一些 ES6 和 ES7 的新語法
- React Native 經驗分享
- 前端工程的冰山一角

vv

## 0.2 範例程式
- [React Todos Tutorial](https://github.com/shiningjason1989/ReactTodosTutorial)
- [React Native Todos](https://github.com/shiningjason1989/ReactNativeTodos)
- [Exponent Todos](https://github.com/shiningjason1989/ExponentTodos)

vv

## 0.3 準備開始～了唷
> Enjoy and Have Fun

>>

# 1. 安裝環境
<small>考考你：往下滑動可以看？？，往右滑動可以切換？？</small>

vv

## 1.1 安裝開發工具 (opt.)
1. [Sublime Text 3](http://www.sublimetext.com/3)
2. [Chromium](https://www.chromium.org/)

vv

## 1.2 安裝 nodejs
1. [Node 官方網站](https://nodejs.org/en/)
2. [Homebrew](http://brew.sh/)：適合 Mac 使用者
3. [nvm](https://github.com/creationix/nvm)：方便管理及切換 node、iojs 的版本
4. 而我的安裝方法是：

```cmd
$ brew install nvm   // 使用 Homebrew 下載 nvm
$ nvm install stable // 使用 nvm 下載 node
```

vv

## 1.3 安裝 generator-rf
1. 下載 [Yeoman](http://yeoman.io/)：  
前端工具組，包含用來產生專案骨架的工具

2. 下載 [generator-rf](https://github.com/taiansu/generator-rf)：  
產生 React/Flux 專案架構的工具

```cmd
$ npm install -g yo generator-rf
```

vv

## 1.4 初始化專案
```cmd
$ yo rf TodosApp // 1. 產生專案
$ cd TodosApp
$ npm run dev    // 2. 執行專案
```

vv

## 1.5 專案介紹
1. npm & package.json
    - [npm 基本指令](http://dreamerslab.com/blog/tw/npm-basic-commands/)
    - `npm install --save moduleName`
    - `npm install --save-dev moduleName`
2. webpack & webpack dev server
3. [Babel](https://babeljs.io/)
4. [CommonJS](http://webpack.github.io/docs/commonjs.html)

vv

## 1.6 本次的課程範例
![mockup](images/mockup.png)

>>

# 2. React

vv

## 2.1 第一個元件
1. 撰寫第一個元件 Header
2. 讓 Header 元件顯示在 App 元件中
3. [範例與詳解](https://github.com/shiningjason1989/ReactTodosTutorial/tree/%231_first_component)

vv

## 2.2 組合元件
1. 讓 Header 顯示由 App 傳來的 props  
（username: 使用者名稱, todoNumber: 待辦事項數量）
2. 定義 Header 的「propTypes」與「defaultProps」
3. [範例與詳解](https://github.com/shiningjason1989/ReactTodosTutorial/tree/%232_component_composition)

vv

## 2.3 動態小孩元件
1. 完成 TodoItem 元件
2. 完成 TodoList 元件  
（該元件可以接收上層傳遞的 todos，並且動態顯示 TodoItem）
3. [範例與詳解](https://github.com/shiningjason1989/ReactTodosTutorial/tree/%233_dynamic_children)

vv

## 2.4 定義樣式在元件中
1. 使用 JS 定義所有元件（App, Header, TodoList, TodoItem）的樣式
2. [範例與詳解](https://github.com/shiningjason1989/ReactTodosTutorial/tree/%234_inline_css)

vv

## 2.5 控制元件
1. 新增 Input 元件，讓使用者可以登打新的待辦事項
2. 在 App 元件中，使用 State 來儲存待辦事項
3. 在 App 元件中，加入處理新增待辦事項的邏輯，並加入新的待辦事項至 State
5. [範例與詳解](https://github.com/shiningjason1989/ReactTodosTutorial/tree/%235_controlled_component)

vv

## 2.6 完成範例
1. 下載 React dev tool
2. 完成切換待辦事項狀態的功能
3. 完成刪除待辦事項的功能
4. 完成編輯待辦事項的功能
5. [範例程式](https://github.com/shiningjason1989/ReactTodosTutorial/tree/%236_complete_sample)

vv

## 2.7. 元件生命週期
![react-lifecycle](images/react-lifecycle.jpg)

vv

## 2.8 回顧
1. 專案架構
2. 建立第一個元件（React.render(), jsx）
3. 組裝元件（props, 元件可以層層組裝）
4. 動態小孩元件（key, VDOM）
5. 定義樣式在元件中
6. 控制元件（state）
7. 元件生命週期

vv

## 2.9 兩大心法
1. Thinking in Components
2. Always Redraw（in VDOM）

>>

# 3. Flux

vv

## 3.1 Flux 概觀
![flux](images/flux.png)

vv

## 3.2 Flux / Dispatcher
1. 新增 AppDispatcher:  
繼承 flux 中的 dispatcher 實例

2. [範例程式](https://github.com/shiningjason1989/ReactTodosTutorial/blob/%237_flux_dispatcher)

vv

## 3.3 Flux / Actions
1. 新增 ActionTypes:  
存放專案中的 action type 常數

2. 新增 TodoActions:  
主要工作是為建立 action 物件，並將 action 傳遞給 Dispatcher

3. [範例程式](https://github.com/shiningjason1989/ReactTodosTutorial/blob/%238_flux_actions)

vv

## 3.4 Flux / Stores
1. 新增 TodoStore
    1. 繼承 EventEmitter 的實例
    2. 建立 addListener 和 removeListener 等便利的方法
    3. 將待辦事項存放在該 store 中，並提供一個 getAll 的方法給外部
    4. 根據 action type 處理業務邏輯，並修改待辦事項的值
    5. 將 TodoStore 註冊到 AppDispatcher 中
2. [範例程式](https://github.com/shiningjason1989/ReactTodosTutorial/blob/%239_flux_stores)

vv

## 3.5 Flux / Controller-View
1. 修改 App 元件
    1. 呼叫 TodoAction 來處理使用者操作行為
    2. 傾聽 TodoStore 來修改內部的 state
2. [範例程式](https://github.com/shiningjason1989/ReactTodosTutorial/blob/%2310_flux_controller_view)

vv

## 3.6 回顧
1. Flux 架構
2. Dispatcher
3. Actions
4. Stores
5. Controller-View

vv

## 3.7 再看一次
![flux](images/flux.png)

vv

## 3.8 最後大心法
1. Single Source of Truth

>>

# 4. Container
*// TODO*
1. [範例程式](https://github.com/shiningjason1989/ReactTodosTutorial/blob/%2311_container_pattern)

>>

# 99. 總結與回顧
1. 三大心法
    - Thinking in Components
    - Always Redraw（in VDOM）
    - Single Source of Truth

>>

> 番外篇

>>

# 1. React Native

vv

*// TODO*
