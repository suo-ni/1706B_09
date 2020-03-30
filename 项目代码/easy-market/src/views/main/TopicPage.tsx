import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { topicAction } from '../../store/actions/topic'
import { RouteComponentProps } from "react-router-dom"

interface ItemType {
    id: number,
    title: string,
    price_info: number,
    subtitle: string,
    scene_pic_url: string
}

interface StateType {
    list: Array<ItemType>
}
interface DisptachType {
    getTopicList: () => void
}

let TopicPage: React.FC<DisptachType & StateType & RouteComponentProps> = (props) => {
    // console.log(props.list)
    useEffect(() => {
        props.getTopicList();
    }, [])

    let getDetail = (e: any) => {
        let id = e.currentTarget.dataset.id;
        props.history.push("/topicDetail?id=" + id)
    }

    return <div className="tabPageContent">
        {
            props.list && props.list.map(item => {
                return (
                    <div className='topicItem' key={item.id} onClick={getDetail} data-id={item.id}>
                        <img src={item.scene_pic_url} alt="" />
                        <div className="topicItemTitle">{item.title}</div>
                        <div className="topicItemSubtitle">{item.subtitle}</div>
                        <div className="topicItemPrice">{item.price_info}元起</div>
                    </div>
                )
            })
        }
    </div>
}
const mapStateToProps = (state: any) => {
    return {
        list: state.topic.list.data
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        getTopicList: () => {
            dispatch(topicAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicPage);