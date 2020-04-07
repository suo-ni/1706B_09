import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import styles from './GoodsDetail.module.scss'
import { GoodsDetailAction } from '../store/actions/goodsDetail'
import { connect } from 'react-redux'
import Swiper from 'swiper'

interface StateType {
    banner: Array<{
        image_url: string,
        [name: string]: string | number
    }>,
    list: {
        [key: string]: string | number,
        attribute: any,
        gallery: any,
        productList: any,
        issue: any
    }
}
interface DispatchType {
    toGoodsDetail: (id: string) => void
}

let TopicDetailPage: React.FC<DispatchType & StateType & RouteComponentProps<{ id: string }>> = props => {
    useEffect(() => {
        new Swiper('.swiper-container', {
            autoplay: true,
            loop: true
        })
    }, [])
    console.log(props.list)
    let id = props.match.params.id
    useEffect(() => {
        props.toGoodsDetail(id)
    }, [])
    return <div className={styles.noTabPageContent}>
        <div className={styles.goodsPage}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <i className="iconfont icon-fanhui"></i>
                </div>
                <div className={styles.title}>简约知性系列居家地毯 蓝灰格</div>
                <div className={styles.right}></div>
            </div>
            <div className="swiper-container slider">
                <div className="swiper-wrapper slider_frame">
                    {
                        props.list.gallery && props.list.gallery.map((item: any) => {
                            return <div key={item.id} className="swiper-slide">
                                <img src={item.img_url} alt="" />
                            </div>
                        })
                    }
                </div>
            </div>
            {/* <div className={styles.slider}>
                <div className={styles.slider_frame}>

                </div>
            </div> */}
            <ul className={styles.serviceList}>
                <li>
                    <span>★</span>30天无忧退货
                </li>
                <li>
                    <span>★</span>48小时快速退款
                </li>
                <li>
                    <span>★</span>满88元免邮费
                </li>
            </ul>
            <div className={styles.goodsMsgWrap}>
                <div className={styles.goodsNameTitle}>简约知性系列居家地毯 蓝灰格</div>
                <div className={styles.goodsNameSubTitle}>沉稳双拼色 居家温柔伴护</div>
                <div className={styles.goodsPriceTitle}>￥ 599</div>
            </div>
            <div className={styles.goodsSize}>
                <div></div>
                <div>x 0</div>
                <div>
                    选择规格
                    <i className="iconfont icon-arr-right"></i>
                </div>
            </div>
            <div className={styles.goodsAttribute}>
                <div className={styles.goodsAttributeLine}>
                    -商品参数-
                </div>
                <div className={styles.goodsAttributeList}>
                    {/* {
                    console.log(props.list.attribute)
                } */}
                    {
                        props.list.attribute && props.list.attribute.map((item: any, index: number) => {
                            return <div key={index} className={styles.goodsAttributeItem}>
                                <div className={styles.attributeLabel}>{item.name}</div>
                                <div className={styles.attributeContent}>{item.value}</div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className={styles.topicDetailImg}>

            </div>
            <div className={styles.goodsAttribute}>
                <div className={styles.goodsAttributeLine}>-常见问题-</div>
                {
                    props.list.issue && props.list.issue.map((item: any) => {
                        return <div className={styles.problemWrap}>
                            <div className={styles.problemLabel}>
                                <span>√</span>{item.question}
                            </div>
                            <div className={styles.problemContent}>{item.answer}
    (港澳台地区需满</div>
                        </div>
                    })
                }

                {/* <div className={styles.problemWrap}>
                    <div className={styles.problemLabel}>
                        <span>√</span>如何申请退货？
                    </div>
                    <div className={styles.problemContent}>1.自收到商品之日起30日内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不同，</div>
                </div>
                <div className={styles.problemWrap}>
                    <div className={styles.problemLabel}>
                        <span>√</span>如何开具发票？
                    </div>
                    <div className={styles.problemContent}>1.如需开具普通发票，请在下单时选择“我要开发票”并填写相关信息（APP仅限2.4.0及以</div>
                </div> */}
            </div>
            <div className={styles.goodsAttribute}>
                <div className={styles.goodsAttributeLine}>大家都在看</div>
            </div>
            <div className={styles.goodsList}>
                <div className={styles.goodsList}>
                    {
                        props.list.productList && props.list.productList.map((item: any) => {
                            return <a href="#" className={styles.goodsItem}>
                                <div className={styles.goodsItemImg}>
                                    <img className={styles.imgLazyload} src="http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt="" />
                                </div>
                                <div className={styles.goodsItemName}>日式和风懒人沙发</div>
                                <div className={styles.goodsItemPrice}>￥599元</div>
                            </a>
                        })
                    }
                    <a href="#" className={styles.goodsItem}>
                        <div className={styles.goodsItemImg}>
                            <img className={styles.imgLazyload} src="http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt="" />
                        </div>
                        <div className={styles.goodsItemName}>日式和风懒人沙发</div>
                        <div className={styles.goodsItemPrice}>￥599元</div>
                    </a>
                    <a href="#" className={styles.goodsItem}>
                        <div className={styles.goodsItemImg}>
                            <img className={styles.imgLazyload} src="http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt="" />
                        </div>
                        <div className={styles.goodsItemName}>日式和风懒人沙发</div>
                        <div className={styles.goodsItemPrice}>￥599元</div>
                    </a>
                    <a href="#" className={styles.goodsItem}>
                        <div className={styles.goodsItemImg}>
                            <img className={styles.imgLazyload} src="http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt="" />
                        </div>
                        <div className={styles.goodsItemName}>日式和风懒人沙发</div>
                        <div className={styles.goodsItemPrice}>￥599元</div>
                    </a>
                    <a href="#" className={styles.goodsItem}>
                        <div className={styles.goodsItemImg}>
                            <img className={styles.imgLazyload} src="http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt="" />
                        </div>
                        <div className={styles.goodsItemName}>日式和风懒人沙发</div>
                        <div className={styles.goodsItemPrice}>￥599元</div>
                    </a>
                    <a href="#" className={styles.goodsItem}>
                        <div className={styles.goodsItemImg}>
                            <img className={styles.imgLazyload} src="http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt="" />
                        </div>
                        <div className={styles.goodsItemName}>日式和风懒人沙发</div>
                        <div className={styles.goodsItemPrice}>￥599元</div>
                    </a>
                    <a href="#" className={styles.goodsItem}>
                        <div className={styles.goodsItemImg}>
                            <img className={styles.imgLazyload} src="http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt="" />
                        </div>
                        <div className={styles.goodsItemName}>日式和风懒人沙发</div>
                        <div className={styles.goodsItemPrice}>￥599元</div>
                    </a>
                    <a href="#" className={styles.goodsItem}>
                        <div className={styles.goodsItemImg}>
                            <img className={styles.imgLazyload} src="http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt="" />
                        </div>
                        <div className={styles.goodsItemName}>日式和风懒人沙发</div>
                        <div className={styles.goodsItemPrice}>￥599元</div>
                    </a>
                    <a href="#" className={styles.goodsItem}>
                        <div className={styles.goodsItemImg}>
                            <img className={styles.imgLazyload} src="http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt="" />
                        </div>
                        <div className={styles.goodsItemName}>日式和风懒人沙发</div>
                        <div className={styles.goodsItemPrice}>￥599元</div>
                    </a>
                </div>
            </div>
            <div className={styles.goodsPageDo}>
                <div className={styles.isLike}>☆</div>
                <div className={styles.cartNum}>
                    <i className="iconfont icon-icon-test"></i>
                </div>
                <div className={styles.addCart}>加入购物车</div>
                <div className={styles.payGoods}>立即购买</div>
            </div>
        </div>
    </div>
}

const mapStateToProps = (state: any) => {
    console.log(state.goodsDetail.detail)
    return {
        list: state.goodsDetail.detail
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        toGoodsDetail: (id: string) => {
            dispatch(GoodsDetailAction(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicDetailPage);