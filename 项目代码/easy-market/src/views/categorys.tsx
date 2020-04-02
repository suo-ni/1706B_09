import React,{ useEffect } from 'react'
import {connect} from "react-redux"
import {RouteComponentProps} from "react-router-dom"
import {TypeDetailAction} from '../store/actions/type'

interface StateType {
    typeDetail: {
        [key: string]: string
    }
}

interface DispatchType {
    getTypeDetail: (id: string) => void
}

let Categorys: React.FC<StateType & DispatchType & RouteComponentProps<{ id: string }>> = props=>{
    console.log(props)
    useEffect(() => {
        let id = props.match.params.id
        console.log(id);
        props.getTypeDetail(id);
    }, []);
    return null;
}

const mapStateToProps = (state: any) => {
    console.log( state.type.typeDetail);
    return {
        typeDetail: state.type.typeDetail
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        getTypeDetail: (id: string) => {
            dispatch(TypeDetailAction(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categorys);