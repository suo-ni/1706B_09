#### Ts原始类型
- boolean number string undefined null symbol void bigint
#### Ts其他类型
- any 
- unknow(任意类型，相对于any安全，被确定是某个类型之前，不能实例化，访问属性，函数执行)
- 数组 泛型类型,需要指定里面每个元素的类型 
 - 例：Array<number>或number[]  let f:number|string []=[]
- 元组 已知元素数量和类型的数组，各元素类型不必相同 [string,number]
 - 例：let g=[string,number,boolean,number []]=['ac',100,false,[1,2,3]];  前后类型一一对应
- 枚举类型 enum 用于声明一组命名的常数，当一个变量有几种可能的值时
 - 数字枚举，值会递增
 - 字符串枚举
 - 反向映射功能，key=>value key<=>value,值得深思
 - 分开枚举，自动合并
- object表示非原始数据类型，普通对象、枚举、数组、元组通通都是object类型
#### 接口
- TypeScript的核心原则之一是对值所具有的结构进行类型检查，接口的作用就是定义这些结构，我喜欢称接口为自定义数据类型，比如ajax返回的结果，事件对象，react中的state和props等
- 例： interface AjaxType{
  code:number (普通属性)
  data?:AjaxType (? 可有可无的属性)
  readonly msg:string (readonly 只读属性)  msg:错误提示信息
  [key:string]:any  索引类型 
}
#### 类
- 访问限定符
 - private 只可以在类的内部访问
 - protected 只可以在类的内部及子类访问
 - public 默认为public 只可以在类的内部和外部访问
- Class作为接口，用于props的类型检查的defaultProp的默认值
 - 接口是规范，只声明成员方法不做实现
 - 类声明成员方法并可以赋值
 #### 函数
 - 函数重载 用同样的函数声明不同参数和类型的函数
 #### 泛型
 - function swap<T,U>(typle:[T,U]:[U:T]){   T,U是泛型
   return [tuple[1],tuple[0]];
 }
 swap([100,false])  可以自动推断出传进去的值的类型 <number,boolean>
 - 泛型约束与索引类型 索引类型 keyof 映射类型 key in
 - 继承交叉类型
  - 交叉类型 例：let j=A&B={
    a:'Hello',
    b:100
  }
   - 联合类型 
   -let k:number|string|undefined|null=null(只要满足其中一个类型就可以))
   - 类型别名  例：
   - 例:interface F{
     ():string
   } 
    type abc=number|string|F;
    - 类型推断 as 
   - 构造函数类型，需要使用到new()

#### 网易严选项目
