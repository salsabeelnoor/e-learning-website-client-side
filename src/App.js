import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes/Routes";

function App() {
  return (
    <div className="App bg-gray-200 min-h-screen">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
