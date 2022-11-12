import { useNavigate } from "react-router-dom";

import { PostList } from '../postList';

import { useUserDetail } from '../../hooks/useUserDetail';

type props = {};

export const UserDetail = () => {
    const [userInfo] = useUserDetail();
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

            <PostList />

            <div>
                <button onClick={() => navigate('/')}>トップページに戻る</button>
            </div>
        </>
    );
};