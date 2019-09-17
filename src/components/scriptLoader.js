import React, { Component } from "react"
import { Helmet } from "react-helmet"

export default class MyComponent extends Component {
  componentDidMount() {
    // set up and use external package as needed
    //window.externalLibrary.method()
  }
  render() {
    const { script1, script2 } = this.props
    return (
      <React.Fragment>
        <Helmet>{script1}</Helmet>

        {script2}
        {/* etc */}
      </React.Fragment>
    )
  }
}
