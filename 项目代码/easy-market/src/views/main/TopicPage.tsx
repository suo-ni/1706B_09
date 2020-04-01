import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { topicAction } from '../../store/actions/topic'
import { RouteComponentProps } from "react-router-dom"
import style from "../../css/topic.module.scss"
import BScroll from 'better-scroll';
import { throttle, debounce } from '../../utils';

interface ItemType {
    id: number,
    title: string,
    price_info: number,
    subtitle: string,
    scene_pic_url: string
}

interface BSProps {
    getBs: (size: number, page: number) => void
}

interface StateType {
    list: Array<ItemType>
}
interface DisptachType {
    getTopicList: () => void
}

let TopicPage: React.FC<DisptachType & BSProps & StateType & RouteComponentProps> = (props) => {
    // console.log(props.list)
    let [size, useSize] = useState<number>(10)
    let [page, setPage] = useState<number>(0)


    useEffect(() => {
        props.getTopicList();
    }, [])

    let getDetail = (e:any) => {
        let id = e.currentTarget.dataset.id;
        // props.history.push("/topicDetail?id=" + id)
    }

    // useEffect(() => {
    //     props.getBs(size, page)
    //     setPage(page += 1)
    //     // console.log(size, page)
    //     let bs = new BScroll('.tabPageContent', {
    //         click: true,
    //         pullUpLoad: {
    //             threshold: -100
    //         }
    //     });
    //     bs.on('pullingUp', () => {
    //         props.getBs(size, page)
    //         setPage(page += 1)
    //         console.log(size, page)
    //         bs.finishPullUp()
    //         bs.refresh()
    //     })
    // }, [])

    useEffect(()=>{
    let flag = false;
    let scrollHandle = (e:Event)=>{
        console.log(e);
        if(flag){
            return;
        }
        let scrollY = (e.currentTarget as Window).scrollY
        // if(document.documentElement.offsetHeight - (window.innerHeight+scrollY)<0){
            // if(props.list.length <= (page+1)*10){
            //     return;
            // }
            // flag = true
            // setPage(page=>page+1)
            // flag = false
        // }
        
    }
    let wrapHandle = debounce(scrollHandle);
    window.addEventListener('scroll',wrapHandle)
    return () =>{
        window.removeEventListener("scroll",wrapHandle)
    }
    },[props.list])

    return <>
        <div className="tabPageContent">
            <div className="connect">
                {
                    props.list && props.list.map(item => {
                        return (
                            <div className="topicItem" key={item.id} onClick={getDetail} data-id={item.id}>
                                <img src={item.scene_pic_url} alt="" />
                                <div className="topicItemTitle">{item.title}</div>
                                <div className="topicItemSubtitle">{item.subtitle}</div>
                                <div className="topicItemPrice">{item.price_info}元起</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
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
        },
        getBs: () => {
            dispatch(topicAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicPage);