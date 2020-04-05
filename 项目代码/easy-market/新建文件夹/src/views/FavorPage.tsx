import React from 'react'

let TopicDetailPage: React.FC = props=>{
    return <div className="noTabPageContent">
        <div id="collect">
            <div className="header">
                <div className="left">
                    <i className="iconfont icon-fanhui"></i>
                </div>
                <div className="title">easyLikeGoods</div>
                <div className="right"></div>
            </div>
            <div className="collectList">
                <div className="touchClear">
                    <div className="test">
                        <div className="collectItem onePx_bottomcollectItem onePx_bottom">
                            <div className="collectMsg">
                                <div>海魂纹哈衣水手服（婴童）</div>
                                <div>经典海魂纹自由海军领</div>
                                <div>￥69</div>
                            </div>
                        </div>
                    </div>
                    <div className="colse">删除</div>
                </div>
            </div>
        </div>
    </div>
}

export default TopicDetailPage;