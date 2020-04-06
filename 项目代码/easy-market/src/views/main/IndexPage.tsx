import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bannerAction } from '../../store/actions/home'
import { RouteComponentProps } from 'react-router'
import { Carousel, WingBlank } from 'antd-mobile';
import Swiper from "swiper"
import "swiper/css/swiper.min.css"
import style from "../../css/IndexPage.module.scss"

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
        [name: string]: string | number,
        goodsList: string | any,
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

    let banner = (id: any) => {
        props.history.push(`/typeDetail/${id}`)
    }

    let getDetail = (id: any) => {
        props.history.push(`/brandDetail/${id}`)
    }

    let goods = (id:any)=>{
        props.history.push(`/goods/${id}`)
    }

    let typeDetail =(id:any)=>{
        props.history.push(`/typeDetail/${id}`)
    }
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

        <div className={style.channelWrap}>
            {
                props.channel.map(item => (
                    <a key={item.id} onClick={() => banner(item.id)}>
                        <img src={item.icon_url} />
                        <div>{item.name}</div>
                    </a>
                ))
            }
        </div>

        <div className={style.brandBox}>
            <div className={style.brandTitle}>品牌制造商直供</div>
            <div className={style.brandWrap}>
                {
                    props.brandList.map(item => (
                        <div className={style.brandItem} key={item.id} onClick={() => getDetail(item.id)}>
                            <div className={style.brandItemName}>{item.name}</div>
                            <div className={style.brandItemMinPrice}>{item.floor_price}元起</div>
                            <img src={item.new_pic_url} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>

        <div className={style.newGoodsBox}>
            <div className={style.newGoodsTitle}>新品首发</div>
            <div className={style.newGoodsWrap}>
                {
                    props.newGoodsList.map(item => (
                        <div className={style.newGoodsItem} key={item.id} onClick={()=>goods(item.id)}>
                            <img src={item.list_pic_url} alt="" />
                            <div className={style.newGoodsName}>{item.name}</div>
                            <div className={style.newGoodsPrice}>￥{item.retail_price}</div>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className={style.hotGoodsBox}>
            <div className={style.hotGoodsTitle}>人气推荐</div>
            <div className={style.hotGoodsWrap}>
                {
                    props.hotGoodsList.map(item => (
                        <div className={style.hotGoodsItem} key={item.id} onClick={()=>goods(item.id)}>
                            <img src={item.list_pic_url} alt="" />
                            <div className={style.hotGoodsInfos}>
                                <div className={style.hotGoodsName}>{item.name}</div>
                                <div className={style.hotGoodsInfo}>{item.goods_brief}</div>
                                <div className={style.hotGoodsPrice}>￥{item.retail_price}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className={style.topGoodsBox}>
            <div className={style.topGoodsTitle}>专题精选</div>
            <div className={style.topGoodsWrap}>
                <WingBlank>
                    <Carousel className="space-carousel"
                        frameOverflow="visible"
                        cellSpacing={10}
                        slideWidth={0.92}
                        autoplay
                        infinite
                        dots={false}
                    >
                        {
                            props.topicList.map(item => (
                                <div className={style.topGoodsItem} key={item.id}>
                                    <img src={item.item_pic_url} alt="" />
                                    <div className={style.topGoodSubTitle}>
                                        {item.title}
                                        <span className={style.topGoodPrice}>￥{item.price_info}元起</span>
                                    </div>
                                    <div className={style.topGoodTitle}>{item.subtitle}</div>
                                </div>
                            ))
                        }
                    </Carousel>
                </WingBlank>
            </div>
        </div>

        <div className={style.cateGoryBox}>
            {
                props.categoryList && props.categoryList.map(item => (
                    <div key={item.id}>
                        <div className={style.cateGoryName}>{item.name}</div>
                        <div className={style.cateGoryGoodsWrap}>
                            {
                                item.goodsList && item.goodsList.map((v: any) => (
                                    <div className={style.div} key={v.id} onClick={()=>goods(v.id)}>
                                        <div className={style.goodsItemImg}>
                                            <img src={v.list_pic_url} alt="" />
                                        </div>
                                        <div className={style.goodsItemName}>{v.name}</div>
                                        <div className={style.goodsItemPrice}>￥{v.retail_price}</div>
                                    </div>
                                ))
                            }
                            <a onClick={()=>typeDetail(item.id)} className={style.MoreGoods}>
                                <div>更多{item.name}好物</div>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt="" />
                            </a>
                        </div>
                    </div>
                ))
            }
        </div>

    </>;
}

const mapStateToProps = (state: any) => {
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