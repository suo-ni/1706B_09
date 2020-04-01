import { Topic } from '../../api/topic'

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
