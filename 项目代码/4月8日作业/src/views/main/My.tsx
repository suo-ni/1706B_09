// import React from 'react';
// import styles from './my.module.scss'
// import { connect } from 'react-redux'
// import {Toast} from 'antd-mobile'
// import { RouteComponentProps } from 'react-router-dom'
// import {uploadAvatarAction,updateAvatarAction,logoutAction} from '../../store/actions/login'
// interface StateProps{
//   info:{
//     avatar:string,
//     username:string,
//     uploadAvatar:string
//   }
// }
// interface DispatchType{
//   chnagAvatar:(form:FormData)=>void,
//   updataAvatar:(avatar:string)=>void
// }
// let My:React.Fc<StateProps & DispatchType &RouteComponentProps>=props=>{
//   let fileChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
//    let file=e.target.files?e.target.files[0]:null;
//    if(file){
//    let form=new FormData();
//      form.append(file.name,file);
//      props.changeAvatar()
//    }
//   }
//   let updateAvatar=()=>{
//     if(props.upoadAvatar){
//         props.updateAvatar(props.uploadAvatar)
//     }else{
//       Toast.info('请先上传你的头像');
//     }
//   }

//   let logout=()=>{
//    props.logout();
//    props.history.replace(`/login?redirect=${encodeURIComponent('/main/my')}`)
//   }
//   return (
//     <div className="My">
//       <div className={styles.header}>
//         <img src={props.info.uploadAvatar?props.info.uploadAvatar:props.info.avatar} alt=""/>
//         <input type="file" onChange={fileChange}/>
//         <span>{props.info.name}</span>
//         <button onClick={updateAvatar}>确定</button>
//         <button onClick={logout}>退出登录</button>
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = (state: any) => {
//   return {

//   }
// }
// const mapDispatchToProps = (dispatch: Function) => {
//   return {
//     updateAvatar: (avatar:string) => {
//       dispatch(updateAvatarAction(avatar))
//     },
//     changeAvatar: (form:FormData) => {
//         dispatch(uploadAvatarAction(form))  
//     },
//     logout: () => {
//       dispatch(logoutAction())  
//     }
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(My);


// import React from 'react';
// import mine from './my.module.scss'
// import { RouteComponentProps } from 'react-router-dom'
// import { connect } from 'react-redux';
// // import iconfont from '../../../public/iconfont/demo_index'
// interface StateProps {

// }
// interface DispatchProps {

// }
// let MyPage: React.FC<DispatchProps & StateProps & RouteComponentProps> = (props) => {
//   let logout=()=>{
//        props.history.replace(`/login?redirect=${encodeURIComponent('/main/my')}`)
//       }
//   let collect=()=>{
//     props.history.push('/collect')
//   }
//   let address=()=>{
//     props.history.push('/address')
//   }
//   return <div className={mine.my}>

//     <div className={mine.header}>
//       <p className={mine.font}>15235068959</p>
//       <p className={mine.font}>普通用户</p>
//     </div>
//     <div className={mine.main}>
//       <dl>
//         <dt className="iconfont icon-wodeshoucang
// "></dt>
//         <dd onClick={collect}>我的收藏</dd>
//       </dl>
//       <dl>
//         <dt className='iconfont icon-dizhiguanli
// '></dt>
//         <dd onClick={address}>地址管理</dd>
//       </dl>
//       <dl>
//         <dt className='iconfont icon-wodedingdan'></dt>
//         <dd>我的订单</dd>
//       </dl>
//       <dl>
//         <dt className='iconfont icon-wodedingdan'></dt>
//         <dd>周末拼单</dd>
//       </dl>
//       <dl>
//         <dt className='iconfont icon-youhuiquan
// '></dt>
//         <dd>优惠券</dd>
//       </dl>
//       <dl>
//         <dt className='iconfont icon-youxuan
// '></dt>
//         <dd>优选购</dd>
//       </dl>
//       <dl>
//         <dt className='iconfont icon-wodehongbao
// '></dt>
//         <dd>我的红包</dd>
//       </dl>
//       <dl>
//         <dt className='iconfont icon-huiyuan
// '></dt>
//         <dd>会员plus</dd>
//       </dl>
//       <dl>
//         <dt className='iconfont icon-yaoqingfanli
// '></dt>
//         <dd>邀请返利</dd>
//       </dl>
//       <dl>
//         <dt className='iconfont icon-yijianfankui
// '></dt>
//         <dd>意见反馈</dd>
//       </dl>
//       <dl>
//         <dt className='iconfont icon-yijianfankui
// '></dt>
//         <dd>客服咨询</dd>
//       </dl>
//       <dl>
//         <dt className='iconfont icon-zhanghuanquan'></dt>
//         <dd>账户安全</dd>
//       </dl>
//     </div>
//     <span onClick={logout}>退出登录</span>

//   </div>
// }
// const mapStateToProps = (state: any) => {
//   return {

//   }
// }
// const mapDispatchToProps = (dispatch: Function) => {
//   return {

//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MyPage);

import React from 'react';
import { connect } from 'react-redux';
import styles from './my.module.scss';
import { uploadAvatarAction, UpdateAvatar } from '../../store/actions/user'
import { Toast } from 'antd-mobile'

interface PropsType {
  userInfo: { avatar: string, username: string },
  changeAvatar: Function,
  path: string,
  updateA: Function
}
let My: React.FC<PropsType> = (props) => {
 
  return (
    <div className={styles.my}>
      <div className={styles.header}>
      <img src={`${props.path ? props.path : props.userInfo && props.userInfo.avatar}`} alt="" />
      <p>姓名：{props.userInfo && props.userInfo.username}</p>
      <input type="file" onChange={(e) => {
        let file = e.target.files ? e.target.files[0] : null;
        if (file) {
          let form = new FormData();
          form.append(file.name, file);
          props.changeAvatar(form);
        }
      }} />
      <button
        onClick={() => {
          if (props.path) {
            props.updateA(props.path)
          } else {
            Toast.info('请先上传你的头像')
          }
        }
        }>确定</button>
      </div>
      <div className={styles.banner}>
       <dl>
        <dt className='iconfont icon-wodeshoucang
       '></dt>
         <dd>我的收藏</dd>
       </dl>
       <dl>
         <dt className='iconfont icon-dizhiguanli
 '></dt>
         <dd>地址管理</dd>
       </dl>
       <dl>
         <dt className='iconfont icon-wodedingdan'></dt>
         <dd>我的订单</dd>
       </dl>
       <dl>
         <dt className='iconfont icon-wodedingdan'></dt>
         <dd>周末拼单</dd>
       </dl>
       <dl>
         <dt className='iconfont icon-youhuiquan
 '></dt>
         <dd>优惠券</dd>
       </dl>
       <dl>
         <dt className='iconfont icon-youxuan
 '></dt>
         <dd>优选购</dd>
       </dl>
       <dl>
         <dt className='iconfont icon-wodehongbao
 '></dt>
         <dd>我的红包</dd>
       </dl>
       <dl>
         <dt className='iconfont icon-huiyuan
 '></dt>
         <dd>会员plus</dd>
       </dl>
       <dl>
         <dt className='iconfont icon-yaoqingfanli
 '></dt>
         <dd>邀请返利</dd>
       </dl>
       <dl>
         <dt className='iconfont icon-yijianfankui
 '></dt>
         <dd>意见反馈</dd>
       </dl>
       <dl>
         <dt className='iconfont icon-yijianfankui
 '></dt>
         <dd>客服咨询</dd>
       </dl>
       <dl>
         <dt className='iconfont icon-zhanghuanquan'></dt>
         <dd>账户安全</dd>
       </dl>
      </div>
    </div>
  );
}

const mapSateToProps = (state: any) => {
  return {
    userInfo: state.user.userList,
    path: state.user.upLoad
  }
}
const mapDispatchToProps = (dispatch: Function) => {
  return {
    changeAvatar(form: any) {
      dispatch(uploadAvatarAction(form))
    },
    updateA(avatar: string) {
      dispatch(UpdateAvatar(avatar))
    }
  }
}
export default connect(mapSateToProps, mapDispatchToProps)(My);