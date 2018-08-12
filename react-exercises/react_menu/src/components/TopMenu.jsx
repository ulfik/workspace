import React from 'react';
import MenuItem from './MenuItem'


class TopMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {selectedIndex: null};

    this.setSelectedIndex = this.setSelectedIndex.bind(this)
  }

  setSelectedIndex(index){
    if(index === this.state.selectedIndex)
      this.setState({selectedIndex: null});
    else
      this.setState({selectedIndex: index});
  }

  render() {
    const menuItems = this.props.menuItems;
    return <div>
      {menuItems.map((menuItem, index)=>
      <MenuItem 
        menuItem={menuItem}
        index={index}
        setSelectedIndex={this.setSelectedIndex} 
        open={this.state.selectedIndex === index}
      />)}
    </div>;
  }
}

export default TopMenu;