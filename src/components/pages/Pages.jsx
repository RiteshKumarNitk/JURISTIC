import React, { useState, useEffect } from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Modal from "react-modal";
import "./style.css";
import Civil from "../civil/Civil";
import Criminal from "../criminal/Criminal";
import BankingFinance from "../banking-finance/BankingFinance";
import SecuritiesLaws from "../securities-laws/SecuritiesLaws";
import ForeignExchange from "../foreign-exchange/ForeignExchange";
import IntellectualPropertyRights from "../intellectual-property-rights/IntellectualPropertyRights";
import ConstitutionalLaw from "../constitutional-law/ConstitutionalLaw";
import ServiceLaw from "../service-law/ServiceLaw";
import AlternateDisputeResolution from "../alternate-dispute-resolution/AlternateDisputeResolution";
import CoreTeam from "../coreTeam/CoreTeam";
import Newsltr from "../newsltr/Newsltr";
import Articles from "../articles/Articles";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}
Modal.setAppElement("#root");

const Pages = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="pages-container">
      <Modal
        isOpen={isModalOpen}
        className="flex justify-center items-center fixed z-[2] w-full h-screen "
      >
        <div className=" absolute p-52 md:p-16 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-gray-500 h-screen w-screen justify-center bg-opacity-60 transition-opacity duration-298 overflow-y-auto">
          <div className=" relative  rounded-lg w-50% bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased ">
            <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
              Disclaimer
            </div>
            <div className="relative p-4  font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
              As per the rules of the Bar Council of India, lawyers and law
              firms are not permitted to solicit their work or advertise in any
              manner. By clicking on the “I Agree” button, the user agrees and
              acknowledges as under:
              <div className="p-0 pl-4">
                    <Typography className="font-normal">
                    There has been no advertisement, personal communication, solicitation, invitation or any other inducement of any sort whatsoever by or on behalf of Legal Inkwell or any of its members to solicit any work through this website. 
                    </Typography>
                    <Typography className="font-normal">
                    All material and information (except any statutory instruments or judicial precedents) on this website is the property of Legal Inkwell, and no part thereof shall be used, with or without adaptation, without the express prior written consent or approval from Legal Inkwell.
                    </Typography>
                    <Typography className="font-normal">
                    The user(s) wishes to gain more information about Legal Inkwell for his/her/their own information and use. 
                    </Typography>
                    <Typography className="font-normal">
                    All information about Legal Inkwell on this website is being provided to the user(s) only on his/her/their specific request and any information obtained or materials downloaded from this website is completely at the volition of user(s); and any transmission, receipt or use of this site would not create any lawyer-client relationship.
                    </Typography>
                    <Typography className="font-normal">
                    The information provided on this website is solely available at the request of the user(s) for informational purposes only. It should not be interpreted as a soliciting or advertisement. 
                    </Typography>
                    <Typography className="font-normal">
                    Legal Inkwell assumes no liability for the interpretation and/or use of the information available on this website, neither does it offer a warranty of any kind, nor express or implicit authorization of the content included in www.legalinkwell.com not even through a hyperlink, without express and written consent from www.legalinkwell.com. 
                    </Typography>
                    <Typography className="font-normal">
                    The content available on this website does not constitute, and shall not be construed, as legal advice or a substitute for legal advice. 
                    </Typography>
                    <Typography className="font-normal">
                    Legal Inkwell is not liable for any consequence of any action taken by the user(s) relying on material/information provided on this website or through any external links thereon. 
                    </Typography>
                    <Typography className="font-normal">
                    This website is a resource for informational purposes only and though intended, is not promised or guaranteed, to be complete or updated. Legal Inkwell does not warrant that the information contained on this website is accurate or complete, and hereby disclaims any and all liability to any person for any loss or damage caused by errors or omissions, whether such errors or omissions result from negligence, accident or any other cause. 
                    </Typography>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
              <button
                data-ripple-dark="true"
                data-dialog-close="true"
                className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Cancel
              </button>
              <button
                data-ripple-light="true"
                data-dialog-close="true"
                onClick={handleCloseModal}
                className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/civil" component={Civil} />
          <Route exact path="/criminal" component={Criminal} />
          <Route exact path="/banking-finance" component={BankingFinance} />
          <Route exact path="/securities-laws" component={SecuritiesLaws} />
          <Route exact path="/foreign-exchange" component={ForeignExchange} />
          <Route
            exact
            path="/intellectual-property-rights"
            component={IntellectualPropertyRights}
          />
          <Route
            exact
            path="/constitutional-law"
            component={ConstitutionalLaw}
          />
          <Route exact path="/service-law" component={ServiceLaw} />
          <Route
            exact
            path="/alternate-dispute-resolution"
            component={AlternateDisputeResolution}
          />
          <Route exact path="/CoreTeam" component={CoreTeam} />
          <Route exact path="/Newsltr" component={Newsltr} />
          <Route exact path="/Articles" component={Articles} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default Pages;
