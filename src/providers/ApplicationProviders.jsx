import { RouterProvider } from 'react-router-dom';

function ApplicationProviders({ children, router }) {
	return (
		<>
			<RouterProvider router={router} />
			{children}
		</>
	);
}

export { ApplicationProviders as default };
