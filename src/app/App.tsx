import React, { useEffect } from "react";
import "app/App.module.scss";
import { Route, Routes } from "react-router-dom";
import Profile from "Component/Profile/Profile";
import Learn from "Component/Learn/Learn";
import Register from "features/auth/Register/Register";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "app/store";
import { Header } from "Component/Header/Header";
import { ForgotPassword } from "features/auth/ForgotPassword/ForgotPassword";
import { CheckEmail } from "features/auth/CheckEmail/CheckEmail";
import { CreatePassword } from "features/auth/CreatePassword/CreatePassword";
import Login from "features/auth/Login/Login";
import s from "./App.module.scss";
import { PagePack } from "features/Packs/PagePack/PagePack";
import FriendsPack from "features/Cards/FriendsPacks/FriendsPack";
import MyPack from "features/Cards/MyPacks/MyPack";
import { authThunks } from "features/auth/auth.slice";
import { LinearProgress } from "@mui/material";
import Pack from "features/Packs/Pack";

function App() {
  const isLoggedInApp = useAppSelector<boolean>((state) => state.app.isLoggedIn);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(authThunks.initializedTC());
  }, []);
  return (
    <div className={s.app}>
      <Header />
      {isLoggedInApp && <LinearProgress />}
      <div className={s.container}>
        <Routes>
          <Route path={"/"} element={<Profile />} />
          <Route path={"/packs"} element={<Pack />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/forgot-password"} element={<ForgotPassword />} />
          <Route path={"/check-email"} element={<CheckEmail />} />
          <Route path={"/set-new-password/:token"} element={<CreatePassword />} />
          <Route path={"/learn"} element={<Learn />} />
          <Route path={"/page-pack"} element={<PagePack />} />
          <Route path={"/friends-cards/:id"} element={<FriendsPack />} />
          <Route path={"/my-cards"} element={<MyPack />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
