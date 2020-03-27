import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {PropType} from '../utils/interface'

let RouterView: React.FC<PropType> = props=>{
    return <Switch>{
        props.routes.map((item, index)=>{
            if (item.redirect){
                if (item.path == '*'){
                    return <Redirect key={item.path} to={item.redirect}/>
                // }else{
                //     return <Redirect key={item.path} to={item.redirect} exact from={item.path}/>
                }
            }
            return <Route key={item.path} path={item.path} render={renderProps=>{
                if (item.children){
                    return <item.component routes={item.children} {...renderProps}/>
                }else{
                    return <item.component {...renderProps}/>
                }
            }}></Route>
        })
    }</Switch>
}   
export default RouterView 