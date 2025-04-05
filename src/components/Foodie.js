import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { Pagination, Autoplay } from "swiper/modules";

const Foodie = () => {
  const { t } = useTranslation();

  return (
    <>
      <main id="main">
        <section className="portfolio-details">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                <Swiper
                  loop={true}
                  pagination={{
                    type: "bullets",
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  className="portfolio-details-slider"
                >
                  <div className="swiper-wrapper align-items-center">
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/img/portfolio/Foodie_Face.jpg"
                        alt="Foodie"
                      />
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/img/portfolio/Foodie_Business_Suite.jpg"
                        alt="Foodie"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/img/portfolio/foodie_stats.png"
                        alt="Foodie"
                      />
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>

              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>{t("Project information")}</h3>
                  <ul>
                    <li>
                      <strong>Platform</strong>: Facebook
                    </li>

                    <li>
                      <strong>{t("Website")}</strong>:
                      <a href="https://bio.site/foodiegabon">
                        www.bio.site/foodiegabon
                      </a>
                    </li>
                    <li>
                      <strong>Facebook</strong>:
                      <a href="https://m.facebook.com/foody.lib/">
                        Foodie Gabon
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>Description</h2>
                  <h5>{t("FoodieTitleDesc")}</h5>
                  <p>{t("FoodieDesc")}</p>
                </div>
                <Link to="/work">
                  <i class="bi bi-arrow-left"></i>
                  {t("Back")}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Foodie;
