import React from 'react';

class Button extends React.Component {
  render(){
    const description = this.props.description;
    const onClick = this.props.onClick;
    return <div><button onClick={onClick}>{description}</button></div>;
  }
};

export default Button;