import { getCollectList, addorremove, CollectGoods } from '../../api/favor'

export let collectAction = () => {
  return async (dispatch: Function) => {
    let res = await getCollectList();
    console.log(res)
    if (res) {
      dispatch({
        type: 'COLLECT_LIST_ACTION',
        payload: res
      })
    }
  }
}

//添加
export let collectgoods = (typeId: string, valueId: string) => {
  return async (dispatch: Function) => {
    let data = await CollectGoods(typeId, valueId);
    console.log(data);
    if (data) {
      dispatch({
        type: "COLLECT_GOODS",
        // payload: data.data.type
      });
    }
  };
};

export let addorremoveAction = (valueId: string, typeId: string = "0") => {
  return async (dispatch: Function) => {
    let res = await addorremove(valueId, typeId);
    // res.data.type
    if ('delete' === "delete") {
      dispatch({
        type: 'REMOVE_ITEM_ACTION',
        payload: valueId
      })
    }
  }
}