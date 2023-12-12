import { BrowserRouter as Router } from "react-router-dom";
import RouteRenderer from "./route/route-renderer";

function App() {
  return (
    <Router>
      <RouteRenderer />
    </Router>
  );
}

export default App;
