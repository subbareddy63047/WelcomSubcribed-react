import './index.css'

import {FaRupeeSign} from 'react-icons/fa'

import {IoIosCheckmark} from 'react-icons/io'

const CardItems = props => {
  const {each, active, web} = props
  const {category, heading, text, amount, includes} = each
  const {first, second, third} = includes
  const csscode = active ? 'subbareddy' : ''
  const clickedButton = () => {
    web(category)
  }

  return (
    <li className={`list ${csscode}`} onClick={clickedButton}>
      <h1 className="main-heading">{category}</h1>
      <div className="web">
        <h3 className="web-heading">{heading}</h3>
        <p className="web-text">{text}</p>
      </div>

      <div className="rupee-container">
        <FaRupeeSign className="rupee" />
        <p className="amount">{amount}</p>
        <p className="inr">
          INR <br />
          /mo
        </p>
      </div>
      <div className="per-month">
        <button type="button" className="get-button">
          Get Your first 3 months for
          <FaRupeeSign className="r" />
          20/mo
        </button>
      </div>
      <div className="included-container">
        <h1 className="included-heading">{`Whats included on ${category}`} </h1>
        <div className="below">
          <IoIosCheckmark className="mark" />
          <p className="below-para">{first}</p>
        </div>
        <div className="below">
          <IoIosCheckmark className="mark" />
          <p className="below-para">{second}</p>
        </div>
        <div className="below">
          <IoIosCheckmark className="mark" />
          <p className="below-para">{third}</p>
        </div>
      </div>
      <button type="button" className="last-button">
        Try for free
      </button>
    </li>
  )
}
export default CardItems
