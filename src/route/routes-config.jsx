import Home from "@/pages/home";
import AboutUs from "@/pages/about-us";
import TermsAndConditions from "@/pages/terms&conditions";
import PrivacyPolicy from "@/pages/privacyPolicy";

const routeConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/terms&conditions",
    element: <TermsAndConditions />,
  },
  {
    path: "/privacyPolicy",
    element: <PrivacyPolicy />,
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
