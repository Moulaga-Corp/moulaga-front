import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAccount } from "wagmi";

const Home = lazy(() => import("./Home"));
const Holders = lazy(() => import("./Holders"));
const AccessControl = lazy(() => import("./AccessControl"));

function AppRouter() {
  const { address, isConnected } = useAccount();
  return (
    <Suspense>
      <Routes>
        <Route
          key={"home"}
          path={"/"}
          element={<Home/>}
        />

        <Route
          key={"holders"}
          path={"/holders"}
          element={<Holders/>}
        />

        {(!isConnected || address === undefined) ?
          <></> :
          <Route
            key={"access-control"}
            path={"/access-control"}
            element={<AccessControl/>}
          />
        }

        <Route
          key={"default"}
          path={"/*"}
          element={<Navigate replace to="/"/>}
        />
      </Routes>
    </Suspense>
  );
}

export default AppRouter;