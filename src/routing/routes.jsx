import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage';
import FoodDetailPage from "../pages/FoodDetailPage";
import CategoryFoodsPage from "../pages/CategoryFoodsPage";
import SearchFoodsPage from "../pages/SearchFoodsPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "post/:id",
    element: <FoodDetailPage />,
  },
  {
    path: "category/:id",
    element: <CategoryFoodsPage />,
  },
  {
    path: "search/:text",
    element: <SearchFoodsPage />,
  },
]);

export default router;
