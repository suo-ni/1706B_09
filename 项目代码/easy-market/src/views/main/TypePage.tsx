import React, { useEffect } from 'react'
import style from "../../css/type.module.scss"
import { connect } from 'react-redux'
import { typeAction } from '../../store/actions/type'
import { RouteComponentProps } from "react-router-dom"

interface ItemType {
    id: number,
    name: string,
    banner_url: string,
    front_name: string
    icon_url: string
}

interface StateType {
    typelist: Array<ItemType>
}
interface DisptachType {
    gettypeList: () => void
}

let TypePage: React.FC<DisptachType & StateType & RouteComponentProps> = (props) => {
    console.log(props.typelist)
    useEffect(() => {
        props.gettypeList();
    }, [])


    return (
        <div className={style.tabPageContent}>
            <div className={style.searchWrap}>
                <div className={style.searchInput}>
                    <span>搜索商品，共239款好物</span>
                </div>
            </div>
            <div className={style.tabsWrap} >
                <div className={style.tab}>
                    {
                        props.typelist && props.typelist.map(item => (
                            <div className={style.tabItem} key={item.id}>{item.name}</div>
                        ))
                    }
                </div>
            </div>
            <div className={style.categogContet}>
                <div className={style.categoryWrap}></div>
                <div className={style.categoryTitle}>居家分类</div>
            </div>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        typelist: state.type.typelist.categoryList
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        gettypeList: () => {
            dispatch(typeAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TypePage);