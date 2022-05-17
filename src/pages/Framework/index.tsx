import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export const FrameworkPage: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
