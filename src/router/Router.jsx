import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import UserDetails from '../pages/UserDetails';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/user/:userId' element={<UserDetails />} />
		</Routes>
	);
};

export default Router;
