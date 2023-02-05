// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  changeText = () => {
    const {text} = this.state
    if (text === 'Subscribe') {
      this.setState({text: 'Subscribed'})
    } else {
      this.setState({text: 'Subscribe'})
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thankyou!HappyLearning</p>
        <button type="button" className="button" onClick={this.changeText}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
