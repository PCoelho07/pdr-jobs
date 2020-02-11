import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import FormContent from './FormContent'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <FormContent />
        <Footer />
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
