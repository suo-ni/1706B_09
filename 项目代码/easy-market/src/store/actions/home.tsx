import { getBanner, getChannel } from "../../api";

//轮播图
export let bannerAction = () => {
    return async(dispatch: Function) => {
        let data = await getBanner();
        if(data) {
            dispatch({
                type: 'GET_BANNER',
                payload: data
            })
        }
    }
}

//图标
export let channelAction = () => {
    return async(dispatch: Function) =>{
        let data = await getChannel()
        if(data) {
            dispatch({
                type: 'GET_CHANNEL',
                payload: data
            })
        }
    }
}