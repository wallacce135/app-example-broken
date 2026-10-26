import { UserCard } from './UserCard';
import type { User } from './types';

const users: User[] = [
    { id: 1, firstName: 'Ada', lastName: 'Lovelace', email: 'ada@example.com' },
    { id: 2, firstName: 'Alan', lastName: 'Turing', email: 'alan@example.com' },
];

export function App() {
    return (
        <main>
            <h1>Users</h1>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </main>
    );
}
