import { Routes as ReactRoutes, Route } from 'react-router-dom' // Переименование Routes
import App from './App.tsx'
import Cart from './components/Cart/Cart.tsx'

function AppRoutes() {
	return (
		<ReactRoutes>
			<Route path='/' element={<App />} />
			<Route path='/Cart' element={<Cart />} />
		</ReactRoutes>
	)
}

export default AppRoutes
