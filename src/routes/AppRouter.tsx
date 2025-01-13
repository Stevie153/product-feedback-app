import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={"#"} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
