import React, { useEffect } from 'react'
import styles from "../css/collect.module.scss"
import { connect } from 'react-redux'
import { collectAction, addorremoveAction } from '../store/actions/collect'
import { myTouch } from '../utils/touch'


interface dispatchType {
    getCollectList: Function,
    removeItem: Function

}

interface stateType {
    list: Array<{
        id: string,
        [key: string]: number | string
    }>
}

let CllectPage: React.FC<dispatchType & stateType> = props => {

    useEffect(() => {
        props.getCollectList()
    }, [])

    useEffect(() => {
        let itemList = document.querySelectorAll(".item");
        if (itemList.length > 0) {
            Array.from(itemList).forEach(item => {
                myTouch.swiper(item, "left", () => {
                    item.classList.add("l");
                    item.classList.remove("r");
                })
                myTouch.swiper(item, "right", () => {
                    item.classList.add("r");
                    item.classList.remove("l");
                })
            })
        }
    }, [props.list])


    let go = () => {
        props.history.go(-1)
    }

    return <>
        <div className={styles.noTabPageContent}>
            <div className={styles.header}>
                <div className={styles.left} onClick={go}><i className="iconfont icon-xiangzuo"></i></div>
                <div className={styles.title}>easyLikeGoods</div>
                <div className={styles.right}></div>
            </div>
            <div className={styles.collectList} id="list">
                {
                    props.list.map((item) => {
                        return (
                            <div className={styles.touchClear + " item"} key={item.id}>
                                <div className={styles.test}>
                                    <div className={styles.collectItem}>
                                        <img src={item.list_pic_url + ""} alt="" className={styles.collectImg} />
                                        <div className={styles.collectMsg}>
                                            <div>{item.name}</div>
                                            <div>{item.goods_brief}</div>
                                            <div>￥{item.retail_price}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.colse} onClick={() => { props.removeItem(item.value_id) }}>删除</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
}

const mapStateToProps = (state: any) => {
    return {
        list: state.collect.data
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        getCollectList() {
            dispatch(collectAction())
        },
        removeItem(id: string) {
            dispatch(addorremoveAction(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CllectPage);