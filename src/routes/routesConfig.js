import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";
import NotFoundPage from "@containers/NotFoundPage/NotFoundPage";

const routesConfig = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/people",
    component: <PeoplePage />,
  },
  {
    path: "*",
    component: <NotFoundPage />,
  },
];

export default routesConfig;
