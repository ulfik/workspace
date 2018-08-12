import React from 'react';
import SubItems from './SubItems'

class MenuItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const {index, setSelectedIndex} = this.props;
    setSelectedIndex(index);
    //this.setState(prevState=>({isToggleOn: !prevState.isToggleOn}));
  }
  
  render() {
    const menuItem = this.props.menuItem;
    return <div>
      <button className="btn btn-danger" onClick={this.handleClick}>{menuItem.name}</button>
      {this.props.open ? menuItem.subItems && <SubItems subItems={menuItem.subItems}/> : null} 
    </div>;
  }
}

export default MenuItem;