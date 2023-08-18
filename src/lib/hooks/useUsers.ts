import { useState, useEffect } from 'react';
import { User } from '../api/findAllUsers';
import { loadAllUsers } from '../users/usersList';

export const useUsers = () => {
	const [data, setData] = useState<Data>({
		users: [],
		loading: true,
		error: false
	});
	const setUsers = (newUsers: User[]) =>
		setData({
			users: newUsers,
			loading: false,
			error: false
		});
	const setError = () =>
		setData({
			users: [],
			loading: false,
			error: true
		});
	const reloadUsers = () =>
		setData({
			users: [],
			loading: true,
			error: false
		});

	useEffect(() => {
		if (!data.loading) return;
		const controller = new AbortController();
		loadAllUsers(setUsers, setError, controller.signal);
		return () => controller.abort();
	}, [data.loading]);

	return {
		...data,
		setUsers,
		setError,
		reloadUsers
	};
};

export interface Data {
	users: [] | User[];
	loading: boolean;
	error: boolean;
}
