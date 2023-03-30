import { Suspense } from "react";
import { Container, Center, Flex, Text } from "@mantine/core";
import { NavLink, Outlet } from "react-router-dom";

type Link = {
  isActive: boolean;
  isPending: boolean;
};

const RootLayout = () => {
  return (
    <Container>
      <Center py={20}>
        <Flex gap={20}>
          <NavLink
            to="home"
            className={({ isActive, isPending }: Link) =>
              isPending
                ? "pending"
                : isActive
                ? "text-green-500"
                : "text-gray-400"
            }
          >
            <Text>HOME</Text>
          </NavLink>
          <NavLink
            to="contact/number"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-green-500"
                : "text-gray-400"
            }
          >
            <Text>CONTACT</Text>
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-green-500"
                : "text-gray-400"
            }
          >
            <Text>ABOUT</Text>
          </NavLink>
        </Flex>
      </Center>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default RootLayout;
