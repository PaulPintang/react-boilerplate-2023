import { Link } from "react-router-dom";
import { Text } from "@mantine/core";
const ErrorPage = () => {
  return (
    <div className="text-red-400 font-semibold">
      <Text>ErrorPage!!!</Text>
      <Link to="/">Return to home</Link>
    </div>
  );
};

export default ErrorPage;
