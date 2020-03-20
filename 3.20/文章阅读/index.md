### https://juejin.im/post/5e6ccbf86fb9a07cb52bddf1
今天看了一下hook的一些相关介绍
在组件内部，那些会成为其他useEffect依赖项的方法，建议用 useCallback 包裹，或者直接编写在引用它的useEffect中。
己所不欲勿施于人，如果你的function会作为props传递给子组件，请一定要使用 useCallback 包裹，对于子组件来说，如果每次render都会导致你传递的函数发生变化，可能会对它造成非常大的困扰。同时也不利于react做渲染优化。

