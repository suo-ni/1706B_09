import { getBanner } from '../../api'

let bannerAction = ()=>{
    return async (dispatch:Function)=>{
        let data = await getBanner();
        dispatch({
            type: 'GET_BANNER',
            payload: data
        })
    }
}

let commonAction = ()=>{
    return {
        type: 'COMMON_ACTION',
        payload: {}
    }
}

export{
    bannerAction,
    commonAction,
}  