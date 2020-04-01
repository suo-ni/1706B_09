import React, { useEffect, useState } from 'react'
import { PropType, RouterItemType } from '../../utils/interface'
import { connect } from 'react-redux'
import { TypeListAction, tabAction } from '../../store/actions/TypeList'
import { RouteComponentProps } from 'react-router'
import TabBar from '../../components/tabBar'


interface StateType {
    list: Array<category>,
    curentTmg: string,
    currentCategory: Array<currentCategory>
}
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


// interface itemType {
//     [name: string]: string | number
// }

interface DispatchType {
    TypeList: () => void,
    getTab: (id: any) => void
}



let TypePage: React.FC<StateType & DispatchType & RouteComponentProps> = props => {
    console.log(props.list)
    let [ind, setInd] = useState<number>(0)
    // let [activeIndex, setActiveIndex] = useState(0)
    let tab = (index: any, id: any) => {
        setInd(index)
        props.getTab(id)
    }
    useEffect(() => {
        props.TypeList();
    }, [])

    // useEffect(() => {
    //     if (props.list.length > 0) {
    //       props.getContentItem(props.list[ind].id);
    //     }
    //   }, [props.list])

    //   useEffect(() => {
    //     if (props.list.length > 0) {
    //       props.getContentItem(props.list[ind].id);
    //     }
    //   }, [ind])

    return <div className="tabPageContent">
        <div className="searchWrap">
            <div className="searchInput">
                <span>搜索商品，共239款好物</span>
            </div>
        </div>
        <div className="tabsWrap">
            <div className="tabList">
                {
                    props.list && props.list.map((item, index) => {
                        console.log(item)
                        return <div className={ind === index ? 'active' : ''} key={index}
                            onClick={() => {
                                tab(index, item.id);
                            }}>
                            <p className="tabItem">{item.name}</p>
                        </div>
                    })
                }
            </div>
        </div>

                {
                    props.currentCategory && props.currentCategory.map(item => (
                        <div className="categogContet">
                            <div className="categoryWrap">
                                <span>{item.front_name}</span>
                                <img src={item.wap_banner_url} alt="" />
                            </div>
                            <div className="categoryTitle">
                                <div></div>
                                居家分类
                            <div></div>
                            </div>
                            <div className="subCategory">
                                {
                                    item.subCategoryList && item.subCategoryList.map(v => (
                                        <div className="subCategoryItem" key={v.id}>
                                            <img src={v.wap_banner_url} alt="" />
                                            <div className="subCategoryItemName">{v.name}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }





        {/* 分类左边 */}
        {/* <div className="tabsWrap">
            <div className="tabList">
                {
                    props.list && props.list.map((item, index) => {
                        return <div onClick={changeTab} data-id={item.id} key={item.id} id="tabItem">
                            {item.name}
                        </div>
                    })
                }
            </div>
        </div> */}



        {/* <div className="categogContet">
            {
                props.list && props.list.map((item => {
                    return <>
                        <div className="categoryWrap">
                            {item.front_name}
                        </div>
                    </>
                }))
            }

        </div> */}
    </div>
}

const mapStateToProps = (state: any) => {
    if ([state.type.currentCategory]) {
        return {
            list: state.TypeList.categoryList,
            currentCategory: [state.TypeList.currentCategory],
        }
    } else {
        return
    }

}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        TypeList: () => {
            dispatch(TypeListAction())
        },
        getTab(id: any) {
            dispatch(tabAction(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TypePage);