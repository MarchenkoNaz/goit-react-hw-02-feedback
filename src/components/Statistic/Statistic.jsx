import Notification from 'components/Notification/Notification'
import React from 'react'


const Statistic = ({ good, neutral, bad, total, positive }) => {
	return (<>
		{total === 0 ? <Notification>There is no feedback</Notification> :
			<ul className="list-group">
				<li className="list-group-item ">Good : {good}</li>
				<li className="list-group-item ">Neutral : {neutral}</li>
				<li className="list-group-item ">Bad : {bad}</li>
				<li className="list-group-item ">Total : {total}</li>
				<li className="list-group-item ">Positive : {positive}%</li>
			</ul>}
	</>)
}


export default Statistic