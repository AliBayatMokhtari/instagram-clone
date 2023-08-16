import { RouterProvider } from 'react-router-dom'

export default function ApplicationProviders({ children, router }) {
	return (
		<>
			<RouterProvider router={router} />
			{children}
		</>
	)
}
