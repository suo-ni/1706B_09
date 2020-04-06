import { getCollectList, addorremove } from '../../api/favor'

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

export let addorremoveAction = (valueId: string, typeId: string = "0") => {
  return async (dispatch: Function) => {
    // let res = await addorremove(valueId, typeId);
    // res.data.type
    if ('delete' === "delete") {
      dispatch({
        type: 'REMOVE_ITEM_ACTION',
        payload: valueId
      })
    }
  }
}