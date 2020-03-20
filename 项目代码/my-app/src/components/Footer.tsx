import React from 'react';

interface PropsType{
  totalPrice: number,
  totalNum: number
}

class Footer extends React.Component<PropsType>{
  state = {
    list: [],
    totalPrice: 0,
    totalNum: 0
  }

  render(){
    return <>
    </>;
  }
}

export default Footer;