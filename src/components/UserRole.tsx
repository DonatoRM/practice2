import style from './UserRole.module.css';
import { ROLE_TYPES } from '../constants/roleTypes';

const UserRole: React.FC<UserRoleProps> = ({ role }) => {
	const [userRole, roleClass] = ROLE_CLASS[role] || ROLE_CLASS.other;
	return (
		<div className={style.role}>
			<span className={`${style.roleSpan} ${roleClass} || ''`}>{userRole}</span>
		</div>
	);
};

interface UserRoleProps {
	role: string;
}

interface RoleClass {
	[x: string]: string[];
}
const ROLE_CLASS: RoleClass = {
	[ROLE_TYPES.TEACHER]: ['profesor', style.teacher],
	[ROLE_TYPES.STUDENT]: ['alumno', style.student],
	[ROLE_TYPES.OTHER]: ['otro', style.other]
};

export default UserRole;
