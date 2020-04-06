import {gettypeList,getTab,classifyDetail,classifyDetailList} from '../../api'

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

// export let TypeDetailAction = (id: string) => {
//     return async (dispatch: Function) => {
//         let data = await getTypeDetail(id);
//         if (data) {
//             dispatch({
//                 type: 'GET_TYPEDETAIL',
//                 payload: data,
//             });
//         }
//     };
// };

// export let classifyDetailAction = (id: string) => {
//     return async (dispatch: Function) => {
//       let data = await classifyDetailList(id);
//       if (data) {
//         dispatch({
//           type: "GET_CLASSIFYDETAIL_LIST",
//           payload: data
//         })
//       }
//     }
//   }


export let classifyDetailAction = (id: string) => {
    return async (dispatch: Function) => {
      let res = await classifyDetail(id);
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
      if (res.data) {
        dispatch({
          type: "GET_DETAILLIST_LIST",
          payload: res.data
        })
      }
    }
  }



