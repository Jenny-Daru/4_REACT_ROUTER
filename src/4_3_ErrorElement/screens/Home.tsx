import React from 'react';
import { users } from '../components/db';
import { Link } from 'react-router-dom';

export default function Home() {
    // const users: any = [];
    return (
        // 에러를 한번 발생시켜보기! ErrorElement 사용해보기 위해서,,, 
        // users는 비어있는 array이고, 첫번째 아이템이 없어서 undefined이면서 name도 없다.
        // <h1>{users[0].name}</h1>
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

