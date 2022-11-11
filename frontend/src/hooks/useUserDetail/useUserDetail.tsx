import { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { useRecoilState } from 'recoil';
import { userDetailState } from '../../recoil/user';


export const useUserDetail = () => {
    const [user, setUser] = useRecoilState(userDetailState);
    const { id } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
            const userData = await res.json();
            await setUser(userData);
        };
        fetchUser();
    }, [id]);

    return [user];
}