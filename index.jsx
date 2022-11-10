const { QueryClientProvider, QueryClient } = ReactQuery;

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();

root.render(
	<QueryClientProvider client={queryClient} contextSharing={true}>
		<MemeApp/>
	</QueryClientProvider>
);
