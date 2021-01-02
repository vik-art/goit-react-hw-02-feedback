import React from 'react';
import PropTypes from 'prop-types';
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'

import s from './Feedback.module.css';

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
      countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        const result = good + neutral + bad;
        return result;
    }
    countPositiveFeedbackPercentage = () => {
        const totalResults = this.countTotalFeedback();
        const { good } = this.state;
        const positiveFeedbacks = (good * 100) / totalResults;
        return Math.round(positiveFeedbacks)
    }
    onLeaveFeedback = (e) => {
        const name = e.target.name;
        this.setState((prevState) => ({
        [name]: prevState[name] + 1
        }))
    }
    render(){   
        const {good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positive = this.countPositiveFeedbackPercentage();
        const keys = Object.keys(this.state);
    return (
        <>
        <h2 className={s.headling}>Please leave your feedback</h2>
        <FeedbackOptions 
        options={keys}
        onLeaveFeedback = {this.onLeaveFeedback}
        />
        <div className={s.stats}> 
        <h2>Statistics</h2>
        { total === 0 ? (<h3>No feedback given</h3>) :
            (<Statistics 
            good = {good}
            neutral = {neutral}
            bad = {bad}
            total = {total}
            positive = {positive}
            />)
        }
        </div>
        </>
    )
      }
}

export default Feedback;