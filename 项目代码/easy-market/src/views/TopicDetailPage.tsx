import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'
import { TopicDetailAction } from '../store/actions/topic'
import style from './TopicDetailPage.module.scss'

interface StateType {
    detail: {
        content: string,
        [key: string]: string
    }
}

interface DispatchType {
    TopicDetail: (id: string) => void
}

let TopicDetailPage: React.FC<StateType & DispatchType & RouteComponentProps<{ id: string }>> = props => {
    console.log(props)
    useEffect(() => {
        let id = props.match.params.id
        props.TopicDetail(id)
    }, [])
    let goback = () => {
        props.history.goBack()
    }
    return <>
        <div className="noTabPageContent">
            <div className="topicDetail">
                <div className="header">
                    <div className="left">
                        <i onClick={goback} className="iconfont icon-fanhui"></i>
                    </div>
                    <div className="title">
                        {props.detail.title}
                    </div>
                    <div className="right">

                    </div>
                </div>
                
                <div className="topicDetailImg">
                    <div dangerouslySetInnerHTML={{ __html: props.detail.content }}>
                        {/* <img src={props.detail.content} alt=""/> */}
                    </div>
                </div>

            </div>
        </div>
    </>;
}

const mapStateToProps = (state: any) => {
    return {
        detail: state.topic.detail
    }
}

const mapDispatch = (dispatch: Function) => {
    return {
        TopicDetail: (id: string) => {
            dispatch(TopicDetailAction(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatch)(TopicDetailPage);