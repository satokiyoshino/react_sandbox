import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { userListState } from '../../recoil/user';

export const useUserList = () => {
    const [user, setUser] = useRecoilState(userListState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUser(json))
    }, []);

    return [user];
}