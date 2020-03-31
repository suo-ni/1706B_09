import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { topicAction } from '../../store/actions/topic'
import { RouteComponentProps } from 'react-router-dom';
import styles from './subject.module.scss'
interface ItemType {
  id: number,
  title: string,
  price_info: number,
  subtitle: string,
  scene_pic_url: string,
}
interface StateProps {
  list: Array<ItemType>,
}
interface DispatchProps {
  getTopicList: () => void
}
let TopicDetailPage: React.FC<DispatchProps & StateProps & RouteComponentProps> = (props) => {
  console.log(props.list);
  useEffect(() => {
    props.getTopicList();
  }, []);

  let goDetail = (e: React.MouseEvent<HTMLLIElement>) => {
    let id = e.currentTarget.dataset.id;
    props.history.push('/subjectDetail?id' + id);
  }
  // useEffect(() => {
  //   //第一种方式，监听window的滚动
  //   window.addEventListener('scroll', e => {
  //     let scrollY = (e.currentTarget as Window).scrollY;
  //     console.log('e...', scrollY);
  //     if (document.documentElement.getBoundingClientRect().height - (window.innerHeight + scrollY) < 20) {
  //       console.log('滚动到底部了');
  //         //时间防抖和节流
  //     }

  //   })
  // }, []);
  return <>
  {/* {
    props.list&&props.list.map((item) => {
      return <li key={item.id} onClick={goDetail} data-id={item.id} className={styles.lis}>
        <img src={item.scene_pic_url} alt="" className={styles.pic} />
        <p className={styles.title}>{item.title}</p>
        <p className={styles.subtitle}>{item.subtitle}</p>
        <p className={styles.info}>{item.price_info}</p>
      </li>
    })
  } */}
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
export default connect(mapStateToProps, mapDispatchToProps)(TopicDetailPage);