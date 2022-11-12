import PeoplePage from "@containers/PeoplePage";
import styles from "./App.module.css";

// import { getApiResources } from "../../utils/network";
const App = () => {
  return (
    <div className={styles.wrapper}>
      <PeoplePage />
    </div>
  );
};

export default App;
