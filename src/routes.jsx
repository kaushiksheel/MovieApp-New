import ShowTvInfo from "./helpers/ShowTvInfo";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import ShowInfo from "./pages/ShowInfo";
import TvSeries from "./pages/TvSeries";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/movies", element: <Movies /> },
  { path: "/tv-series", element: <TvSeries /> },
  { path: "/search", element: <Search /> },
  { path: "/:id", element: <ShowInfo /> },
  { path: "/tv/:id", element: <ShowTvInfo /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
