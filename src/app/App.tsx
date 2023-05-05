import React, { useEffect } from "react";
import "app/App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "Component/Profile/Profile";
import LoginCopy from "Component/Login/LoginCopy";
import Packs from "Component/Packs/Packs";
import Learn from "Component/Learn/Learn";
import Register from "features/auth/Register/Register";
import { useDispatch } from "react-redux";
import { AppDispatch } from "app/store";
import { Header } from "Component/Header/Header";
import { ForgotPassword } from "features/auth/ForgotPassword/ForgotPassword";
import { CheckEmail } from "features/auth/CheckEmail/CheckEmail";
import { CreatePassword } from "features/auth/CreatePassword/CreatePassword";

import { initializedTC } from "app/app.slice";
import Login from "features/auth/Login/Login";
import s from "Component/Login/ContainerLogin.module.scss";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(initializedTC());
  }, []);

  return (
    <div className={s.app}>
      <Header />
      <Routes>
        <Route path={"/"} element={<Profile />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/forgot-password"} element={<ForgotPassword />} />
        <Route path={"/check-email"} element={<CheckEmail />} />
        <Route path={"/set-new-password/:token"} element={<CreatePassword />} />
        <Route path={"/learn"} element={<Learn />} />
        <Route path={"/packs"} element={<Packs />} />
      </Routes>
    </div>
  );
}

export default App;
