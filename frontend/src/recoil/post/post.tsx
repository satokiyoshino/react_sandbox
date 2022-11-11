import { atom } from 'recoil';

type PostDetail = {
    id: string;
    title: string;
    body: string;
}

export const PostDetailState = atom<PostDetail>({
    key: 'atom/postDetail',
    default: {
        id: '',
        title: '',
        body: ''
    }
})