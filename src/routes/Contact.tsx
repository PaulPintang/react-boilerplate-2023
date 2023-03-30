import { Flex } from "@mantine/core";
import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <p>Contact Details</p>
      <Flex gap={20}>
        <Link to="number">Number</Link>
        <Link to="email">Email</Link>
      </Flex>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Contact;
