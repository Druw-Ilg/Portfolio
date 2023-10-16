import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const FidelleTech = () => {
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
										<SwiperSlide>
											<img src="assets/img/portfolio/fts-1.png" alt="" />
										</SwiperSlide>

										<SwiperSlide>
											<img src="assets/img/portfolio/fts-2.png" alt="" />
										</SwiperSlide>

										<SwiperSlide>
											<img src="assets/img/portfolio/fts-3.png" alt="" />
										</SwiperSlide>
										<SwiperSlide>
											<img src="assets/img/portfolio/fts-4.png" alt="" />
										</SwiperSlide>
										<SwiperSlide>
											<img src="assets/img/portfolio/fts-5.png" alt="" />
										</SwiperSlide>
									</div>
								</Swiper>
							</div>

							<div className="col-lg-4">
								<div className="portfolio-info">
									<h3>Project information</h3>
									<ul>
										<li>
											<strong>Stack</strong>: HTML, Bootstrap, Css, JavaScript,
											Firebase
										</li>
										<li>
											<strong>Client</strong>: Fidelle Tech Support
										</li>

										<li>
											<strong>Project URL</strong>:{" "}
											<a href="https://fidelle-tech-support.web.app/">
												www.fidelle-tech-support.com
											</a>
										</li>
									</ul>
								</div>
								<div className="portfolio-description">
									<h2>Description</h2>
									<p>
										Professional portfolio developed for Fidelle Tech Support.
										An authorised IT services provider.
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

export default FidelleTech;
