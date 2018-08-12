import React from 'react';

class SubItem extends React.Component{
  constructor(props){
    super(props);
    this.state={highlight: null};

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver(){
    this.setState({highlight: true});
  }
  mouseOut(){
    this.setState({highlight: false});
  }
  render(){
    const subItem = this.props.subItem;

    return <div 
      className={this.state.highlight ? "bg-warning text-center text-monospace" : "text-center text-monospace"}
      onMouseOver={this.mouseOver} 
      onMouseOut={this.mouseOut}
      >
        {subItem}
    </div>
  }
}

export default SubItem;