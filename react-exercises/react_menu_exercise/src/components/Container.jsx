import React from 'react';
import MenuItem from './MenuItem';


class Container extends React.Component{
  constructor(props){
    super(props);
    this.state = {selectedIndex: null};

    this.setSelectedIndex = this.setSelectedIndex.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  setSelectedIndex(index){
    if(index === this.state.selectedIndex){
      this.setState({selectedIndex: null});
    }else{
      this.setState({selectedIndex: index});
    }  
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({selectedIndex: null});
    }
  }

  render(){
    const menuItems = this.props.menuItems;
    return <div ref={this.setWrapperRef}>
      {menuItems.map((menuItems, index) => 
        <MenuItem 
        menuItem={menuItems} 
        index={index} 
        setSelectedIndex={this.setSelectedIndex} 
        open={this.state.selectedIndex === index}
        />
      )}

    </div>
  }
}

export default Container;