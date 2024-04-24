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
// import Disclaimer from "../disclaimer/disclaimer";
import Modal from "react-modal"; // Import react-modal
import "./style.css"; // Import the CSS file for styling




Modal.setAppElement("#root"); // Set the app element for modal accessibility

const Pages = () => {
  // const [isDisclaimerWatched, setIsDisclaimerWatched] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true); // State to control modal visibility

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <div className="pages-container">
      <Modal isOpen={isModalOpen}>
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Disclaimer</h2>
            </div>
            <div className="relative m-4 w-3/5 min-w-[60%] max-w-[60%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl">
              <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
                Its a simple dialog.
              </div>
              <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
                The key to more success is to have a lot of pillows. Put it this
                way, it took me twenty five years to get these plants, twenty five
                years of blood sweat and tears, and I&apos;m never giving up,
                I&apos;m just getting started. I&apos;m up to something. Fan luv.
              </div>
              <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Confirm
                </button>
              </div>
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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default Pages;
