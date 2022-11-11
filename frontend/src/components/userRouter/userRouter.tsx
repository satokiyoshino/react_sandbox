import { Routes, Route } from "react-router-dom";

import { UserList } from "../userList";
import { UserDetail } from "../userDetail";

export const UserRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<UserList />}></Route>
                <Route path='users/:id' element={<UserDetail />}></Route>
            </Routes>
        </>
    );
}