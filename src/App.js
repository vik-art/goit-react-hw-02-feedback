import React from 'react';
import Statistics from "./components/Statistics";
import FeedbackOptions from './components/FeedbackOptions';

import s from './App.module.css'

class App extends React.Component {
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
        <div className={s.options}>
        <FeedbackOptions 
        options={keys}
        onLeaveFeedback = {this.onLeaveFeedback}
        />
        </div>
        <div className={s.stats}> 
        <h2 className={s.headling}>Statistics</h2>
        { total === 0 ? (<h3 className={s.smallerHeadling}>No feedback given</h3>) :
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

export default App;