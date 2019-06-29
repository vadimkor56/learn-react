import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { lat: null, error: null }

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude})
      },
      error => {
        this.setState({ error: error.message })
      }
    )
  }

<<<<<<< HEAD
  componentDidMount() {
    console.log('Rendered')
  }

  componentDidUpdate() {
    console.log('Updated')
  }

=======
>>>>>>> fd8b2cdb2517502de75d8bf6611f06fff9b5e75e
  render() {
    if (this.state.lat) {
      return (
        <div>
          Latitude: {this.state.lat}
        </div>
      )
    } else if (this.state.error) {
      return (
        <div>
          Error: {this.state.error}
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
