const { Button, Container } = ReactBootstrap;

function MemeApp() {
	const query = ReactQuery.useQuery({
		queryKey: "memes",
		queryFn: fetchMemes
	})

	let content = null;

	console.log(query);

	if (query.isLoading) {
		content = <Container fluid className="statusText">Loading...</Container>;
	}
	else if (query.isError) {
		content = <Container fluid className="statusText">Unknown error</Container>;
	}
	else {
		content = [];
		for (let meme of query.data) {
			content.push(<Meme {...meme} key={meme.name}/>);
		}
	}

	return (
		<Container fluid className="MemeApp">
			<Button id="getMemeButton" onClick={query.refetch} variant="outline-dark" size="lg">Refresh memes</Button>
			<div>{content}</div>
		</Container>
	)
}

async function fetchMemes() {
	let response = await fetch("https://api.imgflip.com/get_memes");
	
	if (!response.ok) {
		throw new Error("Fetch memes return error");
	}
	
	let result = await response.json();

	console.log("Fetch successful: " + result.success);

	return result.data.memes;
}