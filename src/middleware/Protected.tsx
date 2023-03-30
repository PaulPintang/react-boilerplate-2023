import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

export const Protected = ({ children }: any) => {
  const { isAuth } = useAppSelector((state) => state.auth);
  if (!isAuth) return <Navigate to={"/"} replace={true}></Navigate>;
  return children!;
};
