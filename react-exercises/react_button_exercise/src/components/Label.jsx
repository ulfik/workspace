import React from 'react'

class Label extends React.Component{
  render(){
    const content = this.props.content
    return <div>{content}</div>;
  }
};

export default Label;