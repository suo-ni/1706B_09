import React, { useEffect, useState } from 'react'
import { PropType, RouterItemType } from '../../utils/interface'
import { connect } from 'react-redux'
import { TypeListAction, contentAction } from '../../store/actions/TypeList'
import { RouteComponentProps } from 'react-router'
import TabBar from '../../components/tabBar'


interface StateType {
    list: ItemType,
    changeIndex: (index: number) => void
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

interface ItemType {
    categoryList: Array<category>,
    currentCategory: currentCategory
}
// interface itemType {
//     [name: string]: string | number
// }

interface DispatchType {
    TypeList: () => void,
    getContentItem: Function
}



let TypePage: React.FC<StateType & DispatchType & RouteComponentProps> = props => {
    console.log(props.list.categoryList)
let [ind, setInd] = useState(0)
let [activeIndex, setActiveIndex] = useState(0)
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
                    props.list.categoryList && props.list.categoryList.map((item, index: number) => {
                        return (
                            <div key={item.id}
                                className={activeIndex === index ? 'active': ''}
                                id="tabItem"
                            >{item.name}</div>
                        )
                    })
                }
            </div>
        </div>


        <div className="categogContet">
            <div className="categoryWrap" 
            >
                {
                props.list.currentCategory ?
                    <div className="categogContet">
                        <div className="categoryWrap">
                            <span>{props.list.currentCategory.front_name}</span>
                            <img src={props.list.currentCategory.wap_banner_url} alt="" />
                        </div>
                        <div className="categoryTitle">
                            <div></div>
                            居家分类
                            <div></div>
                        </div>
                        <div className="subCategory">
                            {
                                props.list.currentCategory.subCategoryList.map(v => (
                                    <div className="subCategoryItem" key={v.id}>
                                        <img src={v.wap_banner_url} alt="" />
                                        <div className="subCategoryItemName">{v.name}</div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    : ''
            }
            </div>
        </div>




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
    return {
        list: state.TypeList.Typelist,
        // contentItem: state.TypeList.currentCategory
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        TypeList: () => {
            dispatch(TypeListAction())
        },
        getContentItem(id: number) {
            dispatch(contentAction(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TypePage);