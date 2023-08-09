import { feedApi } from './api'

function App() {
	const { queryFn } = feedApi.useFeedQuery()

	return (
		<>
			<button onClick={queryFn}>Click me</button>
		</>
	)
}

export default App
