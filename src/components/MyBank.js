import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { useTranslation } from "react-i18next";

const MyBank = () => {
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
											<img src="assets/img/portfolio/my-bank.png" alt="" />
										</SwiperSlide>

										<SwiperSlide className="swiper-slide">
											<img src="assets/img/portfolio/my-bank2.png" alt="" />
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<img src="assets/img/portfolio/my-bank3.png" alt="" />
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<img src="assets/img/portfolio/my-bank4.png" alt="" />
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<img src="assets/img/portfolio/my-bank5.png" alt="" />
										</SwiperSlide>
									</div>
								</Swiper>
							</div>

							<div className="col-lg-4">
								<div className="portfolio-info">
									<h3>{t("Project information")}</h3>
									<ul>
										<li>
											<strong>Stack</strong>:JavaScript, Next.JS, Bootstrap,
											Node.js, MongoDb, SCSS
										</li>

										<li>
											<strong>{t("Project URL")}</strong>:{" "}
											<a href="https://my-bank-six.vercel.app/">
												www.my-bank-six.vercel.app
											</a>
										</li>
										<li>
											<strong>Github</strong>:{" "}
											<a href="https://github.com/Druw-Ilg/my-bank">
												www.github.com/Druw-Ilg/my-bank
											</a>
										</li>
									</ul>
								</div>
								<div className="portfolio-description">
									<h2>Description</h2>
									<p>{t("myBankDesc")}</p>
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

export default MyBank;
