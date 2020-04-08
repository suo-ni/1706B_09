import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'
import { GoodsSearchAction } from '../store/actions/goodsSearch'
import style from './GoodsSearch.module.scss'

let arr = ['综合', '价格', '全部分类']

interface StateType {
    searchHot: Array<{
        // list_pic_url: string,
        // keyword: string,
        // is_hot: number,
        // retail_price: number,
        [key: string]: string
    }>
}

interface DispatchType {
    getGoodsSearch: (keyword: string) => void
}

let GoodsSearchPage: React.FC<StateType & DispatchType & RouteComponentProps> = props => {
    let [keyword, setKeyword] = useState<string>('')
    let [newindex, setNewindex] = useState(0)
    let tab = (i: number) => {
        setNewindex(i)
    }
    console.log(props)
    useEffect(() => {
        props.getGoodsSearch(keyword)
    }, [])
    
    let changeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
        let Keyword = e.target.value
        props.getGoodsSearch(Keyword)
        console.log('e.target.value',e.target.value)
         setKeyword(e.target.value)
    };

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
                        <input value={keyword} onInput={changeKeyword} className={style.searchInput} type="text" placeholder="520元礼包抢先领先" />
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
            <div className={style.searchConditionWrap}>
                <div className={style.searchCondition}>
                    {/* {
                        arr.map((v, i) => {
                            return <div className={newindex === i ? 'active' : ''}>{v}</div>
                        })
                    } */}
                </div>
            </div>
            <div className={style.goodsList}>
                {
                    props.searchHot?props.searchHot.map((v, i) => {
                        return <div key={i} className={style.goodsItem}>
                        <div className={style.goodsItemImg}>
                            <img src={v.list_pic_url} alt=""/>
                        </div>
                            
                            <p>{v.name}</p>
                            <p>￥{v.retail_price}</p>
                        </div>
                    }):""
                }
            </div>
        </div>
    </div>
}

const mapStateToProps = (state: any) => {
    return {searchHot: state.goodsSearch.keyword}
}

const mapDispatch = (dispatch: Function) => {
    return {
        getGoodsSearch(keyword: string) {
            dispatch(GoodsSearchAction(keyword))
        }
    }
}
export default connect(mapStateToProps, mapDispatch)(GoodsSearchPage);