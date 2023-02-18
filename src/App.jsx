import classes from "./App.module.scss";

const App = () => {
  const styles = [classes.app].join(" ");

  return <div className={styles}>App</div>;
};

export default App;
