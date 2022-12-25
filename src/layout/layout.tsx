import { Routes, Route, Link, BrowserRouter, useLocation, HashRouter } from "react-router-dom";

import FintechNation from "../pages/fintechNation";
import Home from "../pages/home";
import Solution from "../pages/solution";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import JobOffer from "../pages/jobOffer";
import TermOfUse from "../pages/termsOfUse";
import PrivacyPolicy from "../pages/policy";
import ClientLogin from "../pages/clientLogin";
import { useEffect } from "react";
import About from "../pages/aboutUs";
import Blog from "../pages/blog";
import Career from "../pages/Career";
import ContactUs from "../pages/contactUs";
import { display } from "@mui/system";
import Prepayment from "../pages/prepayment";
import Consult from "../pages/consult";
export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const Layout =  (props) => {
    const  location = window.location.href
    const displayFooter=location.indexOf('contact-us')==-1
// console.log("pathname",location)
    return (
        <HashRouter  >
            <Navbar navLang={props} />
            <ScrollToTop />

            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/our-solution/" element={<Solution />} />
                <Route path="/about-us/" element={<About />} />
                <Route path="/blog/" element={<Blog />} />
                <Route path="/career/" element={<Career />} />
                <Route path="/blog/:id/" element={<FintechNation />} />
                <Route path="/job-offer/:id/" element={<JobOffer />} />
                <Route path="/terms-of-use/" element={<TermOfUse />} />
                <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
                <Route path="/app/" element={<ClientLogin />} />
                <Route path="/contact-us/" element={<ContactUs />} />
                <Route path="/consuly/" element={<Consult />} />
                <Route path="/prepayment/" element={<Prepayment />} />
            </Routes>
            {displayFooter&&<Footer />}
        </HashRouter>
    );
};

export default Layout