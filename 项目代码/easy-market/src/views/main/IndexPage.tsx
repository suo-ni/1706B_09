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
        icon_url: string,
        [name: string]: string | number
    }>,
    newGoodsList: Array<{
        list_pic_url: string,
        [name: string]: string | number
    }>,
    hotGoodsList: Array<{
        list_pic_url: string,
        [name: string]: string | number
    }>,
    brandList: Array<{
        new_pic_url: string,
        [name: string]: string | number
    }>,
    topicList: Array<{
        item_pic_url: string,
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
        props.getBanner()
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

        <div className="channelWrap">
            {
                props.channel.map(item => (
                    <a key={item.id} href="">
                        <img src={item.icon_url} />
                        <div>{item.name}</div>
                    </a>
                ))
            }
        </div>

        <div className="brandBox">
            <div className="brandTitle">品牌制造商直供</div>
            <div className="brandWrap">
                {
                    props.brandList.map(item => (
                        <div className="brandItem" key={item.id}>
                            <div className="brandItemName">{item.name}</div>
                            <div className="brandItemMinPrice">{item.floor_price}元起</div>
                            <img src={item.new_pic_url} alt=""/>
                        </div>
                    ))
                }
            </div>
        </div>
        
        <div className="newGoodsBox">
            <div className="newGoodsTitle">新品首发</div>
            <div className="newGoodsWrap">
                {
                    props.newGoodsList.map(item => (
                        <div className="newGoodsItem" key={item.id}>
                            <img src={item.list_pic_url} alt=""/>
                            <div className="newGoodsName">{item.name}</div>
                            <div className="newGoodsPrice">￥{item.retail_price}</div>
                        </div>
                    ))
                }
            </div>
        </div>
        
        <div className="hotGoodsBox">
            <div className="hotGoodsTitle">人气推荐</div>
            <div className="hotGoodsWrap">
                {
                    props.hotGoodsList.map(item => (
                        <div className="hotGoodsItem" key={item.id}>
                            <img src={item.list_pic_url} alt=""/>
                            <div className="hotGoodsInfos">
                                <div className="hotGoodsName">{item.name}</div>
                                <div className="hotGoodsInfo">{item.goods_brief}</div>
                                <div className="hotGoodsPrice">￥{item.retail_price}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        
        <div className="topGoodsBox">
            <div className="topGoodsTitle">专题精选</div>
            <div className="topGoodsWrap">
                <div className="slider">
                    <div className="slider-fram">
                        <ul className="slider-list">
                            {
                                props.topicList.map(item => (
                                    <li className="slider-slide" key={item.id}>
                                        <div className="topGoodsItem">
                                            <img src={item.item_pic_url} alt=""/>
                                            <div className="topGoodSubTitle">
                                                {item.title}
                                                <span className="topGoodPrice">￥{item.price_info}元起</span>
                                            </div>
                                            <div className="topGoodTitle">{item.subtitle}</div>
                                        </div>

                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            {

            }
            {
                console.log(props.topicList)
            }
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