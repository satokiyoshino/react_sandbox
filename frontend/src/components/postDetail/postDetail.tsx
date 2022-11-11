import { useNavigate } from "react-router-dom";

import { usePostDetail } from '../../hooks/usePostDetail';
import { useUserDetail } from '../../hooks/useUserDetail';

export const PostDetail = () => {

    const [userInfo] = useUserDetail();
    const [postInfo] = usePostDetail();
    const navigate = useNavigate();


    return (
        <>
            <ul>
                <h2>投稿詳細</h2>
                <li>著者の名前は「{userInfo.name}」</li>
                <li>タイトルは「{postInfo.title}」</li>
                <li>本文は「{postInfo.body}」</li>
            </ul>
            <button onClick={() => navigate(`/users/${userInfo.id}`)}>著者「{userInfo.name}」の情報に戻る</button>
            <button onClick={() => navigate('/')}>トップに戻る</button>
        </>
    );
}