import {getTopicList} from '../../api/topic'

export let topicAction = ()=>{
    return async (dispatch:Function)=>{
        let data = await getTopicList();
        if (data){
            dispatch({
              type:'GET_TOPIC_LIST',
              payload:data.data
            })
        }
    }
}

