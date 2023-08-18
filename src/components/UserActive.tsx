import style from './UserActive.module.css';

const UserActive: React.FC<UserActiveProps> = ({ active }) => {
	const ActiveClass: string = active ? style.userActive : style.userInactive;
	return (
		<div className={style.active}>
			<span className={ActiveClass}>{active ? 'Activo' : 'Inactivo'}</span>
		</div>
	);
};

interface UserActiveProps {
	active: boolean;
}

export default UserActive;
