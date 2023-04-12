import { Button } from "@mantine/core";
import { lazy, Suspense } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { login, logout } from "../features/auth/authSlice";
import ToastNotify from "../components/ToastNotify";

const Dashboard = lazy(() => import("./Dashboard"));

const Home = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.auth);

  const handleLogin = async () => {
    dispatch(login());
    ToastNotify("Successfully logged in");
  };
  return (
    <div>
      <p>Home</p>
      {isAuth ? (
        <Button onClick={() => dispatch(logout())}>Logout</Button>
      ) : (
        <Button variant="gradient" onClick={handleLogin}>
          Authenticate
        </Button>
      )}
      <Suspense fallback={<p>Loading...</p>}>
        {isAuth ? <Dashboard /> : <h1>Not authenticated!!</h1>}
      </Suspense>
    </div>
  );
};

export default Home;
