import React from 'react';
import SubItems from './SubItems'

class MenuItem extends React.Component{
  constructor(props){
    super(props);

    this.click = this.click.bind(this);
  }
  
  click(){
    const index = this.props.index;
    const setSelectedIndex = this.props.setSelectedIndex;
    setSelectedIndex(index);
  }

  render(){
    const menuItem = this.props.menuItem;

    return<div>
      <button className={"btn btn-info btn-lg btn-block text-monospace shadow-none"} onClick={this.click}>{menuItem.name}</button>
      {this.props.open ? menuItem.subItems && <SubItems subItems={menuItem.subItems}/> : null}
    </div>
  }
}

export default MenuItem;