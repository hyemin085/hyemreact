import React, {useContext} from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import AuthContext from "../../store/Auth_Context";

const Home = (props) => {

  const authCtx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
        <button onClick={authCtx.onLogout}>로그아웃</button>
    </Card>
  );
};

export default Home;
