import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { userState } from '../../recoil/user';

export const useUser = () => {

    const [user, setUser] = useRecoilState(userState);

    //TODO:repositories配下にデータ取得を記述する？
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUser(json))
            .catch((error) => {
                console.log('error')
            })
    }, []);



    return [user];
}