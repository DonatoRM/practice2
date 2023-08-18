import style from './UsersRendered.module.css';
import React from 'react';
import { Data } from '../lib/hooks/useUsers';
import UserRow from './UserRow';

export const UsersRendered: React.FC<Data> = ({ users, loading, error }) => {
	let usersRendered: JSX.Element[] = [];
	if (loading && !error) {
		usersRendered = [
			<p key={0} className={style.loading}>
				Cargando...
			</p>
		];
	} else if (!loading && error) {
		usersRendered = [
			<p key={0} className={style.error}>
				Se ha producido un error
			</p>
		];
	} else if (!loading && !error) {
		if (users.length === 0) {
			usersRendered = [
				<p key={0} className={style.empty}>
					No existen usuarios
				</p>
			];
		} else {
			usersRendered = users.map(user => <UserRow key={user.id} {...user} />);
		}
	}
	return usersRendered;
};
