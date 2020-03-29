import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bannerAction } from '../../store/actions/home'
import { RouteComponentProps } from 'react-router'
import Bannerbar from '../../components/banner'
import category from '../../components/categoryList'
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
    getBanner: Function,
    list:StateType
}

let TopicDetailPage: React.FC<StateType & DispatchType & RouteComponentProps> = props => {
    useEffect(() => {
        props.getBanner();
    }, []);
    return <>
    <div>
        <Bannerbar bannerList={props.banner}></Bannerbar>   
    </div>  
    </>;
}

const mapStateToProps = (state: any) => {
    //console.log('state.home...', state.home)
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