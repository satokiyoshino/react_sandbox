import { useNavigate } from "react-router-dom";

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
            <button onClick={() => navigate('/')}>一覧に戻る</button>
        </>
    );
};