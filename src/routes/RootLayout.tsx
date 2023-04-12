import { Suspense } from "react";
import { Container } from "@mantine/core";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import NavLinks from "../components/NavLinks";

const RootLayout = () => {
  return (
    <Container>
      <NavLinks />
      <Toaster />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default RootLayout;
