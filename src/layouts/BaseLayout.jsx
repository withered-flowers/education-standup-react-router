import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function BaseLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default BaseLayout;
