import React, { useEffect } from "react";
import logo from "logo.svg";
import { Counter } from "features/counter/Counter";
import "app/App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "Component/Profile/Profile";
import Login from "Component/Login/Login";
import Packs from "Component/Packs/Packs";
import Learn from "Component/Learn/Learn";
import Register from "Component/Register/Register";
import { useDispatch, useSelector } from "react-redux";
import { setIsloadingTC } from "app/app.slice";
import { AppDispatch, RootState } from "app/store";

function App() {
  const isLoading = useSelector<RootState>((state) => state.app.isLoading);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsloadingTC());
    }, 3000);
  });

  return (
    <>
      {/*<header className="App-header">*/}

      <Routes>
        {/*  <Route path={"/"} element={<Profile />} />*/}
        <Route path={"/login"} element={<Login />} />
        {/*  <Route path={"/learn"} element={<Learn />} />*/}
        {/*  <Route path={"/packs"} element={<Packs />} />*/}
        <Route path={"/register"} element={<Register />} />
      </Routes>
      {/*<img src={logo} className="App-logo" alt="logo" />*/}
      {isLoading && <> ...LOADING</>}
      <Counter />
      {/*<p>*/}
      {/*  Edit <code>src/App.tsx</code> and save to reload.*/}
      {/*</p>*/}
      {/*<span>*/}
      {/*  <span>Learn </span>*/}
      {/*  <a className="App-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">*/}
      {/*    React*/}
      {/*  </a>*/}
      {/*  <span>, </span>*/}
      {/*  <a className="App-link" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">*/}
      {/*    Redux*/}
      {/*  </a>*/}
      {/*  <span>, </span>*/}
      {/*  <a className="App-link" href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">*/}
      {/*    Redux Toolkit*/}
      {/*  </a>*/}
      {/*  ,<span> and </span>*/}
      {/*  <a className="App-link" href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">*/}
      {/*    React Redux*/}
      {/*  </a>*/}
      {/*</span>*/}
      {/*</header>*/}
    </>
  );
}

export default App;
