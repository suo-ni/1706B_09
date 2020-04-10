import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux';
import { topicAction } from '../../store/actions/topic'
import { RouteComponentProps } from 'react-router-dom';
import styles from './subject.module.scss'
import {throttle, debounce} from '../../utils/index'
interface ItemArr{
  id: number,
  title: string,
  price_info: number,
  subtitle: string,
  scene_pic_url: string
}
interface StateProps {
  list:{
    data: Array<ItemArr>
  }
  
}
interface DispatchProps {
  getTopicList: () => void
}
let TopicPage: React.FC<DispatchProps & StateProps & RouteComponentProps> = (props) => {
 // 设置数据
 let [page, setPage] = useState<number>(0);
 console.log(props);
  useEffect(() => {
    props.getTopicList();
  }, []);
  let goDetail = (e: React.MouseEvent<HTMLLIElement>) => {
    let id = e.currentTarget.dataset.id;
    props.history.push(`/subjectDetail/${id}`);
  }
  useEffect(() => {
    //请求锁
    let flag=false;
    //第一种方式，监听window的滚动
  let scrollHandle=(e:Event)=>{
    if(flag){
      return ;
    }
    let scrollY=(e.currentTarget as Window).scrollY;
    if(document.documentElement.getBoundingClientRect().height-(window.innerHeight+scrollY)<20){
      //判断是否已经到底了，没有更多数据了
      if(props.list.data.length<=(page+1)*10){
        return;
      }
      flag=true;
      setPage(page=>page+1);
      flag=false;
    }
  }
  //防抖和节流
  let wrapHandle = throttle(scrollHandle);
  window.addEventListener('scroll', wrapHandle);
  return ()=>{
      window.removeEventListener('scroll', wrapHandle);
  }
  }, [props.list]);
  if(!props.list.data){
    return null;
  }
  return <>
  {
     props.list.data.slice(0,(page+1)*10).map((item) => {
      //console.log(props.list.data);
      return <li key={item.id} onClick={goDetail} data-id={item.id} className={styles.lis}>
        <img src={item.scene_pic_url} alt="" className={styles.pic} />
        <p className={styles.title}>{item.title}</p>
        <p className={styles.subtitle}>{item.subtitle}</p>
       <p className={styles.info}>{item.price_info}元起</p>
      </li>
    })
  }
  </>;
}
const mapStateToProps = (state: any) => { 
  return {
    list: state.topic.list
  }
}
const mapDispatchToProps = (dispatch: Function) => {
  return {
    getTopicList: () => {
      dispatch(topicAction());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopicPage);