import { TypeList, getTab, TypeDetail } from '../../api/typelist'

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

export let tabAction = (id: any) => {
    return async (dispatch: Function) => {
        let data = await getTab(id);
        if (data) {
            dispatch({
                type: 'GET_TAB_LIST',
                payload: data,
            });
        }
    };
};

//分类详情
export let typeDetailAction = (id: string) => {
    return async(dispatch: Function) => {
        let data = await TypeDetail(id)
        console.log(data)
        if(data) {
            dispatch({
                type: 'GET_TYPE_DETAIL',
                payload: data
            })
        }
    }
}