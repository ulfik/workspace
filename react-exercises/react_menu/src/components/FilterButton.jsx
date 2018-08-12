import React from 'react';

class FilterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false};
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    this.props.switchTagAction(this.props.tag);
    this.setState({active: !this.state.active});
  }

  render() {
    const tag = this.props.tag;
    if(this.state.active)
      return <button onClick={this.handleClick} type="button" className="btn btn-info">{tag.toLowerCase()}</button>

    return <button onClick={this.handleClick} type="button" className="btn">{tag.toLowerCase()}</button>
  }
}

export default FilterButton;