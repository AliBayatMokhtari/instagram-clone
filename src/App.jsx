import ApplicationProviders from './providers/ApplicationProviders'
import router from './router/router'

export default function App() {
	return <ApplicationProviders router={router}></ApplicationProviders>
}
