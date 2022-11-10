function Meme(props) {
	return (
		<div className="Meme">
			<ReactBootstrap.Card>
				<ReactBootstrap.Card.Img variant="top" src={props.url}/>
				<ReactBootstrap.Card.Body>
					<ReactBootstrap.Card.Title>{props.name}</ReactBootstrap.Card.Title>
				</ReactBootstrap.Card.Body>
			</ReactBootstrap.Card>
		</div>
	)
}

function MemeApp(props) {
	const [memeData, setMemeData] = React.useState([]);

	React.useEffect(() => { fetchMemes(setMemeData); }, []);

	let memes = [];
	for (let meme of memeData) {
		memes.push(<Meme {...meme} key={meme.name}/>);
	}

	return (
		<div className="MemeApp">
			<ReactBootstrap.Button id="getMemeButton" variant="outline-dark" size="lg">Get memes</ReactBootstrap.Button>
			<div>{memes}</div>
		</div>
	)
}

async function fetchMemes(setMemeData) {
	let response = await fetch("https://api.imgflip.com/get_memes");
	let result = await response.json();
	console.log("Fetch successful: " + result.success);
	setMemeData(result.data.memes);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MemeApp/>);
