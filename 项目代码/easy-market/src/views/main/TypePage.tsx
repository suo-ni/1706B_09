import React, { useEffect, useState } from 'react'
import style from "../../css/type.module.scss"
import { connect } from 'react-redux'
import { typeAction } from '../../store/actions/type'
import { RouteComponentProps } from "react-router-dom"

interface category {
    id: number,
    name: string,
    banner_url: string,
    front_name: string
    icon_url: string,
    wap_banner_url: string

}

interface currentCategory {
    id: number,
    name: string,
    banner_url: string,
    front_name: string
    icon_url: string,
    wap_banner_url: string,
    subCategoryList: Array<category>,
}

interface ItemType {
    categoryList: Array<category>,
    currentCategory: currentCategory
}

interface StateType {
    typelist: ItemType,
    tab: Function
}
interface DisptachType {
    gettypeList: () => void
}

let TypePage: React.FC<DisptachType & StateType & RouteComponentProps> = (props) => {
    // console.log(props.typelist.currentCategory)
    let [ind] = useState<number>(1005000)
    console.log(ind);
    useEffect(() => {
        props.gettypeList();
    }, [])

    let tab = (e: any) => {
        let id = e.currentTarget.dataset.id;
        ind = id
        // setind(id)
        
        console.log(ind);

    }

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
                        props.typelist.categoryList && props.typelist.categoryList.map(item => (
                            <div className={ind === item.id ? 'active' : ''} key={item.id} 
                                onClick={tab} data-id={item.id}
                                // changeIndex={(index: number) => {
                                //     setInd(index);
                                //   }}
                                  >
                                <p className={style.tabItem}>{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                props.typelist.currentCategory ?
                    <div className={style.categogContet}>
                        <div className={style.categoryWrap}>
                            <span>{props.typelist.currentCategory.front_name}</span>
                            <img src={props.typelist.currentCategory.wap_banner_url} alt="" />
                        </div>
                        <div className={style.categoryTitle}>
                            <div></div>
                            居家分类
                            <div></div>
                        </div>
                        <div className={style.subCategory}>
                            {
                                props.typelist.currentCategory.subCategoryList.map(v => (
                                    <div className={style.subCategoryItem} key={v.id}>
                                        <img src={v.wap_banner_url} alt="" />
                                        <div className={style.subCategoryItemName}>{v.name}</div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    : ''
            }

        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        typelist: state.type.typelist
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