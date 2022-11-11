import { Routes, Route } from "react-router-dom";

import { UserList } from "../userList";
import { UserDetail } from "../userDetail";
import { PostDetail } from "../postDetail";

export const UserRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<UserList />}></Route>
                <Route path='users/:id' element={<UserDetail />}></Route>
                <Route path='posts/:id' element={<PostDetail />}></Route>
            </Routes>
        </>
    );
}