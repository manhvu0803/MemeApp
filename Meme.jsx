const { Card } = ReactBootstrap;

function Meme(props) {
	return (
		<div className="Meme">
			<Card>
				<Card.Img variant="top" src={props.url}/>
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
				</Card.Body>
			</Card>
		</div>
	)
}