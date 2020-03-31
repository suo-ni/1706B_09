import React, { useEffect } from 'react'
import { PropType, RouterItemType } from '../../utils/interface'
import { connect } from 'react-redux'
import { TypeListAction } from '../../store/actions/TypeList'
import { RouteComponentProps } from 'react-router'


interface StateType {
    list: Array<{
        id: number,
        name: string
    }>
}

interface DispatchType {
    TypeList: () => void
}

let TypePage: React.FC<StateType & DispatchType & RouteComponentProps> = props => {
    useEffect(() => {
        props.TypeList()
    }, [])
    return <div className="tabPageContent">
        <div className="searchWrap">
            <div className="searchInput">
                <span>搜索商品，共239款好物</span>
            </div>
        </div>
        <div className="tabsWrap">
            <div className="tablist">
                {
                    props.list && props.list.map((item => {
                        return <div key={item.id} className="tabItem">
                            {item.name}
                        </div>
                    }))
                }
            </div>
        </div>
    </div>
}

const mapStateToProps = (state: any) => {
    return {
        list: state.TypeList.Typelist.categoryList
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        TypeList: () => {
            dispatch(TypeListAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TypePage);