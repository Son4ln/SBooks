import React, {Component} from 'react'
import Link from 'next/link'

export default class ActiveLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active_class: ""
    }
  }
  
  componentDidMount(){
    if(window.location.pathname === this.props.href) {
      this.setState({active_class: "text-danger"});
    }
  }
  
  render() {
    return (
      <Link {...this.props}>
        <a className={this.state.active_class}>
          {this.props.children}
        </a>
      </Link>
    )
  }
}
