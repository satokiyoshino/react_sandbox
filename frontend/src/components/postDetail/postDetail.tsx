import { useNavigate } from "react-router-dom";

import { usePostDetail, useUserNameSearch } from '../../hooks/usePostDetail';

export const PostDetail = () => {

    const [postInfo] = usePostDetail();
    const [userName, _] = useUserNameSearch();
    const navigate = useNavigate();


    return (
        <>
            <ul>
                <h2>投稿詳細</h2>
                <li>著者の名前は「{userName.name}」</li>
                <li>タイトルは「{postInfo.title}」</li>
                <li>本文は「{postInfo.body}」</li>
            </ul>
            <button onClick={() => navigate(`/users/${userName.id}`)}>著者「{userName.name}」の情報に戻る</button>
            <button onClick={() => navigate('/')}>トップに戻る</button>
        </>
    );
}