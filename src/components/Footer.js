import React from "react";
import { Link } from "react-router-dom";
import i18next from "i18next";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const d = new Date();

  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 links-col">
                <div className="footer-info">
                  <Link to="/" className="logo me-auto footer-logo">
                    <img
                      src="assets/img/logo/logo-no-bg2-edited.png"
                      alt=""
                      className="img-fluid footer-logo"
                    />
                  </Link>
                  <div>
                    <h4>{t("Get in touch with me")}:</h4>
                    <div className="social-links mt-3">
                      <a
                        href="https://www.linkedin.com/in/andruw-ilagou-507745198"
                        className="linkedin"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                      <a
                        href="https://www.github.com/Druw-Ilg/"
                        className="github"
                      >
                        <i className="bx bxl-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; {d.getFullYear() + " "}
            <strong>
              <span>Andruw Ilagou</span>
            </strong>
            . {i18next.t("All Rights Reserved", "All Rights Reserved")}
          </div>
        </div>
      </footer>
      <a
        href="./#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default Footer;
