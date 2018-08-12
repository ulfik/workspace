import React from 'react';

class SubItem extends React.Component {
  render(){
    const subItem = this.props.subItem;
    return <button className="btn btn-primary">{subItem && subItem.name}</button>
  }
}

export default SubItem;