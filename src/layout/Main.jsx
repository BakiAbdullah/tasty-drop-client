import Header from "../../src/components/shared/header/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "../components/shared/footer/Footer";
import { useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  const login = location.pathname.includes("login");
  const signup = location.pathname.includes("signup");
  const registerPage = location.pathname.includes("/partners/register");

  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-98px)] ">
        <Outlet />
      </div>
      {login || signup || registerPage ? "" : <Footer></Footer>}
      <Toaster />
    </>
  );
};

export default Main;
