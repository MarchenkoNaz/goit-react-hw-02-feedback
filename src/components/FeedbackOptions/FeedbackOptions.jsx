import React from 'react'
import PropTypes from 'prop-types'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		options.map(option => option === 'total' || option === 'positive' ? null : <button type="button" key={option} name={option} className="btn btn-dark m-1" onClick={(e) => { onLeaveFeedback(e) }}>{option}</button>)

		// <button type="button" name={options.good} className="btn btn-dark m-1" onClick={(e) => { onLeaveFeedback(e) }}>{options.good}</button>
	)
}

FeedbackOptions.propTypes = {
	options: PropTypes.array,
	onLeaveFeedback: PropTypes.func
}

export default FeedbackOptions