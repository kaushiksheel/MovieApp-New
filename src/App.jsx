import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading } from "./components/Loading";
import NavComp from "./components/Navbar";
import { MovieContextProvider } from "./context/MovieContext";
import routes from "./routes";

function App() {
  return (
    <MovieContextProvider>
      <NavComp />
      <Suspense fallback={<Loading />}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </MovieContextProvider>
  );
}

export default App;
