import { Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ darkTheme, setDarkTheme }) => {
  // const url = app_config.backend_url;
  const navigate = useNavigate();

  return (
    <div id="preview" class="preview">
      <div style={{display: 'none'}}></div>
      <div>
        <div
          data-draggable="true"
          class=""
          style={{position: 'relative'}}
          draggable="false"
        >
          <section
            draggable="false"
            class="overflow-hidden pt-0"
            data-v-271253ee=""
          >
            <section class="" style={{paddingBottom: '1px'}}>
              <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-2">
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

                    <a class="navbar-brand ms-3" draggable="false">
                      <i
                        class="fas fa-gem text-primary"
                        aria-controls="#picker-editor"
                      ></i>
                    </a>
                  </div>

                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav me-auto mb-2 ms-2 ps-1 ms-lg-0 ps-lg-0 mb-lg-0">
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href=""
                          aria-controls="#picker-editor"
                          draggable="false"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href=""
                          aria-controls="#picker-editor"
                          draggable="false"
                        >
                          Team
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href=""
                          aria-controls="#picker-editor"
                          draggable="false"
                        >
                          Projects
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="d-flex align-items-center">
                    <button
                      type="button"
                      class="btn btn-link px-3 mb-1 me-2"
                      aria-controls="#picker-editor"
                      onClick={e => navigate('/')}
                    >
                      Login
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary mb-1 me-lg-3"
                      aria-controls="#picker-editor"
                    >
                      Sign up
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
