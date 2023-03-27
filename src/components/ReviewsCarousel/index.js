// Write your code here
import './index.css'

import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {count: 0}

  leftArrowFunction = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState({count: count - 1})
    }
  }

  rightArrowFunction = () => {
    const {count} = this.state
    const {reviewsList} = this.props

    const l = reviewsList.length
    if (count < l - 1) {
      this.setState({count: count + 1})
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props

    console.log(reviewsList[count])

    const {imgUrl, username, companyName, description} = reviewsList[count]

    return (
      <div className="review-app-background">
        <h1 className="main-heading">Reviews</h1>
        <div className="review-app-body">
          <button
            className="button1"
            onClick={this.leftArrowFunction}
            type="submit"
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review">
            <img src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p className="same">{companyName}</p>
            <p className="same">{description}</p>
          </div>
          <button
            className="button1"
            onClick={this.rightArrowFunction}
            type="submit"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
