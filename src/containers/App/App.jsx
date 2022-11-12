import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";

import routesConfig from "@routes/routesConfig";

import Header from "@components/Header/Header";

import styles from "./App.module.css";
// import { getApiResources } from "../../utils/network";
const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        {routesConfig.map(({ path, component }, index) => (
          <Route key={index} path={path} element={component} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
