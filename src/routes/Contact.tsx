import { Flex } from "@mantine/core";
import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

const Contact = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  return (
    <div>
      {isAuth && <h1>This appears cause you are authenticated! Yey</h1>}
      <p>Contact Details</p>
      <Flex gap={20}>
        <NavLink
          to="number"
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
        >
          Number
        </NavLink>
        <NavLink
          to="email"
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
        >
          Email
        </NavLink>
      </Flex>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Contact;
