import React from 'react';
interface PropsType {
  categoryList: Array<{
    [name: string]: string | number,
    goodList:string|any
  }>
}
let category: React.FC<PropsType> = (props) =>{
  return(
    <div className='category-page'>
      {
        props.categoryList&&props.categoryList.map(item=>{
          <div>
            <div className="content">{item.name}</div>
            <div className="pic">
              {
                item.goodList&&item.goodList.map((v:any)=>{
                 <div key={v.id}>
                   <div className='goods'>
                     <img src="{v.list_pic_url}" alt=""/>
                   </div>
                   <div>{v.name}</div>
                   <div>{v.retail_price}</div>
                 </div>
                })
              }
            </div>
          </div>
        })
      }
    </div>
  )
}
export default category;