import {getbranDetail} from '../../api'

export let getbranDetailAction = (id:any)=>{
    return async (dispatch:Function)=>{
        let data = await getbranDetail(id);
        if(data){
            dispatch({
                type:"BRANDETAIL",
                payload:data
            })
        }
    }
}