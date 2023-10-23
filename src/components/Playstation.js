import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { useTranslation } from "react-i18next";

const Playstation = () => {
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
											<img src="assets/img/portfolio/playstation.png" alt="" />
										</SwiperSlide>

										<SwiperSlide className="swiper-slide">
											<img src="assets/img/portfolio/playstation2.png" alt="" />
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<img src="assets/img/portfolio/playstation3.png" alt="" />
										</SwiperSlide>
									</div>
								</Swiper>
							</div>

							<div className="col-lg-4">
								<div className="portfolio-info">
									<h3>{t("Project information")}</h3>
									<ul>
										<li>
											<strong>Stack</strong>: React.js, Next.JS
										</li>

										<li>
											<strong>{t("Project URL")}</strong>:{" "}
											<a href="https://playstation-druw.vercel.app/">
												www.playstation-druw.vercel.app
											</a>
										</li>
										<li>
											<strong>Github</strong>:{" "}
											<a href="https://github.com/Druw-Ilg/playstation">
												www.github.com/Druw-Ilg/playstation
											</a>
										</li>
									</ul>
								</div>
								<div className="portfolio-description">
									<h2>Description</h2>
									<p>{t("playStationDesc")}</p>
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

export default Playstation;
