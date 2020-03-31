import {gettypeList} from '../../api'

export let typeAction = ()=>{
    return async (dispatch:Function)=>{
        let data = await gettypeList();
        if (data){
            dispatch({
                type: 'TYPE',
                payload: data
            })
        }
    }
}
