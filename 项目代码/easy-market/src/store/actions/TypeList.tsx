import { TypeList, getTab } from '../../api/typelist'

//type分类tab
export let TypeListAction = () => {
    return async(dispatch: Function) => {
        let data = await TypeList()
        
        if(data) {
            console.log(data)
            dispatch({
                type: 'GET_TYPE',
                payload: data
            })
        }
    }
}

export let tabAction = (id: any) => {
    return async (dispatch: Function) => {
        let data = await getTab(id);
        console.log(data)
        if (data) {
            dispatch({
                type: 'GET_TAB_LIST',
                payload: data,
            });
        }
    };
};