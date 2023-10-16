import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Cinch = () => {
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
											<img src="assets/img/portfolio/aseat.png" alt="" />
										</SwiperSlide>

										<SwiperSlide className="swiper-slide">
											<img src="assets/img/portfolio/aseat2.png" alt="" />
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<img src="assets/img/portfolio/aseat3.png" alt="" />
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
											<a href="/">www.aseat.co.za</a>
										</li>
									</ul>
								</div>
								<div className="portfolio-description">
									<h2>Description</h2>
									<p>
										Introducing ASEAT, a stellar e-commerce website meticulously
										crafted on WordPress, where I single-handedly developed
										every aspect from inception to conception. ASEAT redefines
										online furniture shopping, offering a seamless blend of
										cutting-edge technology and aesthetic appeal.
										<br />
										<strong>Key Features:</strong>{" "}
										<em>
											360-Degree View, User-Centric Interface, Secure
											Transactions
										</em>
										.<br />
										ASEAT is more than an e-commerce platform; it's a testament
										to my ability to merge technology with aesthetics to create
										an exceptional online shopping experience. From concept to
										execution, I undertook the entire development process,
										ensuring a bespoke website that stands out in the
										competitive e-commerce landscape.
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

export default Cinch;
