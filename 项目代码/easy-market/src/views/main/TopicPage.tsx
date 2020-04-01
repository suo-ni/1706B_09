import React, { useEffect, useState } from 'react'
import { PropType, RouterItemType } from '../../utils/interface'
import { RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'
import { TopicAction } from '../../store/actions/topic'
import { throttle } from '../../utils/index'

interface ItemType {
    id: number,
    title: string,
    price_info: number,
    subtitle: string,
    scene_pic_url: string,
}

interface BSProps {
    getBs: () => void
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
        props.getBs()
    }, []);
    let goDetail = (e: React.MouseEvent<HTMLImageElement>) => {
        let id = e.currentTarget.dataset.id;
        // props.history.push('/TopicDetailPage?id=' + id)
        console.log(id)
    };

    // let [size, useSize] = useState(10)
    let [page, setPage] = useState<number>(0);
    useEffect(() => {
        
        let flag = false;
        let scrollHandle = (e: Event) => {
            if(flag) return;
            let scrollY = (e.currentTarget as Window).scrollY
            console.log('-----', scrollY)
            if((window.innerHeight + scrollY) - document.documentElement.getBoundingClientRect().height  < 20) {
                console.log('到底了')
                console.log(document.documentElement.getBoundingClientRect().height - (window.innerHeight + scrollY))
                console.log(document.documentElement.getBoundingClientRect().height)
                // if(props.list.length <= (page+1)*10){
                //     return;
                //  }
                //   flag = true
                  console.log('底部')
                  setPage(page=>page+1)
                  flag = false;
            }
        }

        let wrapHandle = throttle(scrollHandle)
        window.addEventListener('scroll',wrapHandle)
        return ()=>{
             window.removeEventListener('scroll',wrapHandle)
        }

        // props.getBs(size, page)
        // console.log(size, page)
        // setPage(page += 1)
        // let bs = new BScroll('.tabPageContent', {
        //     // click: true,
        //     pullUpLoad: {
        //         threshold: -100
        //     }
        // });
        // bs.on('pullingUp', () => {
        //     props.getBs(size, page)
        //     setPage(page ++)
        //     bs.finishPullUp()
        //     bs.refresh()
        // })

        
    }, [props.list])
    return <>
        {/* <div className="tabPageContent">
            <div className="connect"> */}
                {
                    props.list.slice(0, (page+1)*10).map((item) => {
                        // return <a className="topicItem" href="#">
                        //     <img key={item.id} onClick={goDetail} data-id={item.id} className="imgLazyload" src={item.scene_pic_url} alt="" />
                        //     <div className="topicItemTitle">{item.title}</div>
                        //     <div className="topicItemSubtitle">{item.subtitle}</div>
                        //     <div className="topicItemPrice">
                        //         {item.price_info}元起
                        //     </div>
                        // </a>
                        return <li key={item.id} className='topic-li' data-id={item.id}>
                        <img src={item.scene_pic_url} alt=""/>
                        <div>{item.title}</div>
                        <div>{item.subtitle}</div>
                        <div>{item.price_info}元起</div>
                    </li>
                    })
                }
            {/* </div>
        </div> */}
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