import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {RouteComponentProps} from 'react-router-dom'
import {topicDetailAction} from '../store/actions/topic'
import styles from './SubjectDetail.module.scss'
interface StateType{
  detail:{
    content:string,
    [key:string]:string
  }
}
interface DispatchType{
  getTopicDetail:(id:string)=>void
}
let SubjectDetail: React.FC<StateType & DispatchType & RouteComponentProps<{id:string}>>=props=>{
  useEffect(()=>{
   let id=props.match.params.id;
   props.getTopicDetail(id);
  },[]);
  useEffect(()=>{
    if (props.detail.title){
        document.title = props.detail.title;
    }
}, [props.detail])
    return <>
    <div className={styles.wrap} dangerouslySetInnerHTML={{__html:props.detail.content}}></div>
    </>;
}
const mapStateToProps=(state:any)=>{
   return {
     detail:state.topic.detail
   }
}
const mapDispatchToProps=(dispatch:Function)=>{
  return {
     getTopicDetail:(id:string)=>{
       dispatch(topicDetailAction(id))
     }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (SubjectDetail);
