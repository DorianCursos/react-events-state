import { useNavigate, useParams } from 'react-router-dom';
import User from '../components/user/User';
import { USERS } from '../constants/users';

const UserDetails = () => {
	const { userId } = useParams();
	const navigate = useNavigate();

	const user = USERS.find(user => user.userId === userId);

	return (
		<>
			<User {...user} />
			<button onClick={() => navigate('/')}>Back to users</button>
		</>
	);
};

export default UserDetails;
