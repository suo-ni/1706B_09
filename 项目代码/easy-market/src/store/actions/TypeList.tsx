import { TypeList, contentList } from '../../api/typelist'

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

export let contentAction = (id: number) => {
    return async (dispatch: Function) => {
      let res = await contentList(id);
      
      if (res) {
        console.log(res)
        dispatch({
          type: "GET_CONTENT_LIST",
          payload: res
        })
      }
    }
  }