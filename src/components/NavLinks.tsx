import { Center, Flex, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

type Link = {
  isActive: boolean;
  isPending: boolean;
};

const NavLinks = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  return (
    <Center py={20}>
      <Flex gap={20}>
        <NavLink
          to="/"
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
        {isAuth && (
          <NavLink
            to="users"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-green-500"
                : "text-gray-400"
            }
          >
            <Text>USERS</Text>
          </NavLink>
        )}
      </Flex>
    </Center>
  );
};

export default NavLinks;
