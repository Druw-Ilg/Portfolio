import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
const CyberSynopsis = () => {
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
												src="assets/img/portfolio/cybersynopsis.png"
												alt=""
											/>
										</SwiperSlide>

										<SwiperSlide className="swiper-slide">
											<img
												src="assets/img/portfolio/cybersynopsis2.png"
												alt=""
											/>
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<img
												src="assets/img/portfolio/cybersynopsis3.png"
												alt=""
											/>
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<img
												src="assets/img/portfolio/cybersynopsis4.png"
												alt=""
											/>
										</SwiperSlide>
									</div>
								</Swiper>
							</div>

							<div className="col-lg-4">
								<div className="portfolio-info">
									<h3>Project information</h3>
									<ul>
										<li>
											<strong>Stack</strong>:Wordpress
										</li>

										<li>
											<strong>Project URL</strong>:{" "}
											<a href="https://cybersynopsis.co.za/">
												www.cybersynopsis.co.za
											</a>
										</li>
									</ul>
								</div>
								<div className="portfolio-description">
									<h2>Description</h2>
									<p>
										As the creative force behind CyberSynopsis, I proudly
										introduce a cutting-edge web application developped on the
										robust WordPress platform. I've harnessed the power of
										WordPress plugins and customized functionalities to offer
										businesses a dynamic online solution. One standout feature
										is CyberSynopsis's unique capability: visitors can
										effortlessly schedule appointments directly on the platform.
										The system ensures a smooth user experience, providing
										instant email confirmations for scheduled appointments. This
										not only streamlines interactions but also enhances user
										engagement.
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

export default CyberSynopsis;
