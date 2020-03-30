import {getTopicList} from '../../api'

export let topicAction = ()=>{
    return async (dispatch:Function)=>{
        let data = await getTopicList();
        if (data){
            dispatch({
                type: 'TOPIC',
                payload: data
            })
        }
    }
}
