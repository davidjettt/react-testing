import { useState, useEffect } from "react";
import axios from 'axios'

export interface IAPIComponentProps {
}

export default function APIComponent (props: IAPIComponentProps) {
    const [users, setUsers] = useState<any>([])

    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({data}) => {
            let responseUsers: any = data.map((user: any) => {
                return {
                id: user.id,
                name: user.name
                }
            })
            setUsers(responseUsers)
            })
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <div>
        <button onClick={getData}>Get users</button>
        <ul>
            {users.map((user:any) => (
            <li key={user.id} role='listitem' data-testid='user'>
                {user.name}
            </li>
            ))}
        </ul>
    </div>
  );
}
