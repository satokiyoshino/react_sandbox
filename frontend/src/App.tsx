import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from 'recoil';

import { UserRouter } from "./components/userRouter";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <RecoilRoot>
          <UserRouter></UserRouter>
        </RecoilRoot>
      </BrowserRouter>
    </>
  );
};
