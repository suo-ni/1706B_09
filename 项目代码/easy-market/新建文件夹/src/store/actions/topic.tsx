import { Topic, ToppicDetail } from '../../api/topic'

//专题
export let TopicAction = () => {
    return async(dispatch: Function) => {
        let data = await Topic()
        if(data) {
            dispatch({
                type: 'GET_TOPIC',
                payload: data.data
            })
        }
    }
}

//获取专题详情
export let TopicDetailAction = (id: string) => {
    return async(dispatch: Function) => {
        let data = await ToppicDetail(id)
        console.log(data)
        if(data) {
            dispatch({
                type: 'GET_TOPIC_DETAIL',
                payload: data
            })
        }
    }
}
