
const Section = ({ children, title }) => {
	return (<>
		<h1 className="display-3  m-2">{title}</h1>
		{children}
	</>)
}

export default Section