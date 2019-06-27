import React, {Component} from 'react'
import Head from '../components/document_head'
import Nav from '../components/nav'

export default class About extends Component {
  render() {
    return (
      <div>
        <Head title="About"/>
        <Nav/>

        <p className="text-danger">ABout Page</p>
      </div>
    )
  }
}
