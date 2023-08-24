import ApplicationProviders from './providers/ApplicationProviders';
import router from './router/router';

function App() {
	return <ApplicationProviders router={router}></ApplicationProviders>;
}

export { App as default };
