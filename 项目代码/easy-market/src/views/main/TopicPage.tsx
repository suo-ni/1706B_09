import React, {useEffect} from 'react'
import { PropType, RouterItemType } from '../../utils/interface'
import { RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'
import { TopicAction } from '../../store/actions/topic'

interface StateType {
    topicList: Array<{
        scene_pic_url: string,
        [name: string]: string | number
    }>
}

interface DispatchType {
    Topic: Function
}

let TopiclPage: React.FC<StateType & DispatchType & RouteComponentProps> = props=>{
    useEffect(() => {
        props.Topic()
    }, [])
    return <>
        <div className="tabPageContent">
        aaaaaa
            <a className="topicItem" href="#">
                {
                    props.topicList && props.topicList.map(item => {
                        console.log(item)
                        return <>
                            <img className="imgLazyload" src={item.scene_pic_url} alt=""/>
                            <div className="topicItemTitle"></div>
                            <div className="topicItemSubtitle"></div>
                            <div className="topicItemPrice">
                                元起
                            </div>
                        </>
                    })
                }
            </a>
        </div>
    </>
}

const mapStateToprops = (state: any)  => {
    return state.topic
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        Topic: () => {
            dispatch(TopicAction())
        }
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(TopiclPage);