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
import { Header } from "Component/Header/Header";
import { ForgotPassword } from "Component/ForgotPassword/ForgotPassword";
import { CheckEmail } from "Component/CheckEmail/CheckEmail";
import { CreatePassword } from "Component/CreatePassword/CreatePassword";

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
      </Routes>
    </>
  );
}

export default App;
