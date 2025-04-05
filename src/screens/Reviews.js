import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { useTranslation } from "react-i18next";

const Reviews = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header page={"reviews"} />
      <main id="main">
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>{t("Testimonials")}</h2>
              <ol>
                <li>
                  <Link to="/">{t("Home")}</Link>
                </li>
                <li>{t("Testimonials")}</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    {t("testimonialsBlessing")}

                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <h3>Blessing</h3>
                  <h4>CEO &amp; Founder at Cinchfin</h4>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="testimonial-item mt-4 mt-lg-0">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    {t("testimonialsFidelle")}
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <h3>Fidelle Banza</h3>
                  <h4>CEO &amp; Founder at Fidelle Tech Support</h4>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="testimonial-item mt-4">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    {t("testimonialsThemba")}

                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <h3>Themba</h3>
                  <h4>CEO at Lia-sa</h4>
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

export default Reviews;
