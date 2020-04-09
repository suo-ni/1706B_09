import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { homeAction } from '../../store/actions/home'
import { RouteComponentProps } from 'react-router'
import styles from './Index.module.scss';

import Bannerbar from '../../components/banner';
interface DispatchType {
  getHomeList: Function,
  list: StateType
}

interface StateType {
  banner: Array<{
    [name: string]: string | number
  }>,
  channel: Array<{
    [name: string]: string | number
  }>,
  newGoodsList: Array<{
    [name: string]: string | number
  }>,
  hotGoodsList: Array<{
    [name: string]: string | number
  }>,
  brandList: Array<{
    [name: string]: string | number
  }>,
  topicList: Array<{
    [name: string]: string | number
  }>,
  categoryList: Array<{
    [name: string]: string | number
  }>
}

let Index: React.FC<DispatchType & StateType & RouteComponentProps> = (props) => {
  useEffect(() => {
    props.getHomeList();
  }, []);
  return (
    <div className={styles.index}>
      <Bannerbar bannerList={props.list.banner}></Bannerbar>
      <div className={styles.channelWrap}>
        {
          props.list.channel && props.list.channel.map((item, index) => {
            return <dl className={styles.channelitem} key={item.id}>

              <a className={styles.channelitem_dt}><img
                className={styles.channelitem_img}
                src={`${item.icon_url}`} alt="" /></a>
              <dd className={styles.channelitem_dd}>{item.name}</dd>
            </dl>
          })
        }
      </div>
      <div className={styles.brandBox}>
        <div className={styles.brandBox_tit}>
          品牌制造商直供
        </div>
        <div className={styles.brandBox_list}>
          {props.list.brandList && props.list.brandList.map((item, index) => {
            return (
              <a href='#' key={item.id}>
                <div className={styles.brandItemName}>{item.name}</div>
                <div className={styles.brandItemMinPrice}>{item.floor_price}元起</div>
                <img src={`${item.new_pic_url}`} alt="" />
              </a>
            )
          })}
        </div>
      </div>
      <div className={styles.newGroods}>
        <div className={styles.newGroods_tit}>
          新品首发
        </div>
        <div className={styles.newGroods_list}>
          {
            props.list.newGoodsList && props.list.newGoodsList.map((item, index) => {
              return <a key={item.id}>
                <img src={`${item.list_pic_url}`} alt="" />
                <div className={styles.tit}>
                  {item.name}
                </div>
                <div className={styles.price}>
                  ￥{item.retail_price}
                </div>
              </a>
            })
          }
        </div>
      </div>
      <div className={styles.hotGroods}>
        <div className={styles.hotGroods_tit}>
          人气推荐
        </div>
        <div className={styles.hotGroods_list}>
          {
            props.list.hotGoodsList && props.list.hotGoodsList.map((item, index) => {
              return <a key={item.id}>
                <img src={`${item.list_pic_url}`} alt="" />
                <div className={styles.hotGroods_infos}>
                  <div className={styles.hotGroods_name}>
                    {item.name}
                  </div>
                  <div className={styles.hotGroods_info}>
                    {item.goods_brief}
                  </div>
                  <div className={styles.hotGroods_price}>
                    ￥{item.retail_price}
                  </div>
                </div>
              </a>
            })
          }
        </div>
      </div>
    
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    list: state.home
  }
}

const mapDispacthToProps = (dispacth: Function) => {
  return {
    getHomeList() {
      dispacth(homeAction());
    }
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(Index);
