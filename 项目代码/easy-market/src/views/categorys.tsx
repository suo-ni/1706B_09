import styles from "../css/type.module.scss"
import React, { useEffect, useState } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux';
import { classifyDetailAction, DetailListAction } from '../store/actions/type';
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

  let go = () => {
    props.history.go(-1)
  }

  let goodsDetail = (id:any)=>{
    props.history.push(`/goods/${id}`)
  }

  return (
    <div className={styles.noTabPageContent}>
      {/* nav */}
      <div className={styles.header}>
        <div className={styles.left} onClick={go}>
          <i className="iconfont icon-xiangzuo"></i>
        </div>
        <div className={styles.right}></div>
        <div className={styles.title}>奇趣分类</div>
      </div>
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
              <a onClick={()=>goodsDetail(item.id)} className={styles.goodsItem} key={item.id}>
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
  return {
    detailNav: state.type.detailNav,
    detailList: state.type.detailList
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
