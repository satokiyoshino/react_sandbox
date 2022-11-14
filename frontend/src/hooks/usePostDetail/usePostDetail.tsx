import { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { useRecoilState } from 'recoil';
import { PostDetailState } from '../../recoil/post';
import { userDetailState } from '../../recoil/user';


export const usePostDetail = () => {
    const [post, setPost] = useRecoilState(PostDetailState);
    const { id } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            );
            const postData = await res.json();
            await setPost(postData);
        };
        fetchUser();
    }, [id]);

    return [post];
}

export const useUserNameSearch = () => {
    const [user, setUser] = useRecoilState(userDetailState);
    const [post] = useRecoilState(PostDetailState);
    const id = post.userId;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
            const userData = await res.json();
            await setUser(userData);
        };
        fetchUser();
    }, [id, post]);

    return [user];
}