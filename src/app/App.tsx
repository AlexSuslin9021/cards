import React, { useEffect } from "react";
import "app/App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "Component/Profile/Profile";
import Login from "Component/Login/Login";
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
import Logintest from "common/component/Login2/Logintest";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(initializedTC());
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Profile />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/forgot-password"} element={<ForgotPassword />} />
        <Route path={"/check-email"} element={<CheckEmail />} />
        <Route path={"/create-password"} element={<CreatePassword />} />
        <Route path={"/learn"} element={<Learn />} />
        <Route path={"/packs"} element={<Packs />} />
        <Route path={"/logintest"} element={<Logintest />} />
      </Routes>
    </>
  );
}

export default App;
