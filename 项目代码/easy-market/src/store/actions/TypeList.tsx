import { TypeList } from '../../api/typelist'

//type分类tab
export let TypeListAction = () => {
    return async(dispatch: Function) => {
        let data = await TypeList()
        if(data) {
            dispatch({
                type: 'GET_TYPE',
                payload: data
            })
        }
    }
}