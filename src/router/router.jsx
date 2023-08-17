import { createHashRouter } from 'react-router-dom'
import MainLayout from 'src/layouts/MainLayout'
import ROUTES from './routes'

const router = createHashRouter([
	{
		path: ROUTES.INDEX,
		element: <MainLayout />,
		children: [
			{
				path: ROUTES.SETTINGS,
				element: <div>Settings page</div>,
			},
			{
				path: ROUTES.USER_PROFILE,
				element: <div>User profile page</div>,
			},
		],
	},
])

export default router
