import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import HalamanPertama from "../pages/HalamanPertama";
import HalamanKedua from "../pages/HalamanKedua";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <HalamanPertama />,
      },
      {
        path: "/kedua",
        element: <HalamanKedua dataDariFetcher={"Ini si Value"} />,
      },
    ],
  },
]);

export default router;
