import { Button } from "@mantine/core";
import { lazy, Suspense } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { login, logout } from "../features/auth/authSlice";

const Dashboard = lazy(() => import("./Dashboard"));

const Home = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.auth);
  return (
    <div>
      <p>Home</p>
      {isAuth ? (
        <Button onClick={() => dispatch(logout())}>Logout</Button>
      ) : (
        <Button variant="gradient" onClick={() => dispatch(login())}>
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
