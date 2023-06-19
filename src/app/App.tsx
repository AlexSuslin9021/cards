import React, { useEffect } from "react";
import "app/App.module.scss";
import { Route, Routes } from "react-router-dom";
import { Profile } from "common/component/Profile/Profile";
import Register from "features/Auth/Register/Register";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "app/store";
import { Header } from "common/component/Header/Header";
import { ForgotPassword } from "features/Auth/ForgotPassword/ForgotPassword";
import { CheckEmail } from "features/Auth/CheckEmail/CheckEmail";
import { CreatePassword } from "features/Auth/CreatePassword/CreatePassword";
import Login from "features/Auth/Login/Login";
import s from "./App.module.scss";
import { PagePack } from "features/Packs/packsComponents/PagePack/PagePack";
import { authThunks } from "features/Auth/auth.slice";
import { CircularProgress, LinearProgress } from "@mui/material";
import { Pack } from "features/Packs/Pack";
import { Cards } from "features/Cards/Cards";
import { Learn } from "features/Learn/Learn";

function App() {
  const isLoggedInApp = useAppSelector<boolean>((state) => state.app.isLoggedIn);
  const isInitialized = useAppSelector<boolean>((state) => state.auth.isInitialized);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(authThunks.initializedTC());
  }, []);
  if (!isInitialized) {
    return (
      <div style={{ position: "fixed", top: "30%", textAlign: "center", width: "100%" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={s.app}>
      <Header />
      {isLoggedInApp && <LinearProgress sx={{ position: "fixed", top: "72px", left: "0", right: "0" }} />}

      <div className={s.container}>
        <Routes>
          <Route path={"/"} element={<Profile />} />
          <Route path={"/packs/:section"} element={<Pack />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/forgot-password"} element={<ForgotPassword />} />
          <Route path={"/check-email"} element={<CheckEmail />} />
          <Route path={"/set-new-password/:token"} element={<CreatePassword />} />
          <Route path={"/page-pack/:name/:idCard"} element={<PagePack />} />
          <Route path={"/cardsPage/:id"} element={<Cards />} />
          <Route path={"/learn/:packName"} element={<Learn />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
