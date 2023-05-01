import React from "react";
import { useAppDispatch } from "app/hooks";
import { authLoginType } from "features/auth/auth.api";
import { authThunks, loginTC } from "features/auth/auth.slice";
import { SubmitHandler, useForm } from "react-hook-form";
import s from "Component/Login/ContainerLogin.module.scss";
import { Title } from "common/component/Title/Title";
import b from "../../common/component/Button/button.module.scss";
import { Form } from "common/component/Form/Form";
import { BottomAuth } from "common/component/BottomAuth/BottomAuth";
import { Hint } from "common/component/Hint/Hint";

const Login = () => {
  const dispatch = useAppDispatch();

  // const loginHandler = () => {
  //   const payload = {
  //     email: "alexsuslim@inbox.ru",
  //     password: "utnthj[hjyyjcnm",
  //     rememberMe: false,
  //   };
  //
  //   dispatch(authThunks.loginTC(payload));
  // };
  return (
    <div className={s.containLogo}>
      <div className={s.login}>
        <Title name={"Login"} />
        <Form />
        <Hint description={"Don't have an account?"} />
        <BottomAuth name={"Sign in"} />
        {/*<button onClick={loginhandler}> add</button>*/}
        {/*Login*/}
      </div>
    </div>
  );
};

export default Login;

// import ReactDOM from "react-dom";
// import { useForm, SubmitHandler } from "react-hook-form";
//

//

// function Login2(props:LoginType) {
//   const { register, handleSubmit,reset, formState: { errors } } = useForm<Inputs>(); //метод, возвращает объект
//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     props.login(data.email,data.password,data.rememberMe)
//     reset();
//   }
//   if(props.isAuth) return <Redirect to={'./profile'}/>
//
//
//
//   return (<>
//     <h2>Login</h2>
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* первый параметр имя, */}
//       <div >
//         <input placeholder={'Email'}  {...register("email", { required: 'Обязательно',
//           minLength:{
//             value:5,
//             message:'минимум 5 символов',
//           }})} />
//         {errors?.email && <span>{errors?.email?.message ||'Email'}</span>}
//       </div>
//       {/* include validation with required or other standard HTML validation rules */}
//       <div >
//         <input placeholder={'Password'} {...register("password", { required: true })} />
//         {/* errors will return when field validation fails  */}
//         {errors.password && <span>This field is required</span>}
//       </div>
//       <div> Remember me
//         <input type="checkbox"  {...register("rememberMe")}/>
//       </div>
//       <input type="submit" />
//
//     </form>
//   </> );
// }
