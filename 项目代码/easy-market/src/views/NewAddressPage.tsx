// import React from 'react'

// let NewAddressPage: React.FC = props=>{
//     return <div className="noTabPageContent">
//         <div className="addressPage">
//             <div className="header">
//                 <div className="left"></div>
//                 <div className="title"></div>
//                 <div className="right"></div>
//             </div>
//             <div className="addressSetPage">
//                 <div className="addressHeader">新增地址</div>
//                 <div className="onePx_bottom">
//                     <input type="text" placeholder="姓名" />
//                 </div>
//                 <div className="onePx_bottom">
//                     <input type="text" placeholder="电话号码" />
//                 </div>
//                 <div className="onePx_bottom">
//                     <input type="text" placeholder="" />
//                 </div>
//                 <div className="onePx_bottom">
//                     <input type="text" placeholder="详细地址" />
//                 </div>
//                 <div className="onePx_bottom">
//                     <div className="isDefaultAddress">
//                         设置默认地址
//                     </div>
//                 </div>
//                 <div className="closeAddress">
//                     <div>
//                         <a href="#">
//                             <span>取消</span>
//                         </a>
//                     </div>
//                     <div>
//                         <a href="#">
//                             <span>保存</span>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// }

// export default NewAddressPage;



import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from './AddressAdd.module.scss'

// interface dispatchType {
//   getAddressList: Function
// }

// interface stateType {
//   list: Array<{
//     [key: string]: number | string
//   }>
// }

let AddressAdd: React.FC = (props) => {

  useEffect(() => {
  }, [])

  let [flag, setFlag] = useState(false)
  let [name, setName] = useState("")
  let [mobile, setMobile] = useState("")
  let [address, setAddress] = useState("")
  let [province_id, setProvince_id] = useState("2")
  let [city_id, setCity_id] = useState("37")
  let [district_id, setDistrict_id] = useState("403")

  let changeName = (e: any) => {
    setName(e.target.value)
  }
  let changeMobile = (e: any) => {
    setMobile(e.target.value)
  }
  let changeAddress = (e: any) => {
    setAddress(e.target.value)
  }

  //   name: "一顿饭"
  // mobile: "15266984522"
  // province_id: 2
  // city_id: 37
  // district_id: 403
  // address: "点点滴滴"
  // is_default: false

  return (
    <div className={styles.AddressAdd}>
      <div className={styles.header}>
        <div className={styles.left}></div>
        <div className={styles.title}>此证滴滴</div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.inputBox}>
        <input type="text" className={styles.addressInput} placeholder="姓名" value={name} onChange={changeName} />
      </div>
      <div className={styles.inputBox}>
        <input type="text" className={styles.addressInput} placeholder="电话号码" value={mobile} onChange={changeMobile} />
      </div>
      <div className={styles.inputBox}>
        <input type="text" className={styles.addressInput} placeholder="北京 北京市 东城区" />
      </div>
      <div className={styles.inputBox}>
        <input type="text" className={styles.addressInput} placeholder="详细地址" value={address} onChange={changeAddress} />
      </div>
      <div className={styles.isDefaultAddress} onClick={() => {
        setFlag(!flag)
      }}>
        设置默认地址
        {
          flag ? <img src="./img/yuans.png" alt="" /> : <img src="./img/yuan.png" alt="" />
        }
      </div>

      <div className={styles.closeAddress}>
        <a href="/address">取消</a>
        <a href="">保存</a>
      </div>

    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {

  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddressAdd)
