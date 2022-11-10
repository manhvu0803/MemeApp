const { Button } = ReactBootstrap;

function MemeApp(props) {
	const [memeData, setMemeData] = React.useState([]);

	React.useEffect(() => { fetchMemes(setMemeData); }, []);

	let memes = [];
	for (let meme of memeData) {
		memes.push(<Meme {...meme} key={meme.name}/>);
	}

	return (
		<div className="MemeApp">
			<Button id="getMemeButton" variant="outline-dark" size="lg">Refresh memes</Button>
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