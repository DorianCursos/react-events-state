import { useNavigate } from 'react-router-dom';

const Users = ({ users }) => {
	const navigate = useNavigate();

	if (!users || users.length === 0) return <p>No hay usuarios</p>;
	return (
		<>
			{users.map(user => (
				<div key={user.userId}>
					<p>
						{user.name} {user.active ? 'Active' : 'Inactive'}
					</p>
					<button onClick={() => navigate(`/user/${user.userId}`)}>
						Ver detalles
					</button>
				</div>
			))}
		</>
	);
};

export default Users;
