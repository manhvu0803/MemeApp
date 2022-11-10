const { Card } = ReactBootstrap;

function Meme({ url, name }) {
	return (
		<div className="Meme">
			<Card>
				<Card.Img variant="top" src={url}/>
				<Card.Body>
					<Card.Title>{name}</Card.Title>
				</Card.Body>
			</Card>
		</div>
	)
}