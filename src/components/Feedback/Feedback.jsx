import PropTypes from 'prop-types'

import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions"
import Section from "components/Section/Section"

const Feedback = ({ handleClick, options }) => {
	return (<>
		<Section title='Please leave feedback'>
			<FeedbackOptions options={Object.keys(options)} onLeaveFeedback={handleClick} />
		</Section>
	</>)
}

Feedback.propTypes = {
	handleClick: PropTypes.func,
	options: PropTypes.object
}

export default Feedback