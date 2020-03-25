import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bannerAction } from '../../store/actions/home'
import { RouteComponentProps } from 'react-router'
import Swiper from "swiper"
import "swiper/css/swiper.min.css"

interface StateType {
    banner: Array<{
        image_url: string,
        [name: string]: string | number
    }>,
    channel: Array<{
        [name: string]: string | number
    }>,
    newGoodsList: Array<{
        [name: string]: string | number
    }>,
    hotGoodsList: Array<{
        [name: string]: string | number
    }>,
    brandList: Array<{
        [name: string]: string | number
    }>,
    topicList: Array<{
        [name: string]: string | number
    }>,
    categoryList: Array<{
        [name: string]: string | number
    }>
}

interface DispatchType {
    getBanner: Function
}

let TopicDetailPage: React.FC<StateType & DispatchType & RouteComponentProps> = props => {

    useEffect(() => {
        props.getBanner();
        
        new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }, []);
    
    return <>
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {
                    props.banner.map(item => (
                        <div className="swiper-slide" key={item.id}>
                            <img src={item.image_url} />
                        </div>
                    ))
                }
            </div>
            <div className="swiper-pagination"></div>
        </div>
    </>;
}

const mapStateToProps = (state: any) => {
    console.log('state.home...', state.home)
    return state.home
}
const mapDisptachToProps = (dispatch: Function) => {
    return {
        getBanner: () => {
            dispatch(bannerAction())
        }
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(TopicDetailPage);