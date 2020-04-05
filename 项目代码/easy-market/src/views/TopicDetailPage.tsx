import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import { topicDetailAction } from '../store/actions/topic'
import styles from '../css/topicDetail.module.scss'

interface StateType {
    detail: {
        content: string,
        [key: string]: string
    }
}

interface DispatchType {
    getTopicDetail: (id: string) => void
}

let TopicDetailPage: React.FC<DispatchType & StateType & RouteComponentProps<{ id: string }>> = props => {
    
    useEffect(() => {
        let id = props.match.params.id
        props.getTopicDetail(id);
    }, []);

    let go = () => {
        props.history.go(-1)
    }

    return (
        <div className={styles.topicDetail}>
            <div className={styles.header}>
                <div className={styles.left} onClick={go}><i className="iconfont icon-xiangzuo"></i></div>
                <div className={styles.title}>{props.detail.title}</div>
                <div className={styles.right}></div>
            </div>
            <div className={styles.topicDetailImg} dangerouslySetInnerHTML={{ __html: props.detail.content }}></div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        detail: state.topic.detail
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        getTopicDetail: (id: string) => {
            dispatch(topicDetailAction(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TopicDetailPage);   