import React from 'react';
// import './App.css';
import List from './components/List'
import Footer from './components/Footer'

interface ItemType {
  id: number,
  name: string,
  list_pic_url: string,
  retail_price: number,
  num: number
}
interface StateType{
  list: ItemType[],
  totalPrice: number,
  totalNum: number
}
class App extends React.Component<{}, StateType>{

  constructor(props:{}){
    super(props);
  }

  state = {
    list: [],
    totalPrice: 0,
    totalNum: 0
  }

  componentDidMount(){
    fetch('/https://www.easy-mock.com/mock/5e74d5e2b6cc11259439be9a/example/goods')
    .then(res=>res.json())
    .then(data=>{
      console.log('data...', data, data.data.data);
      this.setState({
        list: data.data.data.map((item:object)=>{return {...item, num:0}})
      })
    })
  }

  numChange = (id:number, type:string)=>{
    let list = [...this.state.list] as ItemType[];
    let index = list.findIndex((item:any)=>item.id===id);
    type=='+'?list[index].num++: list[index].num--;
    if (list[index].num < 0){
      list[index].num = 0;
    }
    this.setState({
      list
    })
  }

  render(){
    let {list, totalPrice, totalNum} = this.state;
    return <>
      <List list={list} numChange={this.numChange}/>
      <Footer totalPrice={totalPrice} totalNum={totalNum}/>
    </>;
  }
}

export default App;