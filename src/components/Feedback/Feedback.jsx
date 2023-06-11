
const Feedback = ({ handleClick, clikc }) => {
	return (<>
		<button type="button" name="good" className="btn btn-dark m-1" onClick={(e) => { handleClick(e) }}>Good</button>
		<button type="button" name="neutral" className="btn btn-dark m-1" onClick={(e) => { handleClick(e) }} >Neutral</button>
		<button type="button" name="bad" className="btn btn-dark m-1" onClick={(e) => { handleClick(e) }} >Bad</button>
	</>)
}

Feedback.propTypes = {}

export default Feedback