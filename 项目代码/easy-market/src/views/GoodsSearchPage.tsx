import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'
import { GoodsSearchAction } from '../store/actions/goodsSearch'
import style from './GoodsSearch.module.scss'

interface StateType {
    list: Array<{
        [key: string]: string | number
    }>
}

interface DispatchType {
    getGoodsSearch: () => void
}

let GoodsSearchPage: React.FC<StateType & DispatchType & RouteComponentProps> = props => {
    console.log(props)
    console.log(props)
    useEffect(() => {
        props.getGoodsSearch()
    }, [])
    
    return <div className={style.noTabPageContent}>
        <div className={style.searchPage}>
            <div className={style.searchFix}>
                <div className={style.Input}>
                    <div className={style.searchInputWrap}>
                        <div className={style.goBack}>
                            <i className="iconfont icon-fanhui"></i>
                        </div>
                        <div className={style.icon}>
                            <i className="iconfont icon-search"></i>
                        </div>
                        <input className={style.searchInput} type="text" placeholder="520元礼包抢先领先" />
                        <div className={style.cancelSearch}>取消</div>
                    </div>
                </div>
            </div>
            <div className={style.searchMsg}>
                <div className={style.searchItemWrap}>
                    <div className={style.title}>
                        历史记录
                        <i className="iconfont icon-shanchu"></i>
                    </div>
                    <div className={style.listWrap}>
                        <button className={style.listItem}>520元礼包抢先领</button>
                        <button className={style.listItem}>母亲节</button>
                        <button className={style.listItem}>萨达</button>
                        <button className={style.listItem}>夏凉被</button>
                    </div>
                </div>
                <div className={style.searchItemWrap}>
                    <div className={style.title}>热门搜索</div>
                    <div className={style.listWrap}>
                        <div className={style.listItem}>
                            520元红包抢先领
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

const mapStateToProps = (state: any) => {
    return {
        list: state.goodsSearch.list
    }
}

const mapDispatch = (dispatch: Function) => {
    return {
        getGoodsSearch() {
            dispatch(GoodsSearchAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatch)(GoodsSearchPage);