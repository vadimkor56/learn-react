import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader'

class App extends React.Component {
  state = { lat: null, error: null }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      error => this.setState({ error: error.message })
    )
  }

  renderContent() {
    if (this.state.lat) {
      return (
        <SeasonDisplay lat={this.state.lat} />
      )
    } else if (this.state.error) {
      return (
        <div>
          Error: {this.state.error}
        </div>
      )
    } else {
      return (
        <Loader />
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
