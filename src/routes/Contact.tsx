import { Flex } from "@mantine/core";
import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
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
