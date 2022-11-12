import { atom } from 'recoil';

type PostList = {
    id: string;
    userId: string;
    title: string;
}

type PostDetail = {
    id: string;
    userId: string;
    title: string;
    body: string;
}

export const PostListState = atom<PostList>({
    key: 'atom/postList',
    default: {
        id: '',
        userId: '',
        title: '',
    }
})

export const PostDetailState = atom<PostDetail>({
    key: 'atom/postDetail',
    default: {
        id: '',
        userId: '',
        title: '',
        body: ''
    }
})