import {getTopicList,getTopicDetail} from '../../api/topic'
//获取专题列表
export let topicAction = ()=>{
    return async (dispatch:Function)=>{
        let data = await getTopicList();
        console.log(data,'...abc');  
        if (data){
           
            dispatch({
              type:'GET_TOPIC_LIST',
              payload:data.data
            })
        }
    }
}
//获取专题详情
export let topicDetailAction = (id:string)=>{
    return async (dispatch:Function)=>{
        let data = await getTopicDetail(id);
        if (data){
            console.log(data);
            
            dispatch({
              type:'GET_TOPIC_DETAIL',
              payload:data
            })
        }
    }
}

