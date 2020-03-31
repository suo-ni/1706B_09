import React, {useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { topicAction } from '../../store/actions/topic'
import { RouteComponentProps } from "react-router-dom"
import style from "../../css/topic.module.scss"
import { throttle, debounce } from '../../utils';

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
    let [page, setPage] = useState<number>(0)

 
    useEffect(() => {
        props.getTopicList();
    }, [])

    let getDetail = (e: any) => {
        let id = e.currentTarget.dataset.id;
        props.history.push("/topicDetail?id=" + id)
    }

    useEffect(()=>{
        let flag = false;
        // window.addEventListener('scroll', e => {
        //     let scrollY = (e.currentTarget as Window).scrollY;
        //     console.log('scrollY...', scrollY);
        //     // if (document.documentElement.getBoundingClientRect().height - (window.innerHeight + scrollY) < 20){

        //     // }
        // })
        let scrollHandle = (e:Event)=>{
            if(flag){
                return;
            }
            let scrollY = (e.currentTarget as Window).scrollY

            if(document.documentElement.getBoundingClientReact().height - (window.innerHeight + scrollY) <20){
                if(props.list.length <= (page+1)*10){
                    return;
                }
                flag = true
                setPage(page=>page+1)
                flag = false
            }
        }
        let wrapHandle = debounce(scrollHandle);
        window.addEventListener('scroll',wrapHandle)
        return () =>{
            window.removeEventListener("scroll",wrapHandle)
        }
    },[props.list])

    return <div className={style.tabPageContent}>
        {
            props.list && props.list.slice(0,(page+1)*10).map(item => {
                return (
                    <div className={style.topicItem} key={item.id} onClick={getDetail} data-id={item.id}>
                        <img src={item.scene_pic_url} alt="" />
                        <div className={style.topicItemTitle}>{item.title}</div>
                        <div className={style.topicItemSubtitle}>{item.subtitle}</div>
                        <div className={style.topicItemPrice}>{item.price_info}元起</div>
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