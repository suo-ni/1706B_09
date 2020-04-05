import React, { useEffect, useState} from 'react'
import styles from '../css/goods.module.scss'
import {connect} from "react-redux"
import { goodsAction } from "../store/actions/goods"
import { RouteComponentProps } from 'react-router-dom'

interface StateType {
    goods: Array<{
        keyword: string,
        is_hot: number
    }>
}
interface DispatchType {
    getGoods: Function
}

let GoodsDetailPage: React.FC<StateType & DispatchType & RouteComponentProps> = props=>{
    console.log(props)
    let [id, setId] = useState(0)

    useEffect(()=>{
        props.getGoods()
    },[])

    let go = () =>{
        props.history.go(-1)
    }

    return <>
        <div className={styles.noTabPageContent}>
            <div className={styles.searchPage}>
                <div className={styles.searchFix}>
                    <div className={styles.Input}>
                        <div className={styles.searchInputWrap}>
                            <div className={styles.goBack} onClick={go}>
                                <i className="iconfont icon-xiangzuo"></i>
                            </div>
                            <div className={styles.icon}>
                                <i className="iconfont icon-fangdajing"></i>
                            </div>
                            <input type="text" placeholder="520元礼包抢先领" className={styles.searchInput} />
                            <div className={styles.cancelSearch}>取消</div>
                        </div>
                    </div>
                </div>
                <div className={styles.searchMsg}>
                    <div className={styles.searchItemWrap}>
                        <div className={styles.title}>
                            历史记录
                            <i className="iconfont icon-shanchu-01"></i>
                        </div>
                    </div>
                    <div className={styles.searchItemWrap}>
                        <div className={styles.title}>热门搜索</div>
                        <div className={styles.listWrap}>
                            {
                                props.goods ? props.goods.map((item,index)=>(
                                    <div key={index}>
                                        <button className={styles.listItem} >{item.keyword}</button>
                                    </div>
                                ))
                                :''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

const mapStateToProps = (state: any) => {
    return {
        goods:state.goods.goods
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        getGoods:()=>{
            dispatch(goodsAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsDetailPage);