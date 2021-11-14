import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import layouts from "./routes";
import NotFound from "./pages/NotFound";
import { Provider } from "react-redux";
import store from "./redux/index";
import { Skeleton } from "antd";
import { timeTravel as timeT } from "../helpers/client";
timeTravel = timeT;
Sk = ({ children, loading, ...rest }) => {
  return (
    <>
      {loading === true ? (
        <Skeleton loading={loading} {...rest}></Skeleton>
      ) : (
        children
      )}
    </>
  );
};
function Login() {
  return <h1>Login</h1>;
}
function Dashboard() {
  return <h1>Dashboard</h1>;
}
function AuthLayout({ children }) {
  return <>AuthLayout{children}</>;
}
function MainLayout({ children }) {
  return <>MainLayout{children}</>;
}
function ParentLayout({ children }) {
  return <>ParentLayout {children}</>;
}
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
//   exact is important here
          <Route exact path={["/login","/login2"]}>
            <AuthLayout>
              <Switch>
                <Route exact path={"/login"} component={Login} />
                <Route exact path={"/login2"} component={Login} />
              </Switch>
            </AuthLayout>
          </Route>

          <Route exact path={["/dashboard","/dashboard2"]}>
            <MainLayout>
              <Switch>
                <Route exact path={"/dashboard"} component={Dashboard} />
                <Route exact path={"/dashboard2"} component={Dashboard} />
              </Switch>
            </MainLayout>
          </Route>

          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}
