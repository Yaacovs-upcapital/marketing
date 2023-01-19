import React, { useEffect, useState, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom';
import useWindowSize from '../windowSize';
import { i18n } from '../../translations/i18n';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Avatar, LogoBlue } from '../../assets/icons';
import avatar from "../../assets/images/avatar.png";
import bg1 from '../../assets/images/bg-1.png';
import collapseNav from '../../assets/images/collapse-nav.png';
import "./navbaritems.css";
// import avatar from "../../assets/images/Asset 49.png";
const useStyles = makeStyles(theme => ({
  footerStyle: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 38,
    backgroundImage: `url(/bottom-shape.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 199,
    display: 'flex',
    justifyContent: 'center',
  },
  langDivStyle: {
    width: '54%',
    height: '100%',
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  langText: {
    fontSize: 12,
    cursor: 'pointer',
    color: 'rgb(47, 67, 154)',
  },
  selectedLangText: {
    fontSize: 12,
    cursor: 'pointer',
    color: 'rgb(47, 67, 154)',
    // borderBottom: '1px solid rgb(47, 67, 154)',
  },

  // Web css
  mainDiv: {
    display: 'flex',

    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignSelf: 'center',
    direction: 'rtl',
    marginRight: "2rem"
  },
  langTextWeb: {
    borderStyle: 'none',
    backgroundColor: 'transparent',
    fontSize: 20,
    cursor: 'pointer',
    color: '#2f439a',
    marginLeft: 12,
    marginRight: 3,

  },
  selectedLangTextWeb: {
    borderStyle: 'none',
    backgroundColor: 'transparent',
    fontSize: 20,
    cursor: 'pointer',
    color: '#2f439a',
    // borderBottom: '1px solid #2f439a',
    marginLeft: 3,
    marginRight: 24,

  },
  isScrolled: {
    borderBottom: '1px solid #2f439a',
  }
}));

const NavbarItems = (props) => {
  // const { func } = props

  let avatarBrandRef = useRef<HTMLAnchorElement>(null);
  let navRef = useRef<HTMLElement>(null);
  let langBrandRef = useRef<HTMLDivElement>(null);
  let [avatarBrandToggle, setAvatarBrandToggle] = useState("none");
  let [langBrandToggle, setLangBrandToggle] = useState("none");
  const [scrolled, setScrolled] = useState(false);
  const onScroll = () => setScrolled(window.scrollY > 60);

  let dataBsToggle = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // clean up code
    // window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {

      window.removeEventListener('scroll', onScroll);
      setScrolled(true);
    };

  }, []);

  const handleNavbar = () => {
    avatarBrandRef.current!.style.display = avatarBrandToggle;
    langBrandRef.current!.style.display = langBrandToggle;
    if (avatarBrandToggle === "none") {
      setAvatarBrandToggle("block");
      setLangBrandToggle("block");
    }
    else {
      setAvatarBrandToggle("none");
      setLangBrandToggle("none");
    }

  }

  const classes = useStyles();

  const [language, setLanguage] = useState(localStorage.getItem("appLang")||"he");
  const handleOnclick = (e: any) => {
    e.preventDefault();
    setLanguage(e.target.value);
    localStorage.setItem("appLang",e.target.value)
  };

  props.lang.navLang.getlang(language)

  const { t } = useTranslation()
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => {
    setIsNavCollapsed(false);
  setTimeout(()=>setIsNavCollapsed(true),1)
  }
console.log( "appLang"  , localStorage.getItem("appLang"));



  return (
    <>
      <nav className={`navbar fixed-top navbar-expand-xl ${language=='he'?'up-nav':'up-nav-en'}`} id='nav' >
        <div className={`container-fluid`}>

          <NavLink className="navbar-brand" to={"/"}> <LogoBlue className='brnd' /> </NavLink>
          <a href='https://vendors.upcapital.io/' ref={avatarBrandRef} className="navbar-brand avatar_brand"><img src={avatar} className={`${language=='he'?'avatar':"avatar-en"}`} /></a>

          <div className={`${language=='he'?'langSetting':"langSetting-en"}`} ref={langBrandRef} >

            <button
              value='en'

              onClick={(e) => handleOnclick(e)}
            >
              {t('en')}
            </button>
            <span>|</span>
            <button

              value='he'

              onClick={(e) => handleOnclick(e)}
            >
              {t('he')}
            </button>
          </div>

          <a href={"https://vendors.upcapital.io/"} className={`${language=='he'?'vendors_login_lg':"vendors_login_lg_en"}`} >{t("vendors_login")}</a>


          <button className="navbar-toggler" style={{ position: "fixed", left:language=='he'?"10px":'',right:language=='he'?"":'10px', top: "19px" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" onClick={handleNavbar}></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarTogglerDemo02" style={{ padding: useWindowSize() > 500 ? "" : "0 1rem 0 1rem" }}>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center" style={{ display: useWindowSize() > 1200 ? 'flex' : 'inherit', flexDirection: "row", width: useWindowSize() > 1300 ? 810 : 'inherit' }}>
              <li className="nav-item " style={{ textAlign:language=="he"?"right":"left" }}><NavLink to={"/"} className="nav-link" onClick={handleNavCollapse}>{t("home")}</NavLink></li>
              <li className="nav-item" style={{ textAlign: language=="he"?"right":"left" }}><NavLink to={"/our-solution/"} className="nav-link" onClick={handleNavCollapse}>{t('solution')}</NavLink></li>
              <li className="nav-item" style={{ textAlign: language=="he"?"right":"left" }}><NavLink to={"/about-us/"} className="nav-link" onClick={handleNavCollapse}>{t('about')}</NavLink></li>
              <li className="nav-item" style={{ textAlign: language=="he"?"right":"left"}}><NavLink to={"/blog/"} className="nav-link" onClick={handleNavCollapse}>{t("blog")}</NavLink></li>
              <li className="nav-item" style={{ textAlign: language=="he"?"right":"left" }}><NavLink to={"/career/"} className="nav-link" onClick={handleNavCollapse}>{t("career")}</NavLink></li>
              <li className="nav-item" style={{ textAlign: language=="he"?"right":"left" }}><NavLink to={"/contact-us/"} className="nav-link" onClick={handleNavCollapse}>{t("contact")}</NavLink></li>
                {/* <div onClick={() => {
                let offsetTop = (document.getElementById("contact") as HTMLElement).offsetTop;
                window.scrollTo({
                  top: window.innerWidth > 500 ? offsetTop + 100 : offsetTop,
                  behavior: "smooth"
                });
                handleNavCollapse()
              }} className="nav-link" style={{ cursor: "pointer" }} >{t("contact")}</div> */}
            




            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center" style={{ marginTop: "2rem" }}>
              <li className="nav-item">
                <a href='https://vendors.upcapital.io/' className={`nav-link ${language=='he'?"vendors_login_sm":"vendors_login_sm_en"}`}> <img src={avatar} className={`${language=='he'?"avatar2":"avatar2-en"}`} />{t("vendors_login")}</a>

              </li>
              <li className="nav-item">
                <div className={`${language=='he'?'langSetting2':"langSetting2-en"}`}>
                  <button
                    value='en'

                    onClick={(e) =>{ handleOnclick(e); handleNavCollapse()}}
                  >
                    {t('en')}
                  </button>
                  <span >|</span>
                  <button

                    value='he'

                    onClick={(e) => {handleOnclick(e);handleNavCollapse()}}
                  >
                    {t('he')}
                  </button>
                </div>
              </li>

            </ul>

          </div>



        </div>

      </nav>


    </>
  )
}

export default NavbarItems