import { Button } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  // const url = app_config.backend_url;
  const navigate = useNavigate();

  const [currentInvestor, setCurrentInvestor] = useState(
    JSON.parse(sessionStorage.getItem("investor"))
  );

  
  return (
    <div id="preview" class="preview">
      <div style={{ display: "none" }}></div>
      <div>
        <div
          data-draggable="true"
          class=""
          style={{ position: "relative" }}
          draggable="false"
        >
          <section
            draggable="false"
            class="overflow-hidden pt-0"
            data-v-271253ee=""
          >
            <section class="" style={{ paddingBottom: "1px" }}>
              <nav class="navbar navbar-expand-lg navbar-dark bg-darkyellow shadow-2">
                <div class="container-fluid">
                  <div class="d-flex">
                    <button
                      class="navbar-toggler"
                      type="button"
                      data-mdb-toggle="collapse"
                      data-mdb-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i class="fas fa-bars"></i>
                    </button>
                  </div>

                  <div
                    class="expand navbar-expand-md"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav me-auto mb-2 ms-2 ps-1 ms-lg-0 ps-lg-0 mb-lg-0">
                      <NavLink to="/main/home" className="nav-link">
                        <img
                          src={"http://localhost:5000/images/logo.svg"}
                          alt="logo"
                          width="80px"
                          height="80px"
                        />
                      </NavLink>
                      <li class="nav-item">
                        <li className="item">
                          <a
                            class="nav-link"
                            href="./Home"
                            aria-controls="#picker-editor"
                            draggable="false"
                          >
                            <h3 class="he">StartUpMuneem</h3>
                            <p class="hee">Funding Yahi Milti Hai</p>
                          </a>
                        </li>
                      </li>
                    </ul>
                  </div>

                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav me-auto mb-2 ms-2 ps-1 ms-lg-0 ps-lg-0 mb-lg-0 ">
                      <li class="nav-item it">
                        <NavLink
                          className="nav-link"
                          to="/main/home"
                          aria-controls="#picker-editor"
                          draggable="false"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li class="nav-item it">
                        <NavLink
                          className="nav-link"
                          to="/main/About"
                          aria-controls="#picker-editor"
                          draggable="false"
                        >
                          | About Us
                        </NavLink>
                      </li>
                      <li class="nav-item it">
                        <NavLink
                          className="nav-link"
                          to="/main/startuplist"
                          aria-controls="#picker-editor"
                          draggable="false"
                        >
                          | Explore Startups
                        </NavLink>
                      </li>
                      <li class="nav-item it">
                        <NavLink
                          className="nav-link"
                          to="/main/investorlist"
                          aria-controls="#picker-editor"
                          draggable="false"
                        >
                          | Explore Investors
                        </NavLink>
                      </li>
                      <li class="nav-item it">
                        <NavLink
                          className="nav-link"
                          to="/main/Faq"
                          aria-controls="#picker-editor"
                          draggable="false"
                        >
                          | FAQs
                        </NavLink>
                      </li>
                      
                    </ul>
                  </div>
                  <div class="d-flex align-items-center">
                    <button
                      type="button"
                      class="btn btn-dark px-3 mb-2 me-3"
                      aria-controls="#picker-editor"
                      onClick={(e) => navigate("./StartupSignup")}
                    >
                      Register as a Start-Up
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-dark px-3 mb-2 me-lg-3"
                      aria-controls="#picker-editor"
                      onClick={(e) => navigate("./InvestorSignup")}
                    >
                      Register as a Investor
                    </button>
                  </div>
                </div>
              </nav>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Header;
