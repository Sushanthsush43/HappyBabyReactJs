import { useEffect, useState } from "react";
import GloblePageLoader from "../PageLoader/GloblePageLoader";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import FooterComponet from "../footerComponet/FooterComponet";
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const MainPageComponet = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [activeLink, setActiveLink] = useState('Home_Page');

  useEffect(() => {

    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setLoading(false);
        navigate('/Home_Page');
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [location, navigate]);

  return (
    <>
      {loading ? (
        <GloblePageLoader />
      ) : (
        <>
          <NavbarComponent
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
          <Outlet />
          <FooterComponet
            // activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        </>
      )}
    </>
  );
}

export default MainPageComponet;
