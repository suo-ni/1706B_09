import React, { useState } from 'react';
// import styles from './tabBar.module.scss'

interface propsType {
    list: Array<{
        [name: string]: string | number
    }>,
    changeIndex: (index: number) => void
}

let TabBar: React.FC<propsType> = (props) => {

    let [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="tabsWrap">
            <div className="tabList">
                {
                    props.list && props.list.map((item, index: number) => {
                        return (
                            <div key={item.id}
                                className={activeIndex === index ? 'active': ''}
                                id="tabItem"
                                onClick={() => { props.changeIndex(index); setActiveIndex(index); }}
                            >{item.name}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TabBar;
