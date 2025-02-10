import { Link } from "react-router-dom";

import Isotope from "isotope-layout";

import Header from "./Header";
import Footer from "./Footer";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css"; // Import CSS
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Work = () => {
  const { t } = useTranslation();

  /**
   * Initiate portfolio lightbox
   */
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".portfolio-lightbox",
      preload: true,
    });

    lightbox.on("slide_before_change", ({ prev, current }) => {});

    return () => {
      lightbox.destroy(); // Cleanup on unmount
    };
  }, []);

  /**
   * Initiate portfolio details lightbox
   */
  // const portfolioDetailsLightbox = GLightbox({
  // 	selector: ".portfolio-details-lightbox",
  // 	width: "90%",
  // 	height: "90vh",
  // 	preload: true,
  // });

  /**
   * Porfolio isotope and filter
   */

  const filterPortfolio = (e) => {
    let portfolioContainer = document.querySelector(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
        filter: "filter-web",
      });
      let portfolioFilters = document.querySelectorAll("#portfolio-flters li");

      for (let i = 0; i < portfolioFilters.length; i++) {
        let el = portfolioFilters[i];
        el.classList && el.classList.remove("filter-active");
      }

      e.classList.add("filter-active");

      portfolioIsotope.arrange({
        filter: e.getAttribute("data-filter"),
      });
    }
  };
  return (
    <>
      <Header page={"work"} />
      <main id="main">
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Work</h2>
              <ol>
                <li>
                  <Link to="/">{t("Home")}</Link>
                </li>
                <li>{t("My Work")}</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li
                    data-filter="*"
                    className="filter-active"
                    onClick={(e) => {
                      filterPortfolio(e.target);
                    }}
                  >
                    All
                  </li>
                  <li
                    data-filter=".ReactJs"
                    onClick={(e) => {
                      filterPortfolio(e.target);
                    }}
                  >
                    React.js
                  </li>
                  <li
                    data-filter=".JavaScript"
                    onClick={(e) => {
                      filterPortfolio(e.target);
                    }}
                  >
                    JavaScript
                  </li>
                  <li
                    data-filter=".NextJs"
                    onClick={(e) => {
                      filterPortfolio(e.target);
                    }}
                  >
                    Next.js
                  </li>
                  <li
                    data-filter=".JQuery"
                    onClick={(e) => {
                      filterPortfolio(e.target);
                    }}
                  >
                    JQuery
                  </li>
                  <li
                    data-filter=".PHP"
                    onClick={(e) => {
                      filterPortfolio(e.target);
                    }}
                  >
                    PHP
                  </li>

                  <li
                    data-filter=".WordPress"
                    onClick={(e) => {
                      filterPortfolio(e.target);
                    }}
                  >
                    WordPress
                  </li>
                </ul>
              </div>
            </div>
            {/* All image's portfolio in the same gallery */}
            <div className="row portfolio-container">
              <div className="col-lg-4 col-md-6 portfolio-item ReactJs">
                <div className="portfolio-wrap">
                  <img
                    src="../assets/img/portfolio/movilib-1.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Movilib</h4>
                    <p></p>
                    <div className="portfolio-links">
                      <a
                        href="../assets/img/portfolio/movilib-1.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <Link
                        to="/movilib"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item JQuery PHP">
                <div className="portfolio-wrap">
                  <img
                    src="../assets/img/portfolio/triveho-1.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Triveho</h4>
                    <p></p>
                    <div className="portfolio-links">
                      <a
                        href="../assets/img/portfolio/triveho-1.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <Link
                        to="/triveho"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item JavaScript">
                <div className="portfolio-wrap">
                  <img
                    src="../assets/img/portfolio/fts-1.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Fidelle Tech Support</h4>
                    <p></p>
                    <div className="portfolio-links">
                      <a
                        href="../assets/img/portfolio/fts-1.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <Link
                        to="/fidelle-tech"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item WordPress">
                <div className="portfolio-wrap">
                  <img
                    src="../assets/img/portfolio/cybersynopsis.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>CyberSynopsis</h4>
                    <p></p>
                    <div className="portfolio-links">
                      <a
                        href="../assets/img/portfolio/cybersynopsis.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <Link
                        to="/cyberSynopsis"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item WordPress">
                <div className="portfolio-wrap" style={{ textAlign: "center" }}>
                  <img
                    src="../assets/img/portfolio/cinch-1.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Cinch Finance</h4>
                    <p></p>
                    <div className="portfolio-links">
                      <a
                        href="../assets/img/portfolio/cinch-1.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <Link
                        to="/cinch"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item JavaScript">
                <div className="portfolio-wrap">
                  <img
                    src="../assets/img/portfolio/lia-1.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Lia-sa</h4>
                    <p></p>
                    <div className="portfolio-links">
                      <a
                        href="../assets/img/portfolio/lia-1.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <Link
                        to="/lia-sa"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item JavaScript ReactJs NextJs">
                <div className="portfolio-wrap">
                  <img
                    src="../assets/img/portfolio/my-bank.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>My-Bank</h4>
                    <p></p>
                    <div className="portfolio-links">
                      <a
                        href="../assets/img/portfolio/my-bank.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <Link
                        to="/my-bank"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item JavaScript ReactJs NextJs">
                <div className="portfolio-wrap">
                  <img
                    src="../assets/img/portfolio/playstation.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>PlayStation</h4>
                    <p></p>
                    <div className="portfolio-links">
                      <a
                        href="../assets/img/portfolio/playstation.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <Link
                        to="/playstation"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item WordPress">
                <div className="portfolio-wrap">
                  <img
                    src="../assets/img/portfolio/aseat.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>ASEAT</h4>
                    <p></p>
                    <div className="portfolio-links">
                      <a
                        href="../assets/img/portfolio/aseat.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <Link
                        to="/aseat"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item WordPress">
                <div className="portfolio-wrap">
                  <img
                    src="../assets/img/portfolio/etsakombi.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>ETSAkombi</h4>
                    <p></p>
                    <div className="portfolio-links">
                      <a
                        href="../assets/img/portfolio/etsakombi.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <Link
                        to="/etsakombi"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Work;
