import React, { useEffect } from "react";
import "app/App.module.scss";
import { Route, Routes } from "react-router-dom";
import Profile from "Component/Profile/Profile";
import Packs from "features/Packs/PacksList/Packs";
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
import s from "./App.module.scss";
import { PagePack } from "features/Packs/PagePack/PagePack";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(initializedTC());
  }, []);

  return (
    <div className={s.app}>
      <Header />
      <div className={s.container}>
        <Routes>
          <Route path={"/"} element={<Profile />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/forgot-password"} element={<ForgotPassword />} />
          <Route path={"/check-email"} element={<CheckEmail />} />
          <Route path={"/set-new-password/:token"} element={<CreatePassword />} />
          <Route path={"/learn"} element={<Learn />} />
          <Route path={"/packs"} element={<Packs />} />
          <Route path={"/page-pack"} element={<PagePack />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
