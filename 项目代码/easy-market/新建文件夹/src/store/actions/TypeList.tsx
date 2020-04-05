import { TypeList, getTab, TypeDetail, classifyDetail, classifyDetailList } from '../../api/typelist'

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

// 奇趣分类nav
export let classifyDetailAction = (id: string) => {
    return async (dispatch: Function) => {
      let res = await classifyDetail(id);
      console.log(res, 'res')
      if (res) {
        dispatch({
          type: "GET_CLASSIFYDETAIL_LIST",
          payload: res
        })
      }
    }
  }
  
  // 奇趣分类list
  export let DetailListAction = (categoryId: string) => {
    return async (dispatch: Function) => {
      let res = await classifyDetailList(categoryId);
      console.log(res, '奇趣分类列表')
      if (res.data) {
        dispatch({
          type: "GET_DETAILLIST_LIST",
          payload: res.data
        })
      }
    }
  }