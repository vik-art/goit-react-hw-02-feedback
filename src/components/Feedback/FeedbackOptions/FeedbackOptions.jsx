import React from 'react';
import PropTypes from 'prop-types';

import s from '../Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
        {options.map((option) => (
            <button key={option} type="button" name={option} onClick={onLeaveFeedback}>{option}</button>
        ))}
        </>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
}

export default FeedbackOptions;