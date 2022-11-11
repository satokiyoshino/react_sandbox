import { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { useRecoilState } from 'recoil';
import { PostDetailState } from '../../recoil/post';


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