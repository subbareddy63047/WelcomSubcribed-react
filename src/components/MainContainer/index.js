import {Component} from 'react'

import Headers from '../Headers'

import CardItems from '../CardItems'

import './index.css'

const detailsList = [
  {
    category: 'Basic',
    heading: 'FOR INDIVIDUALS & SMALL BUSINESSES',
    text:
      'Everything you need to create in your store,ship products, and process payments',
    amount: '1,994',
    includes: {
      first: 'Basic reports',
      second: 'upto 1000 inventory locations',
      third: '2 staff account',
    },
  },
  {
    category: 'Shopify',
    heading: 'FOR SMALL BUSINESSES',
    text:
      'Level up your business with professional reporting  and more staff accounts',
    amount: '7,447',
    includes: {
      first: 'Professional reports',
      second: 'upto 1000 inventory locations',
      third: '5 staff account',
    },
  },
  {
    category: 'Advance',
    heading: 'FOR MEDIUM TO LARGE BUSINESSES',
    text:
      'Get the best Shopify with custom reporting and our lowest transaction fees',
    amount: '30,164',
    includes: {
      first: 'Customer report builder',
      second: 'upto 1000 inventory locations',
      third: '15 staff account',
    },
  },
]
let apply
let shopify
let advance

class MainContainer extends Component {
  state = {Active: 'Basic', packButton: 'month'}

  webChangeButton = category => {
    this.setState({Active: category})
  }

  changeButton = event => {
    this.setState({Active: event.target.textContent})
  }

  chooseMonth = () => {
    this.setState({packButton: 'month'})
  }

  chooseYear = () => {
    this.setState({packButton: 'year'})
  }

  render() {
    const {Active, packButton} = this.state
    apply = Active === 'Basic' ? 'subba' : ''
    shopify = Active === 'Shopify' ? 'subba' : ''
    advance = Active === 'Advance' ? 'subba' : ''

    const month = packButton === 'month' ? 'month-button' : 'normal-button'
    const year = packButton === 'year' ? 'month-button' : 'normal-button'

    const filterList = detailsList.filter(each => each.category === Active)

    return (
      <div className="main-container">
        <Headers />
        <div className="buttons-container">
          <button
            type="button"
            className={`button ${apply}`}
            onClick={this.changeButton}
          >
            Basic
          </button>
          <button
            type="button"
            className={`button ${shopify}`}
            onClick={this.changeButton}
          >
            Shopify
          </button>
          <button
            type="button"
            className={`button ${advance}`}
            onClick={this.changeButton}
          >
            Advance
          </button>
        </div>
        <div className="pay-monthly-container">
          <button
            type="button"
            className={`${month}`}
            onClick={this.chooseMonth}
          >
            Pay Monthly
          </button>
          <button type="button" className={`${year}`} onClick={this.chooseYear}>
            Pay Yearly(Save 25%)
          </button>
        </div>

        <ul className="mobile">
          {filterList.map(each => (
            <CardItems each={each} key={each.category} />
          ))}
        </ul>
        <ul className="webdesign">
          {detailsList.map(each => (
            <CardItems
              each={each}
              key={each.category}
              web={this.webChangeButton}
              active={each.category === Active}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default MainContainer
