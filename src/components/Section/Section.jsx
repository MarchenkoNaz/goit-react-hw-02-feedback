import PropTypes from 'prop-types'

const Section = ({ children, title }) => {
	return (<>
		<h1 className="display-3  m-2">{title}</h1>
		{children}
	</>)
}

Notification.propTypes = {
	children: PropTypes.string,
	title: PropTypes.string,
}
export default Section