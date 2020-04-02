import {getclassList,getnavList} from '../../api/class'

export let classAction = ()=>{
    return async (dispatch:Function)=>{
        let data = await getclassList();
        if (data){
            dispatch({
              type:'GET_CLASS_LIST',
              payload:data
            })
        }
    }
}
export let navAction = (id:any)=>{
  return async (dispatch:Function)=>{
      let data = await getnavList(id);
      if (data){
          dispatch({
            type:'GET_NAV_LIST',
            payload:data.data
          })
      }
  }
}

