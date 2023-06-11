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
			<Section title='Please leave feedback'>
				<Feedback handleClick={this.handleClick} clikc={this.clikc} />
			</Section>
			<Section title='Statistic'>
				<Statistic good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.total} positive={this.state.positive} />
			</Section>
		</>)
	}
}