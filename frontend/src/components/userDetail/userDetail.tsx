import { useNavigate } from "react-router-dom";

import { useUserDetail } from '../../hooks/useUserDetail';

import { usePostDetail } from '../../hooks/usePostDetail';

type props = {};

export const UserDetail = () => {
    const [userInfo] = useUserDetail();
    const [postInfo] = usePostDetail();
    const navigate = useNavigate();

    return (
        <>
            <ul>
                <h2>ユーザー詳細</h2>
                <li>UserIdは「{userInfo.id}」</li>
                <li>Nameは「{userInfo.name}」</li>
                <li>UserNameは「{userInfo.username}」</li>
                <li>E-mailは「{userInfo.email}」</li>
            </ul>

            <p>投稿のタイトルは「{postInfo.title}」</p>
            <button onClick={() => navigate(`/posts/${postInfo.id}`)}>POST</button><br />

            <div>
                <button onClick={() => navigate('/')}>トップページに戻る</button>
            </div>
        </>
    );
};