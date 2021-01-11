import React from 'react';
import PropTypes from 'prop-types';

import s from "./Options.module.css";

const Statistics = ({ good, neutral, bad, total, positive}) => {
return (
    <>
            <p className={s.options}>Good: {good}</p>
            <p className={s.options}>Neutral: {neutral}</p>
            <p className={s.options}>Bad: {bad}</p>
            <p className={s.options}>Total: {total}</p>
            <p className={s.options}>Positive feedbacks: {positive}%</p>
    </>
)
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired
}

export default Statistics;