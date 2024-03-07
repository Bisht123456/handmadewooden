import Footer from "../components/Footer/footer";
import Aboutme from "../components/aboutme/aboutme";
import Home from "../components/home/home";
import Stoolsingle from "../components/singlepage/Stoolsignle";
import SinglePage from "../components/singlepage/singlepage";

const routes = [
  { path: "/", element: <Home /> },
  { path: "footer", element: <Footer /> },
  { path: "singlepage", element: <SinglePage /> },
  { path: "stoolsingle", element: <Stoolsingle /> },
  { path: "aboutme", element: <Aboutme /> },
];

export default routes;
