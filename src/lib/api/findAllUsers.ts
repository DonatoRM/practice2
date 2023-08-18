export const findAllUsers = async (signal: AbortSignal) => {
	try {
		const res = await fetch('http://localhost:4000/users', { signal });

		const users: User[] = await res.json();
		return {
			users,
			error: !res.ok,
			abort: false
		};
	} catch (err) {
		const abort: boolean = (err as Error).name === 'AbortError';

		return {
			users: [],
			error: !abort,
			abort: abort
		};
	}
};

export interface User {
	id: string;
	name: string;
	active: boolean;
	role: string;
}
