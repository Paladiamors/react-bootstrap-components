import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { routes, dynamicRoutes } from "./routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ul>
          {routes.map((route) => ( route.dynamic ||
            <li key={route["path"]}>
              <Link to={route["path"]}>
                {route["title"]}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {dynamicRoutes.map((route) => ( route.dynamic ||
            <li key={route["path"]}>
              <Link to={route["path"]}>
                {route["title"]}
              </Link>
            </li>
          ))}
        </ul>
        <Routes>
          {routes.map((route) => (
            <Route
              path={route["path"]}
              element={<route.component />}
              key={route["path"]}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
