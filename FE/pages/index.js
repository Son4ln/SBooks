import React, {Component} from 'react'
import Head from '../components/document_head'
import Nav from '../components/nav'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Head title="Home"/>
        <Nav />

        <p>HOME PAGEc is here!</p>
      </div>
    )
  }
}
