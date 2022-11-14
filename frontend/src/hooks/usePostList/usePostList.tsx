import { useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { PostListState } from '../../recoil/post';
import { userDetailState } from '../../recoil/user';

export const usePostList = () => {
    const [post, setPost] = useRecoilState(PostListState);
    const [user] = useRecoilState(userDetailState);
    const id = user.id;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts?userId=${id}`
            );
            const postData = await res.json();
            await setPost(postData);
        };
        fetchUser();
    }, [id]);

    return [post];
}