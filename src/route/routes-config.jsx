import Home from "@/pages/home";
import CategoryPage from "@/pages/category";
import ProductPage from "@/pages/product";

const routeConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category",
    element: <CategoryPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
];

export default routeConfig;
