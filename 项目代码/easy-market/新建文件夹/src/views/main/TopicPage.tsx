import React, {useEffect} from 'react'
import { PropType, RouterItemType } from '../../utils/interface'
import { RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'
import { TopicAction } from '../../store/actions/topic'

interface ItemType {
    id: number,
    title: string,
    price_info: number,
    subtitle: string,
    scene_pic_url: string,
}

interface StateType {
    list: Array<ItemType>,
}

interface DispatchType {
    Topic: () => void
}

let TopiclPage: React.FC<StateType & DispatchType & RouteComponentProps> = props=>{
    useEffect(() => {
        props.Topic()
    }, []);
    let goDetail = (e:React.MouseEvent<HTMLImageElement>) => {
        let id = e.currentTarget.dataset.id;
        // props.history.push('/TopicDetailPage?id=' + id)
        console.log(id)
    }
    return <>
        <div className="tabPageContent">
            <a className="topicItem" href="#">
                {
                    props.list.map((item) => {
                        return <>
                            <img key={item.id} onClick={goDetail} data-id={item.id} className="imgLazyload" src={item.scene_pic_url} alt=""/>
                            <div className="topicItemTitle">{item.title}</div>
                            <div className="topicItemSubtitle">{item.subtitle}</div>
                            <div className="topicItemPrice">
                                {item.price_info}元起
                            </div>
                        </>
                    })
                }
            </a>
        </div>
    </>
}

const mapStateToprops = (state: any)  => {
    return {list:state.topic.list}
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        Topic: () => {
            dispatch(TopicAction())
        }
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(TopiclPage);