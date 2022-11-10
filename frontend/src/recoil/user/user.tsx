import { atom } from 'recoil';

type User = {
    // TODO：ここの解説をしてもらう
    // map?(arg0: (info: any) => JSX.Element): import("react").ReactNode;
    [x: string]: any;
    id: number | null;
    name: string;
    username: string;
    email: string;
};

export const userState = atom<User>({
    key: 'atom/user',
    default: {
        id: null,
        name: '',
        username: '',
        email: ''
    },
});