import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useEffect, useState } from "react";
import './drawer.css';
import "../navbar/navbar.css";
import { NavLink } from "react-router-dom";
import { i18n } from "../../translations/i18n";
import { useTranslation } from "react-i18next";

// type Anchor = "top" | "left" | "bottom" | "right";

const TempDrawer = () => {
  const { t } = useTranslation();
  const lang= i18n.language
  const [scrolled, setScrolled] = useState(false);
  const onScroll = () => setScrolled(window.scrollY > 60);
  
  useEffect(() => {
    // clean up code
    // window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!isOpen)
  }

  const drawerPaths = [
    { path: "/", title: "בית" },
    { path: "/our-solution/", title: "הפתרון שלנו" },
    { path: "/about-us/", title: "מי אנחנו" },
    { path: "/blog/", title: "מאמרים" },
    { path: "/career/", title: "קריירה" },
    { path: "/contact-us/", title: "צור קשר" },
  ]
  const list = () => (
    <div
      style={{ width: " 100%" }}
      //role="presentation"
      className="drawer-container"
    >

      <div className={isOpen ? "opened-nav" : ''} >
        <div style={{marginBottom:"30px"}}>{drawerPaths.map((item) => (
          <div style={{ width: "40%", margin: "auto", padding: "20px 0" }}>

            <NavLink to={item.path} className="link" >{item.title}</NavLink>
          </div>
        ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", width: "50%", margin: "auto" }}>
          <div> <NavLink to={"/app/"} className="link-button">{t('vendors_login')}</NavLink></div>
        </div>
      </div>
    </div>
  );


  return (
    <div >
      <Button onClick={toggleDrawer}><MoreHorizIcon sx={{ fontSize: 50, color: scrolled ? "#2f439a" : "#fff" }} /></Button>
      <Drawer
        anchor={"top"}
        open={isOpen}
        onClick={toggleDrawer}
      >
        {list()}
      </Drawer>
    </div>
  );

}
export default TempDrawer