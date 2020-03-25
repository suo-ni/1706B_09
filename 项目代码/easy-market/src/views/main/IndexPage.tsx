import React, {useEffect} from 'react'
import { PropType, RouterItemType } from '../../utils/interface'
import 'swiper/css/swiper.css'
import Swiper from 'swiper'
import { bannerAction } from '../../store/actions/home'
// import Item from 'antd-mobile/lib/popover/Item';
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'

interface StateType {
    banner: Array<{
        image_url: string,
        [name: string]: string | number
    }>
}
interface DispatchType{
    getBanner: Function
}
let TopicDetailPage: React.FC<StateType & DispatchType & RouteComponentProps> = props => {
    useEffect(() => {
        props.getBanner()
    }, [])
    new Swiper('swiper-container', {
        autoplay: true,
        loop: true
    })
    return <>
        <div className="swiper-container">
            <div className="swiper-wrapper">
                    {
                        props.banner&&props.banner.map(item => {
                            // <div key={item.id} className="swiper-slide">
                            //     <img src={item.image_url} alt=""/>
                            // </div>
                        })
                    }


                {/* <div className="swiper-slide">
                    <img src="http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg" alt=""/>
                </div>
                <div className="swiper-slide">
                    <img src="http://yanxuan.nosdn.127.net/bff2e49136fcef1fd829f5036e07f116.jpg" alt=""/>
                </div>
                <div className="swiper-slide">
                    <img src="http://yanxuan.nosdn.127.net/8e50c65fda145e6dd1bf4fb7ee0fcecc.jpg" alt=""/>
                </div> */}
            </div>
        </div>
    </>
}

const mapStateToProps = (state: any) => {
    return {}
}

const mapDispatchToProps = (dispatch: Function)=> {
    return {
        // getBanner: () => {
        //     dispatch(bannerAction())
        // }
    }
}

export default connect(mapDispatchToProps, mapStateToProps)(TopicDetailPage);