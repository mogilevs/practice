import { Route, Routes } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { lazy } from "react";
// import { selectIsRefreching } from "../../redux/auth/selectors";
// import { refreshUser } from "../../redux/auth/operations";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import { Toaster } from "react-hot-toast";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../../pages/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"));
const MainPage = lazy(() => import("../../pages/MainPage"));

export default function App() {
   return (<Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/register"
        element={
          <RestrictedRoute
            component={<RegistrationPage />}
            redirectTo={"/main"}
          />
        }
      />
      <Route
        path="/login"
        element={
          <RestrictedRoute
            component={<LoginPage />}
            redirectTo={"/main"}
          />
        }
      />
      <Route
        path="/main"
        element={
          <PrivateRoute component={<MainPage />} redirectTo={"/login"} />
        }
      />
      <Route path="*" element={<HomePage />} />
    </Routes>
    {/* <Toaster /> */}
  </Layout>);
}
