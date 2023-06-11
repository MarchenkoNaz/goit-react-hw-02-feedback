import React from 'react'
import PropTypes from 'prop-types'

const Notification = ({ children }) => {
	return (
		<div className="alert alert-danger text-center" role="alert">
			{children}
		</div>
	)
}

Notification.propTypes = {
	children: PropTypes.string
}

export default Notification