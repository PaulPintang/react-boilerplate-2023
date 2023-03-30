import { Button } from "@mantine/core";
import { lazy, Suspense, useState } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

const Home = () => {
  const [admin, setAdmin] = useState(false);
  return (
    <div>
      <p>Home</p>
      <Button onClick={() => setAdmin(!admin)}>Im Admin</Button>
      <Suspense fallback={<p>Loading...</p>}>
        {admin ? <Dashboard /> : <h1>Not an admin</h1>}
      </Suspense>
    </div>
  );
};

export default Home;
