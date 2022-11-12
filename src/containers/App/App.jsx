import { Route, Routes } from "react-router-dom";

import Header from "@components/Header";

import routesConfig from "@routes/routesConfig";

import styles from "./App.module.css";

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
