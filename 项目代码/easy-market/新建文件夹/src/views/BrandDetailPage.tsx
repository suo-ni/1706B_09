// import React, { useEffect } from 'react'
// import { RouteComponentProps } from 'react-router'
// import { connect } from 'react-redux'
// import { typeDetailAction } from '../store/actions/TypeList'

// interface StateType {
//     detail: {
//             banner_url: string,
//             front_desc: string,
//             front_name: string,
//             [key: string]: string
//     }
// }

// interface DispatchType {
//     TypeDetail: (id: string) => void
// }

// let TopicDetailPage: React.FC<StateType & DispatchType & RouteComponentProps<{ id: string }>> = props => {
//     // console.log(props.detail)
//     useEffect(() => {
//         let id = props.match.params.id
//         props.TypeDetail(id)
//     }, [])
//     return <>
//         <div className="noTabPageContent">
//             <div className="header">
//                 <div className="left">
//                     <i className="iconfont icon-fanhui"></i>
//                 </div>
//                 <div className="title">
//                     奇趣分类
//                 </div>
//                 <div className="right"></div>
//             </div>
//             <div className="tabWrap">
//                 <div className="tabs">
//                     <div className="tab_bar_wrap">
//                         {/* {props.detail.map((item) => {
                            
//                         })} */}
//                     </div>
//                     <div className="tab_content_wrap">

//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
// }

// const mapStateToProps = (state: any) => {
//     return { detail: state.TypeList.detail }
// }

// const mapDispatchToProps = (dispatch: Function) => {
//     return {
//         TypeDetail: (id: string) => {
//             dispatch(typeDetailAction(id))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TopicDetailPage);


import React, { useEffect, useState } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import styles from './Categorys.module.scss';
import { connect } from 'react-redux';
import { classifyDetailAction, DetailListAction } from '../store/actions/TypeList';
import { RouteComponentProps } from 'react-router-dom'

interface dispatchType {
  getNavList: Function
}

interface stateType {
  detailNav: {
    brotherCategory: Array<{
      [name: string]: number | string
    }>,
    currentCategory: {
      name: string,
      front_name: string
    }
  },
  detailList: Array<{
    [name: string]: number | string
  }>
}


let Categorys: React.FC<dispatchType & stateType & RouteComponentProps<{ id: string }>> = (props) => {
    console.log(props.detailList)
  // const tabs = [
  //   { title: '灯具' },
  //   { title: '被罩' },
  //   { title: '灯泡' },
  //   { title: '点灯' },
  //   { title: '火药' },
  //   { title: '6th Tab' },
  //   { title: '7th Tab' },
  //   { title: '8th Tab' },
  //   { title: '9th Tab' },
  // ];

  let [tabs, setTabs] = useState([]);
  let [ind, setInd] = useState(0)
  let [flag, setFlag] = useState(false);
  let id = props.match.params.id;


  useEffect(() => {
    props.getNavList(id);
  }, [])

  useEffect(() => {
    if (props.detailNav.brotherCategory && !flag) {
      setFlag(true)
      let arr: any = [];
      props.detailNav.brotherCategory.forEach((item) => {
        arr.push({
          title: item.name,
          id: item.id
        })
      })
      setTabs(arr)
      let findIndex = arr.findIndex((item: any) => item.id == id)
      setInd(findIndex)
    }
  }, [props.detailNav])

  return (
    <div className="Categorys">
        <div className={styles.header}>
            <div className={styles.left}>
                <i className="iconfont icon-fanhui"></i>
            </div>
            <div className="title">奇趣分类</div>
            <div className="right"></div>
        </div>
      {/* nav */}
      <div className={styles.tab}>
        <WhiteSpace />
        <Tabs tabs={tabs} page={ind} onChange={(item: any, index) => {
          props.getNavList(item.id)
          setInd(index);
        }} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}></Tabs>
        <WhiteSpace />
      </div>
      <div className={styles.categoryDetail}>
        {
          props.detailNav.currentCategory && <div>{props.detailNav.currentCategory.name}</div>
        }
        {
          props.detailNav.currentCategory && <div>{props.detailNav.currentCategory.front_name}</div>
        }
      </div>
      {/* list */}
      <div className={styles.goodsList}>
        {
          props.detailList.map((item) => {
            return (
              <a href={"/goods/" + item.id} className={styles.goodsItem} key={item.id}>
                <div className={styles.goodsItemImg}>
                  <img src={item.list_pic_url + ''} alt="" />
                </div>
                <div className={styles.goodsItemName}>{item.name}</div>
                <div className={styles.goodsItemPrice}>{item.retail_price}</div>
              </a>
            )
          })
        }
      </div>

    </div>
  );
}

const mapStateToProps = (state: any) => {
    console.log(state)
  return {
    detailNav: state.TypeList.detailNav,
    detailList: state.TypeList.detailList
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getNavList(id: string) {
      dispatch(classifyDetailAction(id))
      dispatch(DetailListAction(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categorys);
