import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { RouteComponentProps } from 'react-router'
import { classAction,navAction } from '../../store/actions/classify'
import classify from "../main/classify.module.scss"
interface StateProps {
  
  list: Array<{
    id: any,
    name: string,
    img_url: string,
    banner_url: string
  }
  >,
  current: Array<{
    id: any,
    banner_url: string,
    wap_banner_url: string,
    name: string
  }>,
  curentImg: string,
  currentCategory: {
    data:Array<ItemType>
   
  }
  
}
interface ItemType{
  id: number,
  front_name: string,
  name: string,
  wap_banner_url: string,
  
    subCategoryList: Array<{
      wap_banner_url: string,
      [name: string]: string | number,
    }>
}
interface DispatchProps {
  getTopList: () => void,
  getTab: (id: any) => void
}
let TypePage: React.FC<StateProps & DispatchProps & ItemType & RouteComponentProps> = props => {
  useEffect(() => {
    props.getTopList();
  }, [])
  const [Cur, setCur] = useState(0)
  let tab = (n: any, id: any) => {
    setCur(n)
    props.getTab(id)
  }
  return <>
    <div className={classify.Index}>
      <div className={classify.Header}>
        <input type="text" placeholder="搜好物共239款产品" />
      </div>
      <div className={classify.Main}>
        <div className={classify.Left}>
          {
            props.list ? props.list.map((i, n) => {
              return <p onClick={() => tab(n, i.id)} key={n} className={`${Cur == n ? classify.active : ""}`}>{i.name}</p>
            }) : ""
          }
        </div>
        <div className={classify.right}>
          {
            props.currentCategory.data.map((item, index) =>
              <div key={index}>
                <div className={classify.top}>
                  <img src={item.wap_banner_url} alt="" />
                </div>
                <div>—— {item.name}分类 ——</div>
                <div className={classify.bottom}>
                  {
                    item.subCategoryList && item.subCategoryList.map((it, ind) => {
                      return <div className={classify.item} key={ind}>
                        <p><img src={it.wap_banner_url} alt="" /></p>
                        <p>{it.name}</p>
                      </div>
                    })
                  }
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  </>;
}
const mapStateProps = (state: any) => {
  console.log(state.classify.currentCategory);
  return {
    list: state.classify.categoryList,
    currentCategory: [state.classify.currentCategory]
  }
}

const mapDispatchProps = (dispatch: Function) => {
  return {
    getTopList: () => {
      dispatch(classAction())
    },
    getTab: (id: any) => {
      dispatch(navAction(id))
    }
  }
}

export default connect(mapStateProps, mapDispatchProps)(TypePage)