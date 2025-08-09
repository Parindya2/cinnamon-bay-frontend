import React from "react"
import { Container } from "react-bootstrap"

const Parallax = () => {
	return (
		<div className="parallax mb-5">
			<Container className="text-center px-5 py-5 justify-content-center">
				<div className="animated-texts bounceIn">
					<h1>
					Welcome to <span className="hotel-color">Cinnamon Bay</span>
				    </h1>
					<h4>Your Escape Awaits. We offer the best services for all your needs.</h4>
				</div>
			</Container>
		</div>
	)
}

export default Parallax