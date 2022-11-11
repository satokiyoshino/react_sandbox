import { Link } from "react-router-dom";

import { useUserList } from '../../hooks/useUserList';

type Props = {}

export const UserList = () => {
    const [userLists] = useUserList();
    const userListsArray = Object.values(userLists);

    return (
        <>
            <ul>
                <h2>ユーザーリスト</h2>
                {userListsArray.map((userList, index) => (
                    <li key={index} >
                        <Link to={`users/${userList.id}`}>
                            {userList.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}


