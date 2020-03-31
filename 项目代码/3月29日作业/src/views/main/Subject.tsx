import React,{useEffect} from 'react'
import {connect} from 'react-redux';
import {topicAction} from '../../store/actions/topic'
import {RouteComponentProps } from 'react-router-dom';
interface ItemType{
  id:number,
  title:string,
  price_info:number,
  subtitle:string,
  scene_pic_url:string,

}
interface StateProps{
  list:Array<ItemType>,
  
}
interface DispatchProps{
  getTopicList:()=>void
}
let TopicDetailPage: React.FC<DispatchProps&StateProps&RouteComponentProps>= (props)=>{
  console.log(props.list);
  useEffect(()=>{
   props.getTopicList();
  },[]);

let goDetail=(e:React.MouseEvent<HTMLLIElement>)=>{
 let id=e.currentTarget.dataset.id;
 props.history.push('/topicDetail?id'+id);
}
    return <>{
      props.list.map((item)=>{
        return <li key={item.id} onClick={goDetail} data-id={item.id}>
          <img src={item.scene_pic_url} alt=""/>
          <p>{item.title}</p>
          <p>{item.subtitle}</p>
          <p>{item.price_info}</p>
        </li>
      })
    }
    </>;
}
const mapStateToProps=(state:any)=>{
 return{
   list:state.topic.list.data
 }
}
const mapDispatchToProps=(dispatch:Function)=>{
 return{
   getTopicList:()=>{
     dispatch(topicAction());
   }
 }
}
export default connect(mapStateToProps,mapDispatchToProps)(TopicDetailPage);