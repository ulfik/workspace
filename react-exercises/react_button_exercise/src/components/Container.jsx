import React from 'react';

import Label from './Label';
import Button from './Button';

class Container extends React.Component {
  constructor(props){
    super(props)
    this.state = {clicked: false, 
      text: this.props.elements.label.beforeClick};

    this.click = this.click.bind(this);
  }
  
  click(){
    if(!this.state.clicked){
      this.setState({clicked:true, text: this.props.elements.label.afterClick});
    } else {
      this.setState({clicked: false, text: this.props.elements.label.beforeClick});
    }
  }
  
  render(){
    const elements = this.props.elements;
    return <div>
      <Label content={this.state.text}/>
      <Button description={elements.buttonText} onClick={this.click}/></div>;
  }
};

export default Container;