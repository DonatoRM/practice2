import { User, findAllUsers } from '../api/findAllUsers';

export const loadAllUsers = async (
	setUsers: (newUsers: User[]) => void,
	setError: () => void,
	signal: AbortSignal
) => {
	const result: Search = await findAllUsers(signal);
	if (result.abort) return;
	if (result.error) setError();
	else setUsers(result.users);
};

interface Search {
	users: [] | User[];
	error: boolean;
	abort: boolean;
}
