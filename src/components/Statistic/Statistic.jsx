import Notification from 'components/Notification/Notification'
import React from 'react'

import PropTypes from 'prop-types'


const Statistic = (props) => {
	return (<>
		{!props.statistic.total ? <Notification>There is no feedback</Notification> :
			<ul className="list-group">
				<li className="list-group-item ">Good : {props.statistic.good}</li>
				<li className="list-group-item ">Neutral : {props.statistic.neutral}</li>
				<li className="list-group-item ">Bad : {props.statistic.bad}</li>
				{props.statistic.total && <li className="list-group-item ">Total : {props.statistic.total}</li>}
				{(props.statistic.positive || !props.statistic.positive) && <li className="list-group-item ">Positive : {props.statistic.positive}%</li>}
			</ul>}
	</>)
}

Notification.propTypes = {
	props: PropTypes.object
}

export default Statistic