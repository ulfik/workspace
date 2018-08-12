import React from 'react';
import SubItem from './SubItem';

class SubItems extends React.Component{
  render(){
    const subItems = this.props.subItems;
    return <div>
      {subItems.map(subItem=><SubItem subItem={subItem && subItem.name}/>)}  
      </div>
  }
}

export default SubItems;