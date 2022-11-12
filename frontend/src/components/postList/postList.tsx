import { useNavigate } from "react-router-dom";

import { usePostList } from '../../hooks/usePostList';

export const PostList = () => {

    const [postLists] = usePostList();
    const navigate = useNavigate();
    const postListsArray = Object.values(postLists);

    return (
        <>
            <h3>著者が書いた投稿のタイトル一覧</h3>
            <ul>
                {postListsArray.map((postList, index) => (
                    <>
                        <li key={index}>タイトル名：「{postList.title}」(投稿ID:{postList.id})
                            <button onClick={() => navigate(`/posts/${postList.id}`)}>POST</button><br /><br />
                        </li>
                    </>
                ))}
            </ul>
        </>
    )
} 