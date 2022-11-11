import { atom } from 'recoil';

type UserList = {
    id: string;
    name: string;
};

type UserDetail = {
    id: string;
    name: string;
    username: string;
    email: string;
};

export const userListState = atom<UserList>({
    key: 'atom/userList',
    default: {
        id: '',
        name: ''
    },
});

export const userDetailState = atom<UserDetail>({
    key: 'atom/userDetail',
    default: {
        id: '',
        name: '',
        username: '',
        email: ''
    },
});