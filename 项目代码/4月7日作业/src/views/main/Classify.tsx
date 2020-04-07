import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { RouteComponentProps } from 'react-router'
import { typeListAction,subTypeAction } from '../../store/actions/type'
import { CategoryItem, SubCategoryItem } from '../../utils/interface';
import styles from "./classify.module.scss"

interface StateType {
  categoryList: CategoryItem[],
  subCategoryList: SubCategoryItem[]
}
interface DispatchProps {
  getTypeList: () => void,
  getSubType: (id: string) => void
}
let TypePage: React.FC<DispatchProps & StateType & RouteComponentProps> = props => {
  let [current, setCurrent] = useState<{id:string, wap_banner_url: string}>({id:'', wap_banner_url:''});

  useEffect(() => {
    console.log(props);
    props.getTypeList();
  }, []);
  useEffect(()=>{
    if (props.categoryList.length){
        let {id, wap_banner_url} = props.categoryList[0];
        setCurrent({
            id,
            wap_banner_url
        })
    }
}, [props.categoryList]);

let changeItem = (item: CategoryItem)=>{
        setCurrent({
            id: item.id,
            wap_banner_url: item.wap_banner_url
        })
        props.getSubType(item.id);
    }

    let goTypeDetail = (id: string)=>{
        props.history.push(`/typeDetail/${id}`)
    }
  return <div className={styles.type}>
     <input type="text" placeholder='搜索商品，共239款好物' className={styles.ipt}/>
     <div className={styles.main}>
       <section className={styles.left}>
         {
          props.categoryList.map(item => {
                return <li key={item.id} className={current.id===item.id?'active': ''} onClick={()=>changeItem(item)}>{item.name}</li>
            })
        }
      
      </section>
        <section className={styles.right}>
            <img className={styles.pic} src={current.wap_banner_url} alt="" />
            <ul>{
                props.subCategoryList.map(item => {
                    return <li key={item.id} onClick={()=>goTypeDetail(item.id)}>
                        <img src={item.wap_banner_url} alt="" />
                        <span className={styles.name}>{item.name}</span>
                    </li>
                })}
            </ul>
        </section>
        </div>
  </div>;
}
const mapStateProps = (state: any) => {
  return {
   ...state.classify
  }
}

const mapDispatchProps = (dispatch: Function) => {
  return {
    getTypeList: () => {
      dispatch(typeListAction())
    },
    getSubType: (id: any) => {
      dispatch(subTypeAction(id))
    }
  }
}

export default connect(mapStateProps, mapDispatchProps)(TypePage)