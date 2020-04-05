import React,{ useEffect } from 'react'
import {connect} from "react-redux"
import {RouteComponentProps} from "react-router-dom"
import {TypeDetailAction} from '../store/actions/type'
import style from "../css/type.module.scss"


interface StateType {
    typeDetail: {
        [key: string]: string
    }
}

interface DispatchType {
    getTypeDetail: (id: string) => void
}

let Categorys: React.FC<StateType & DispatchType & RouteComponentProps<{ id: string }>> = props=>{
    console.log(props)
    useEffect(() => {
        let id = props.match.params.id
        console.log(id);
        props.getTypeDetail(id);
    }, []);

    let go = () => {
        props.history.go(-1)
    }

    return <>
        <div className={style.noTabPageContent}>
            <div className={style.header}>
                <div className={style.left} onClick={go}>
                    <i className="iconfont icon-xiangzuo"></i>
                </div>
                <div className={style.right}></div>
                <div className={style.title}>奇趣分类</div>
            </div>
            <div className={style.tabWrap}>
                
            </div>
        </div>
    </>
}

const mapStateToProps = (state: any) => {
    console.log( state.type.typeDetail);
    return {
        typeDetail: state.type.typeDetail
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        getTypeDetail: (id: string) => {
            dispatch(TypeDetailAction(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categorys);