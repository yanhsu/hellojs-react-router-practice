import React from 'react'
import {Link} from 'react-router'

require('vendor/vendor.scss');

export class App extends React.Component {
  render() {
    return (
      <div>
        React Example
        <div>
          <Link className="btn btn-primary" to="/counter">counter page</Link>
          <Link className="btn btn-primary" to="/about/yanhsu">about page</Link>
          <Link className="btn btn-primary" to="/todolist">todolist page</Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}
