import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { TablePage } from "@pages/index";
import { ROUTES } from "@constants/constants";
import { useTypedSelector } from "@hooks/useTypedSelector";

export const App: FC = () => {
  const startPage = useTypedSelector((store) => store.activePage);

  return (
    <Routes>
      <Route
        path={ROUTES.HOME.mask}
        element={<Navigate to={ROUTES.TABLE.createRoot(startPage)} />}
      />
      <Route path={ROUTES.TABLE.mask} element={<TablePage />} />
    </Routes>
  );
};
