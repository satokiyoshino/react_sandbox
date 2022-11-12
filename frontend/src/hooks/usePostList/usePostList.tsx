import { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { useRecoilState } from 'recoil';
import { PostListState } from '../../recoil/post';


export const usePostList = () => {
    const [post, setPost] = useRecoilState(PostListState);

    const { id } = useParams();

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