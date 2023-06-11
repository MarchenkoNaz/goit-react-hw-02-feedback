import React, { Component } from 'react'
import Feedback from './Feedback/Feedback'
import Section from './Section/Section'
import Statistic from './Statistic/Statistic'

export class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,

	}

	countTotalFeedback = () => {
		this.setState({ total: this.state.good + this.state.neutral + this.state.bad })
	}
	countPositiveFeedbackPercentage = () => {
		this.setState((prevstate) => { return { positive: parseInt(((prevstate.good / prevstate.total) * 100)) } })
	}

	handleClick = (e) => {
		this.setState((prevstate) => { return { [e.target.name]: prevstate[e.target.name] + 1 } }, () => {
			this.countTotalFeedback()
			this.countPositiveFeedbackPercentage()
		})
	}

	render() {
		return (<>
			<Feedback handleClick={this.handleClick} options={this.state} />
			<Section title='Statistic'>
				<Statistic statistic={this.state} />
			</Section>
		</>)
	}
}