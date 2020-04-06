import React, { useEffect } from 'react'
import { PropType, RouterItemType } from '../../utils/interface'
import 'swiper/css/swiper.css'
import Swiper from 'swiper'
import { bannerAction } from '../../store/actions/home'
// import Item from 'antd-mobile/lib/popover/Item';
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { WingBlank, Carousel } from 'antd-mobile';

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
        img_url: string,
        banner_url: string,
        [name: string]: string | number,
        goodsList: any
    }>,

}
interface DispatchType {
    getBanner: Function
}
let IndexPage: React.FC<StateType & DispatchType & RouteComponentProps> = props => {
    let goGoodsDetail = (e: React.MouseEvent<HTMLAnchorElement>) => {
        let id = e.currentTarget.dataset.id;
        props.history.push(`/goodsDetail/${id}`)
    }
    useEffect(() => {
        props.getBanner()
        new Swiper('.swiper-container', {
            autoplay: true,
            loop: true
        })
    }, [])

    return <>
            <div className="swiper-container index_swiper">
                <div className="swiper-wrapper">
                    {
                        props.banner && props.banner.map(item => {
                            return <div key={item.id} className="swiper-slide">
                                <img src={item.image_url} alt="" />
                            </div>
                        })
                    }
                </div>
            </div>
        {/* <div className="main_main"> */}
        <div className="channelWrap">
            {
                props.channel.map(item => (
                    <a href="#" key={item.id}>
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
                    props.brandList && props.brandList.map(item => (
                        <div className="brandItem" key={item.id}>
                            <div className="brandItemName">{item.name}</div>
                            <div className="brandItemMinPrice">{item.floor_price}元起</div>
                            <img src={item.new_pic_url} alt="" />
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
                            <img src={item.list_pic_url} alt="" />
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
                    props.hotGoodsList && props.hotGoodsList.map(item => (
                        <div className="hotGoodsItem" key={item.id}>
                            <img src={item.list_pic_url} alt="" />
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
                            props.topicList && props.topicList.map(item => (
                                <div className="topGoodsItem" key={item.id}>
                                    <img src={item.item_pic_url} alt="" />
                                    <div className="topGoodSubTitle">
                                        {item.title}
                                        <span className="topGoodPrice">￥{item.price_info}元起</span>
                                    </div>
                                    <div className="topGoodTitle">{item.subtitle}</div>
                                </div>
                            ))
                        }
                    </Carousel>
                </WingBlank>
            </div>
        </div>

        <div className="cateGoryBox">
            {
                props.categoryList && props.categoryList.map(item => {
                    return <>
                        <p key={item.id} >{item.front_desc}</p>
                        <div className="cateGoryName">{item.name}</div>
                        <div className="cateGoryGoodsWrap">
                            {
                                item.goodsList && item.goodsList.map((v: any) => {

                                    return <a onClick={goGoodsDetail} data-id={v.id} key={v.id} href="#">
                                        <div className="goodsItemImg">
                                            <img src={v.list_pic_url} alt="" />
                                        </div>
                                        <div className="goodsItemName">{v.name}</div>
                                        <div className="goodsItemPrice">￥{v.retail_price}</div>
                                    </a>

                                })
                            }

                        </div>
                    </>
                })
            }


            })
            </div>
        {/* </div> */}
    </>
}

const mapStateToProps = (state: any) => {
    return state.home
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        getBanner: () => {
            dispatch(bannerAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);