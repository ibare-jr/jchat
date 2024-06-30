import Home from "./pages/Home"
import Friends from "./pages/Friends"
import Chating from "./pages/Chating"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    // errorElement: <div>Error</div>
  },
  {
    path: "/friends",
    element: <Friends></Friends>,
    // errorElement: <div>Error</div>
  },
  {
    path: "/chating",
    element: <Chating></Chating>,
    // errorElement: <div>Error</div>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
