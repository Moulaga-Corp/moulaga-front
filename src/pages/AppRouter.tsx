import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAccount } from "wagmi";

const Home = lazy(() => import("./Home"));
const Holders = lazy(() => import("./Holders"));
const Consumers = lazy(() => import("./Consumers"));

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
            key={"consumers"}
            path={"/consumers"}
            element={<Consumers/>}
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