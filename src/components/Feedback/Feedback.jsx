import React from 'react';
import PropTypes from 'prop-types';

import s from './Feedback.module.css';

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
      handleGood = () => {
              this.setState(prevState => {
                  return {
              good: prevState.good + 1,
          }
        })
    }
    handleNeutral = () => {
        this.setState(prevState => {
            return {
        neutral: prevState.neutral + 1,
    }
  })
}
handleBad = () => {
    this.setState(prevState => {
        return {
    bad: prevState.bad + 1,
}
})
}
    render(){     
    return (
        <>
        <h2 className={s.headling}>Please leave your feedback</h2>
        <div className={s.buttons}>
        <button type="button" onClick={this.handleGood}>Good</button>
        <button type="button" onClick={this.handleNeutral}>Neutral</button>
        <button type="button" onClick={this.handleBad}>Bad</button>
        </div>
        <div className={s.stats}>
            <h2>Statistics</h2>
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
        </div>
        </>
    )
      }
}

export default Feedback;