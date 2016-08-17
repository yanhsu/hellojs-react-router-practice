import React, { Component, PropTypes } from 'react'
require('vendor/vendor.scss');
export default class Todo extends Component {
  render() {
    return (
    <div>
      <li onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
        }}>
        {this.props.text}
      </li>
      <button className="btn btn-danger" onClick={this.props.onDelClick}>x</button>
    </div>
    )
  }
}

Todo.propTypes = {
  onDelClick: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}
