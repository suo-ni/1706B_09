import {getTypeList,getSubType} from '../../api/type'

//获取分类列表
export let typeListAction=()=>{
 return async (dispatch:Function)=>{
   let data:any=await getTypeList();
   if(data){
     console.log(data);
     dispatch({
       type:'GET_TYPE_LIST',
       payload:data.categoryList
     })
     dispatch({
       type:'GET_SUB_TYPE', 
       payload:data.categoryList[0].subCategoryList
     })
   }
 }
}
//获取专题详情
export let subTypeAction=(id:string)=>{
  return async (dispatch:Function)=>{
    let data:any=await getSubType(id);
    if(data){
      dispatch({
        type:'GET_SUB_TYPE',
        payload:data.data.currentCategory.subCategoryList
      })
    }
  }
}