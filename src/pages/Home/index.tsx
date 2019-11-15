import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as UserActions from "../../store/modules/user/actions";
import { Input, Button } from "./styles";

const Home: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const userRedux = useSelector(({ user }: any) => user.user);

  const [user, setUserValue] = useState("");

  const handleSetUser = () => {
    const { setUser } = UserActions;
    dispatch(setUser(user));
  };

  return (
    <>
      <Input
        type="text"
        value={user}
        onChange={e => setUserValue(e.target.value)}
      />
      <Button onClick={handleSetUser}>Set user</Button>
      <p>This sets the user in the Redux store.</p>
      {userRedux && (
        <>
          <p style={{ marginTop: 20 + "px" }}>
            Dispatched an action of type SET_USER with the input value as
            payload to the reducer. The reducer then sets the user value in the
            reducer's state
          </p>
          <p style={{ marginTop: 20 + "px" }}>
            It shows that you can store data in one centered store and use it
            anywhere when needed. It mimics an API call, where you need to do
            only one request, usually on startup, and use the data retrieved
            anywhere, since it's app centralized.
          </p>
          <p style={{ marginTop: 20 + "px" }}>
            The other components using this data does not need to make another
            request, they pull the data from the store.
          </p>
        </>
      )}
    </>
  );
};

export default Home;
