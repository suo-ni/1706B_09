import React, { useEffect, useState } from 'react'
import { PropType, RouterItemType } from '../../utils/interface'
import { RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'
import { TopicAction } from '../../store/actions/topic'
import BScroll from 'better-scroll';

interface ItemType {
    id: number,
    title: string,
    price_info: number,
    subtitle: string,
    scene_pic_url: string,
}

interface BSProps {
    getBs: (size: number, page: number) => void
}

interface StateType {
    list: Array<ItemType>,
}

interface DispatchType {
    Topic: () => void
}

let TopiclPage: React.FC<StateType & BSProps & DispatchType & RouteComponentProps> = props => {
    useEffect(() => {
        props.Topic()

    }, []);
    let goDetail = (e: React.MouseEvent<HTMLImageElement>) => {
        let id = e.currentTarget.dataset.id;
        // props.history.push('/TopicDetailPage?id=' + id)
        console.log(id)
    };

    let [size, useSize] = useState(10)
    let [page, setPage] = useState(1)
    useEffect(() => {
        props.getBs(size, page)
        console.log(size, page)
        setPage(page += 1)
        let bs = new BScroll('.tabPageContent', {
            click: true,
            pullUpLoad: {
                threshold: -100
            }
        });
        bs.on('pullingUp', () => {
            props.getBs(size, page)
            setPage(page += 1)
            console.log(size, page)
            bs.finishPullUp()
            bs.refresh()
        })
    }, [])
    return <>
        <div className="tabPageContent">
            <div className="connect">
                {
                    props.list.map((item) => {
                        return <a className="topicItem" href="#">
                            <img key={item.id} onClick={goDetail} data-id={item.id} className="imgLazyload" src={item.scene_pic_url} alt="" />
                            <div className="topicItemTitle">{item.title}</div>
                            <div className="topicItemSubtitle">{item.subtitle}</div>
                            <div className="topicItemPrice">
                                {item.price_info}元起
                            </div>
                        </a>
                    })
                }
            </div>
        </div>
    </>
}

const mapStateToprops = (state: any) => {
    return { list: state.topic.list }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        Topic: () => {
            dispatch(TopicAction())
        },
        getBs: () => {
            dispatch(TopicAction())
        }
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(TopiclPage);