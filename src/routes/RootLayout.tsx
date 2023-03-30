import { Suspense } from "react";
import { Container, Center, Flex, Text } from "@mantine/core";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Container>
      <Center py={20}>
        <Flex gap={20}>
          <Link to="home" className="no-underline">
            <Text>HOME</Text>
          </Link>
          <Link to="contact/number" className="no-underline">
            <Text>CONTACT</Text>
          </Link>
          <Link to="about" className="no-underline">
            <Text>ABOUT</Text>
          </Link>
        </Flex>
      </Center>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default RootLayout;
