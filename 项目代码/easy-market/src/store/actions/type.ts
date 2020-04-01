import {gettypeList,getTab} from '../../api'

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
