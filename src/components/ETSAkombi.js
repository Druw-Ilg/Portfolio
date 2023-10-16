import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ETSAkombi = () => {
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
											<img src="assets/img/portfolio/etsakombi.png" alt="" />
										</SwiperSlide>

										<SwiperSlide className="swiper-slide">
											<img src="assets/img/portfolio/etsakombi2.png" alt="" />
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<img src="assets/img/portfolio/etsakombi3.png" alt="" />
										</SwiperSlide>
									</div>
								</Swiper>
							</div>

							<div className="col-lg-4">
								<div className="portfolio-info">
									<h3>Project information</h3>
									<ul>
										<li>
											<strong>Stack</strong>: Wordpress
										</li>

										<li>
											<strong>Project URL</strong>:{" "}
											<a href="https://etsakombi.com/">www.etsakombi.com</a>
										</li>
									</ul>
								</div>
								<div className="portfolio-description">
									<h2>Description</h2>
									<p>
										"etsakombi", a sleek WordPress website, is your window into
										the gold trading realm. Developed exclusively by me, this
										simple yet powerful platform is dedicated to sharing
										essential information about ETS Akombi, a distinguished
										gold-selling company.
										<br />
										<strong>Key Highlights:</strong>{" "}
										<em>
											Simplicity Redefined, Gold Insights, Exclusive
											Development.
										</em>
									</p>
								</div>
								<Link to="/work">
									<i class="bi bi-arrow-left"></i>Back
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default ETSAkombi;
