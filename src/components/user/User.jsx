const User = ({ profileImage, name, email }) => {
	return (
		<>
			<div>
				<img src={profileImage} alt={`photo of ${name}`} />
				<h1>{name}</h1>
				<span>{email}</span>
			</div>
		</>
	);
};

export default User;
