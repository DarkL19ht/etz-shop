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

// export default function RouteConfig() {
//   return (
//     <Routes>
//       <Route path="/" element={Home} />
//       <Route path="/category" element={CategoryPage} />
//       <Route path="/product" element={ProductPage} />
//     </Routes>
//   );
// }
