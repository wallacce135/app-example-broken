import type { User } from './types';

interface UserCardProps {
    user: User;
}

export function UserCard({ user }: UserCardProps) {
    return (
        <article>
            <h2>{user.fullName}</h2>
            <a href={`mailto:${user.email}`}>{user.email}</a>
        </article>
    );
}
