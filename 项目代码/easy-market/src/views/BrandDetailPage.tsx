import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getbranDetailAction } from '../store/actions/branDetail'
import { RouteComponentProps } from "react-router-dom"
import styles from '../css/branDetail.module.scss'

interface StateType {
    branDetail:{
        id: number,
        name: string,
        list_pic_url: string,
        simple_desc: string
    },
}

interface DisptachType {
    getBanner: (id: any) => void
}

let TopicDetailPage: React.FC<StateType & DisptachType & RouteComponentProps<{ id: any }>> = props => {
    console.log(props.branDetail)
    useEffect(() => {
        let id = props.match.params.id
        props.getBanner(id)
    }, [])

    let go = () => {
        props.history.go(-1)
    }
    return <>
        {
            props.branDetail ?
                <div className={styles.noTabPageContent}>
                    <div className={styles.header}>
                        <div className={styles.left} onClick={go}><i className="iconfont icon-xiangzuo"></i></div>
                        <div className={styles.title}>{props.branDetail.name}</div>
                        <div className={styles.right}></div>
                    </div>
                    <div className={styles.brandDetail}>
                        <img src={props.branDetail.list_pic_url} alt="" />
                        <div className={styles.breadDesc}>{props.branDetail.simple_desc}</div>
                    </div>
                </div>
                : ""
        }
    </>
}

const mapStateToProps = (state: any) => {
    return {
        branDetail: state.branDetail.branDetail
    }
}
const mapDisptachToProps = (dispatch: Function) => {
    return {
        getBanner: (id: any) => {
            dispatch(getbranDetailAction(id))
        }
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(TopicDetailPage);