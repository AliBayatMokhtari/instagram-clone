import { Outlet } from 'react-router-dom'

const MainLayout = () => {
	return (
		<div>
			<div>this is header</div>
			<Outlet />
		</div>
	)
}

export { MainLayout as default }
