import { UserList } from "./components/userList";
import { UserDetail } from "./components/userDetail";
import { RecoilRoot } from 'recoil';

export const App = () => {
  return (
    <>
      <RecoilRoot>
        <UserList></UserList>
        <UserDetail></UserDetail>
      </RecoilRoot>
    </>
  );
};
