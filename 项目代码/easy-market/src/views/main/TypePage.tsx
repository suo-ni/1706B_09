import React, { useEffect, useState } from 'react'
import style from "../../css/type.module.scss"
import { connect } from 'react-redux'
import { typeAction, tabAction } from '../../store/actions/type'
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


interface StateType {
    typelist: Array<category>;
    curentImg: string;
    currentCategory:Array<currentCategory>
}
interface DisptachType {
    gettypeList: () => void,
    getTab: (id: any) => void
}

let TypePage: React.FC<DisptachType & StateType & RouteComponentProps> = (props) => {
    // console.log(props.currentCategory)

    useEffect(() => {
        props.gettypeList();
    }, [])

    let [ind,setInd] = useState<number>(0)
    let tab = (index: any,id:any) => {
        setInd(index)
        props.getTab(id)
    }

    let goTypeDetail = (e: any)=>{
        let id = e.currentTarget.dataset.id;
        console.log(id)
        props.history.push(`/typeDetail/${id}`)
    }

    let goods = ()=>{
        props.history.push('/goodsDetail')
    }

    return (
        <div className={style.tabPageContent}>
            <div className={style.searchWrap}>
                <div className={style.searchInput} onClick={goods}>
                    <span>搜索商品，共239款好物</span>
                </div>
            </div>

            <div className={style.tabsWrap} >
                <div className={style.tab}>
                    {
                        props.typelist && props.typelist.map((item,index) => (
                            <div className={ind === index ? 'active' : ''} key={item.id} 
                                onClick={() => {
                                    tab(index,item.id);
                                }}>
                                <p className={style.tabItem}>{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            {
                props.currentCategory && props.currentCategory.map((item,index)=>(
                    <div className={style.categogContet} key={index}>
                        <div className={style.categoryWrap}>
                            <span>{item.front_name}</span>
                            <img src={item.wap_banner_url} alt="" />
                        </div>
                        <div className={style.categoryTitle}>
                            <div></div>
                            居家分类
                            <div></div>
                        </div>
                        <div className={style.subCategory}>
                            {
                                item.subCategoryList && item.subCategoryList.map(v=>(
                                    <div className={style.subCategoryItem} key={v.id} onClick={goTypeDetail} data-id={v.id}>
                                        <img src={v.wap_banner_url} alt="" />
                                        <div className={style.subCategoryItemName}>{v.name}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
const mapStateToProps = (state: any) => {
    // console.log([state.type.currentCategory])
    if ([state.type.currentCategory]) {
        return {
            typelist: state.type.categoryList,
            currentCategory: [state.type.currentCategory],
        };
    } else {
        return;
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        gettypeList: () => {
            dispatch(typeAction())
        },
        getTab: (id: any) => {
            dispatch(tabAction(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TypePage);