import {getTopicList,getTopicDetail} from '../../api'

//专题列表
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

//专题详情

export let topicDetailAction = (id:string)=>{
    return async (dispatch:Function)=>{
        let data = await getTopicDetail(id);
        if(data){
            dispatch({
                type:"TOPIC_DETAIL",
                payload:data
            })
        }
    }
}