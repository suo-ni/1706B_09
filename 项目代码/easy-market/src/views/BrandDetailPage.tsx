import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'
import { typeDetailAction } from '../store/actions/TypeList'

interface StateType {
    detail: {
            banner_url: string,
            front_desc: string,
            front_name: string,
            [key: string]: string
    }
}

interface DispatchType {
    TypeDetail: (id: string) => void
}

let TopicDetailPage: React.FC<StateType & DispatchType & RouteComponentProps<{ id: string }>> = props => {
    console.log(props.detail)
    useEffect(() => {
        let id = props.match.params.id
        props.TypeDetail(id)
    }, [])
    return <>
        <div className="noTabPageContent">
            <div className="header">
                <div className="left">
                    <i className="iconfont icon-fanhui"></i>
                </div>
                <div className="title">
                    奇趣分类
                </div>
                <div className="right"></div>
            </div>
            <div className="tabWrap">
                <div className="tabs">
                    <div className="tab_bar_wrap">
                        {/* {props.detail.map((item) => {
                            
                        })} */}
                    </div>
                    <div className="tab_content_wrap">

                    </div>
                </div>
            </div>
        </div>
    </>
}

const mapStateToProps = (state: any) => {
    return { detail: state.TypeList.detail }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        TypeDetail: (id: string) => {
            dispatch(typeDetailAction(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicDetailPage);